--js type("incremental");
--js where(`snapshot_date > (select max(snapshot_date) from ${self()})`);
--js descriptor(["snapshot_date", "customer_id", "name", "account_settings"]);
select current_date() as snapshot_date,
       customer_id,
       name,
       account_settings
from ${ref("customers")};