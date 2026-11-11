---
title: 'Qaza Tracker'
summary: 'A Telegram bot and Mini App that helps Muslims count, remember and make up their missed prayers.'
repo: 'https://github.com/Umid-R/qaza-tracker'
demo: 'https://t.me/qazo_trackerbot'
demoLabel: 'Try @qazo_trackerbot'
role: 'Solo: idea, design, frontend, backend, bot, database, deployment, translations'
duration: 'About 1 month, from scratch'
stack: ['Python', 'FastAPI', 'aiogram', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vercel', 'Railway']
---

<figure>
  <img src="/projects/qaza-tracker/demo.gif" width="420" alt="Walkthrough: /start, name, city, prayer times, then the Mini App opens" />
  <figcaption>Walkthrough: /start, the bot asks for a name and a city, sends that city's prayer times, and the Mini App opens with the count of missed prayers.</figcaption>
</figure>

## The problem

Muslims pray five times a day, and each prayer has a time window that ends. A prayer that is missed has to be **made up later**, and this make-up prayer is called **qaza**.

The hard part is the counting. Someone who missed prayers for months or years can owe **hundreds** of them, and the number changes every day: a new miss adds one, a make-up prayer removes one. Paper notes and memory don't work for that, and most people also forget the prayer window itself while they're busy.

## What it does

**The bot (reminders and recording)**

- Sends a message at each prayer time, using prayer times for the user's own city (Aladhan API, Hanafi school).
- Sends a warning **10 minutes before a prayer's time runs out**, with an **"I prayed"** button.
- If nobody answers within 2 hours, it **records the prayer as missed automatically**, so nothing is lost silently.
- Handles each user's time zone (found from their location) and speaks several languages.

**The Mini App (the numbers)**

- **Home:** how many qaza prayers you still owe, and how many of today's five you've prayed.
- **Log:** mark today's prayers as prayed or missed (with a reason), add old missed prayers, and clear qaza prayers you've made up.
- **Calendar:** a monthly summary, your most missed prayer, the most common reason, and a day-by-day history.

<div class="gallery">
  <img src="/projects/qaza-tracker/home.png" alt="Home: total qaza prayers remaining and today's prayers" />
  <img src="/projects/qaza-tracker/calendar.png" alt="Calendar: monthly summary and daily prayer history" />
  <img src="/projects/qaza-tracker/bot-chat.png" alt="Bot setup chat: name, city, prayer times" />
</div>

## Architecture

Two separate parts share one database. The **Mini App** (React, on Vercel) is where a user sees the numbers and talks to a **FastAPI** backend. The **bot** (aiogram, always on, on Railway) sends reminders and records prayers. Both read and write the same **Supabase PostgreSQL** database.

![Architecture](/projects/qaza-tracker/architecture.png)

### What happens for one prayer

![Reminder flow](/projects/qaza-tracker/reminder-flow.png)

### Database

Supabase (PostgreSQL), 7 tables. Everything about a person hangs off `users`, whose `id` is the Telegram user id.

![Database schema](/projects/qaza-tracker/database.png)

## Problems I hit and how I solved them

**1. A reminder was silently lost.** The bot remembered only one pending reminder per user, so a second reminder overwrote the first and that prayer was never marked as missed. I changed it to track pending reminders **per message**.

**2. Random `ConnectionTerminated` errors from the database.** With many scheduler tasks running at once, the Supabase client's HTTP/2 connections kept getting terminated. Forcing HTTP/1.1 fixed it.

**3. The bot crashed on startup with `Illegal header value`.** A hidden trailing newline in an environment variable broke the request header. I now strip whitespace from every environment variable.

**4. Deployments failed on dependency versions.** `pydantic-core` had no build for Python 3.13. I pinned Python 3.12 and the pydantic version.

**5. The API trusted whatever user id it was given.** A stranger who guessed a Telegram id could read someone else's data. I added Telegram's signed `initData` check: the backend recomputes the signature with the bot token, rejects stale data, and only allows users to touch their own data. It has 14 tests, and I rolled it out in log-only mode first before enforcing it.

**6. Simplifying the product as I used it.** I merged the Profile page into Home, removed stats that weren't useful, and simplified the "missed reason" options.

## Results

- Live on Telegram with **real users**.
- Three services (Mini App, API, bot) deployed from **one monorepo**.

## Next steps

- Share the database code between the API and the bot instead of keeping two copies.
- Add automated tests for the reminder logic.
- Support more prayer-time calculation methods.
