--js type("incremental");
--js where(`snapshot_date > (select max(snapshot_date) from ${self()})`);
--js descriptor(["snapshot_date", "country"]);


SELECT current_date() as snapshot_date,
       country
       
FROM ${ref("dataset_2_with_ref")}

GROUP BY 1