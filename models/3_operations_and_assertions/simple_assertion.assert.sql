-- Revenue by country between dataset_1 and dataset_2_with_ref should be the same

SELECT country,
       d1.revenue as d1_revenue,
       d2.revenue as d2_revenue

FROM (SELECT country, sum(revenue) as revenue FROM ${ref("dataset_1")}) d1
LEFT JOIN (SELECT country, sum(revenue) as revenue FROM ${ref("dataset_2")}) d2

WHERE d1_revenue <> d2_revenue