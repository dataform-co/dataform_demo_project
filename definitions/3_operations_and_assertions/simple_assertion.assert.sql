-- learn more on https://docs.dataform.co/guides/assertions/


-- Revenue by country between dataset_1 and dataset_2_with_ref should be the same
SELECT country

FROM ${ref("dataset_1")}

WHERE country is null
