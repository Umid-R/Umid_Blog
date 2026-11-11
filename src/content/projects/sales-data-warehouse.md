---
title: 'Sales Data Warehouse'
summary: 'An end-to-end PostgreSQL data warehouse using the Medallion Architecture (Bronze → Silver → Gold) on CRM and ERP data.'
repo: 'https://github.com/Umid-R/sql-data-warehouse-project'
role: 'Solo'
stack: ['SQL', 'PostgreSQL', 'Data Modeling']
---

## The problem

Company data usually lives in separate systems. Here, customer and sales data comes from a **CRM**, and product categories and customer details come from an **ERP**, all as raw CSV files with inconsistent formats, missing values and duplicates. You can't run reliable analysis on that directly.

This project turns those raw files into one clean, business-ready warehouse that analysts can query easily.

## Architecture

The warehouse follows the **Medallion Architecture**, with three layers:

1. **Bronze:** raw data loaded from the CSV files, with no changes
2. **Silver:** cleaned, validated and standardized data
3. **Gold:** a business-ready **star schema** for analytics

![Data architecture](/projects/sales-data-warehouse/data_architecture.jpg)

## Data flow

How each source table moves through the layers:

![Data flow](/projects/sales-data-warehouse/data_flow.jpg)

## Integrating CRM and ERP

How the tables from the two source systems connect:

![Data integration](/projects/sales-data-warehouse/data_integration.jpg)

## What happens in each layer

**Bronze:** loads raw customer, product and sales data from the CSVs. No transformations, just ingestion.

**Silver:**
- fixes inconsistent gender values
- standardizes date formats
- handles missing values
- normalizes customer, product and location data

**Gold (star schema):**
- **Dimension, Customers:** cleaned customer data enriched with ERP attributes (country, gender, birthdate), with a surrogate key
- **Dimension, Products:** CRM products combined with ERP category mappings (category, product line, maintenance type)
- **Fact, Sales:** order dates, product and customer keys, sales amount, quantity and price

![Star schema data model](/projects/sales-data-warehouse/data_model.jpg)

## Data quality checks

Tests make sure there are:
- no duplicate IDs
- no null keys
- only valid dates
- correct links between the fact table and the dimensions

## What you can analyze with it

- Top customers by revenue
- Performance by product category
- Revenue trends by month
- High-value product segments
- Order-to-shipping time

## Next steps

- Slowly Changing Dimensions (SCD Type 2)
- Automate the loads with Airflow
- Incremental loads instead of full reloads
- Dashboards on top of the Gold layer
