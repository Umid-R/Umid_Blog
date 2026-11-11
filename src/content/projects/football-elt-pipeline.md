---
title: 'Football Data ELT Pipeline'
summary: 'An Airflow-orchestrated ELT pipeline that loads match data for Europe’s top five football leagues and turns it into team performance stats and standings.'
repo: 'https://github.com/Umid-R/Airflow-Sports-Data-Pipeline'
role: 'Solo'
stack: ['Python', 'SQL', 'PostgreSQL', 'Airflow', 'Docker']
---

![Pipeline layers](https://github.com/user-attachments/assets/fec0e779-8a5f-47fa-98a3-b24ccc48155d)

## The problem

Raw football data from an API is just a long list of fixtures: who played whom, when, and the score. To answer real questions (How is a team doing this season? Who's leading the league? Who scores the most?) the data has to be cleaned, combined and aggregated.

This pipeline does that automatically every day for the **top five European leagues**: Premier League, La Liga, Serie A, Bundesliga and Ligue 1.

## How it works

- **Source:** match data from API-Football
- **Architecture:** ELT (Extract → Load → Transform). Raw data is loaded first and transformed inside the database.
- **Orchestration:** Apache Airflow, with daily incremental updates
- **Database:** PostgreSQL with Bronze → Silver → Gold layers

```
load_bronze (daily) → load_silver (daily) → load_gold (on demand)
```

## Data layers

1. **Bronze:** raw API data for competitions, teams and matches
2. **Silver:** cleaned and standardized data that combines match results with team information
3. **Gold:** analytics-ready views, such as `team_performance`, with team stats per competition and season

## Key features

- **Incremental loading:** each day only new matches are added, without reprocessing all the data
- **Team performance analytics:** wins, draws, losses, goals scored and conceded, goal difference, points, points per match and win rate, ranked like a league table
- **Multi-season support:** statistics for several seasons are aggregated automatically
- **Reliable API calls:** requests retry automatically with backoff when the API rate-limits (HTTP 429) or fails
- **Modular SQL:** each transformation lives in its own SQL file, so it's easy to update

## How the gold layer works

Each match is turned into two rows, one from the home team's view and one from the away team's view. That way every team's wins, draws, losses and goals can be counted the same way, whether they played at home or away, and then grouped by competition and season.
