---
title: 'Data Analytics Project'
summary: 'A set of SQL scripts for exploring, analyzing and reporting on a sales database, from basic exploration to customer and product reports.'
repo: 'https://github.com/Umid-R/data-analytics-project'
role: 'Solo'
stack: ['SQL', 'PostgreSQL']
---

![Analytics overview](https://github.com/user-attachments/assets/980ef939-fd9f-43ac-bb3e-d26dbf4e3630)

## The problem

Having clean data in a warehouse is only half the job. Someone still has to answer the business questions: who are the best customers, which products are growing, how sales change over time. This project answers those questions with SQL, step by step.

It runs on the business-ready layer of my [Sales Data Warehouse](/projects/sales-data-warehouse).

## What's inside

Each script focuses on one type of analysis:

| # | Script | What it answers |
|---|---|---|
| 00 | Database exploration | What tables and columns exist? |
| 01 | Dimensions exploration | Which countries, categories and products are there? |
| 02 | Date range exploration | What period does the data cover? |
| 03 | Measures exploration | Total sales, orders, customers and products |
| 04 | Magnitude analysis | Sales and customers by country, category and gender |
| 05 | Ranking analysis | Top and bottom products and customers |
| 06 | Change over time | How sales change by month and year |
| 07 | Cumulative analysis | Running totals and running averages |
| 08 | Performance analysis | Each product compared with its average and the previous year |
| 09 | Part-to-whole | Which categories make up most of the revenue |
| 10 | Data segmentation | Customers grouped by spending and history (VIP, regular, new) |
| 11 | Customer report | One view with key metrics for every customer |
| 12 | Product report | One view with key metrics for every product |

## Skills used

- Aggregations, `GROUP BY` and joins
- Window functions (`RANK`, `LAG`, running totals, running averages)
- `CASE`-based segmentation
- Building reusable report views
