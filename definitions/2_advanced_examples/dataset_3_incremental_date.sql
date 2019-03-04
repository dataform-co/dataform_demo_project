-- learn more on https://docs.dataform.co/guides/incremental-tables/

--js type("incremental");
--js where(`date > (select max(date) from ${self()})`);

SELECT date as date,
       country as country,
       sum(revenue) as revenue
       
FROM ${ref("dataset_1")}

GROUP BY 1,2