---
title: 'Songdo Edge Intelligence'
summary: 'A multi-process Linux edge node that keeps sensing, deciding and acting when the internet is cut, then syncs every event with zero loss.'
repo: 'https://github.com/Umid-R/songdo-edge-intelligence'
role: 'Team leader (team of 8): repo, merging, version control, code review. Built the OS2 robot controller with a teammate.'
duration: 'Operating Systems course project, Inha University'
stack: ['Python', 'Linux', 'SQLite', 'systemd', 'Docker', 'Git']
---

**Mission:** *"Make Songdo compute locally and reliably."*
**Signature demo:** *disconnect the internet → the system keeps working.*

Smart-city devices (buildings, robots, traffic signs, flood gates) shouldn't stop working just because the network goes down. This project is a Linux edge node that keeps **sensing, deciding and acting locally** while the WAN is cut, stores everything safely, and delivers every event once the connection is back, with **zero lost and zero duplicated events**.

## At a glance

- **25/25** scenarios pass (5 themes × 5 scenarios, all on one shared core)
- **87/87** unit tests pass
- Four **10-minute WAN outages** with zero lost and zero duplicated events
- systemd restarts the node **2 s** after a SIGKILL
- The Docker container runs **healthy**
- The robot stopped for **162/162** obstacles while offline

![All 25 scenarios passing](/projects/songdo-edge-intelligence/04_all_25_scenarios.png)

## My role

I led a team of 8. I managed the GitHub repo, merged everyone's work, handled version control and reviewed the other members' code. I also built **OS2, the robot edge controller**, together with a teammate.

## How it works

```
SensorGen --(bounded queue, 500, drop oldest)--> Processor --> SQLite WAL (event + outbox in ONE transaction)
HealthMon (/proc -> process health)                  |       local decisions with expiry time -> actuator
API (dashboard, /api/status)                          SyncWorker (drains the outbox only while WAN is online)
Supervisor starts, monitors, restarts and cleanly stops every process.
```

- **Separate Linux processes.** Each worker runs in its own process. A crash in one can't corrupt another, and the supervisor restarts dead workers (SIGCHLD + `wait()`, so no zombies).
- **Bounded queues.** When the consumer is slow, the *oldest* reading is dropped, so memory stays bounded and the newest data is kept.
- **Durable first, network second.** Every reading is written to SQLite together with an outbox row in one transaction. Local decisions never wait for the network.
- **Commands expire.** Each actuator command has an expiry time on the monotonic clock, so a late command is rejected instead of acting on old information.
- **Offline, then drain.** While offline, the outbox grows. When the WAN is back, it drains in batches, and the receiver deduplicates by event id. A conservation check (`events = delivered + pending`) proves nothing was lost.

## OS2: the robot controller (my part)

| Scenario | What it shows |
|---|---|
| Multi-process architecture | LiDAR, Controller and SafetyMonitor run as 3 processes. The controller has a deliberate bug, and the SafetyMonitor vetoes every bad command over a Unix socket. |
| Periodic deadlines & jitter | A 50 ms control loop on absolute monotonic deadlines doesn't drift, even with CPU-burning processes competing. |
| Obstacle e-stop & command expiry | LiDAR < 0.8 m triggers the emergency stop directly. Commands older than 500 ms are rejected. |
| Worker crash & restart | The motion worker is killed with SIGKILL, and the supervisor restarts it in ~0.1–0.2 s with its state restored from SQLite. |
| Offline navigation | The robot drives a Central Park path with the WAN cut, stops for every pedestrian or dog closer than 0.8 m, and delivers every sensor event after the WAN returns. |

**10-minute offline run:** 12,000 control ticks (longest gap 89 ms), **162/162** obstacle stops, **0** false stops, 253 m driven, then **24,320 events stored = 24,320 delivered**.

![OS2 robot running offline for 10 minutes](/projects/songdo-edge-intelligence/07_os2_s5_10min.png)

![OS2 route and e-stop points](/projects/songdo-edge-intelligence/14_os2_track_map.png)

## Live dashboard

A zero-dependency web console shows every process's PID, CPU, memory and context switches, read live from `/proc`.

**Online → WAN cut → restored.** During the cut, events and local decisions keep increasing, the outbox grows, and *Conserved* stays `yes`. After restore, the backlog drains to 0.

<div class="gallery stack">
  <img src="/projects/songdo-edge-intelligence/11_dashboard_online.png" alt="Dashboard online" />
  <img src="/projects/songdo-edge-intelligence/12_dashboard_wan_cut.png" alt="Dashboard during WAN cut" />
  <img src="/projects/songdo-edge-intelligence/13_dashboard_restored.png" alt="Dashboard after restore" />
</div>

## Deployment

**systemd:** the node runs as a user service with memory, CPU and task limits. Killed on purpose with SIGKILL, it restarted by itself after 2 seconds.

![systemd auto restart](/projects/songdo-edge-intelligence/16_systemd_auto_restart.png)

**Docker:** a non-root Ubuntu 24.04 image with its own health check reports **Up (healthy)**.

![Docker build and healthy container](/projects/songdo-edge-intelligence/18_docker_build_healthy.png)
