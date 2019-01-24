-- learn more on https://docs.dataform.co/guides/assertions/


-- Revenue by country between dataset_1 and dataset_2_with_ref should be the same
SELECT * FROM
(
SELECT country,
       d1.revenue as d1_revenue,
       d2.revenue as d2_revenue

FROM (SELECT country, sum(revenue) as revenue FROM ${ref("dataset_1")} GROUP BY 1) d1
LEFT JOIN (SELECT country, sum(revenue) as revenue FROM ${ref("dataset_2_with_ref")} GROUP BY 1) d2 USING (country)

WHERE country <> 'GB'
)

WHERE d1_revenue <> d2_revenue
