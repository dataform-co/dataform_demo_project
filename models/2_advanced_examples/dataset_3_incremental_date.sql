--js type("incremental");
--js where(`timestamp > (select max(date) from ${self()})`);
--js descriptor(["date", "country", "revenue"]);

SELECT date,
       country,
       sum(revenue)
       
FROM ${ref("dataset_1")}

GROUP BY 1