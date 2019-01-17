--js type("incremental");
--js where(`timestamp > (select max(timestamp) from ${self()})`);
--js descriptor(["timestamp", "action"]);

select timestamp, action
from weblogs.user_actions