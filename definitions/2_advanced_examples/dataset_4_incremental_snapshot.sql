-- learn more on https://docs.dataform.co/guides/incremental-tables/

--js type("incremental");
--js where(`snapshot_date > (select max(snapshot_date) from ${self()})`);
--js descriptor(["snapshot_date", "country"]);


SELECT current_date as snapshot_date,
       country
       
FROM ${ref()}

GROUP BY 1, 2