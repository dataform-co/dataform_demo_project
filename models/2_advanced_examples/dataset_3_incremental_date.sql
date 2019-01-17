--js type("incremental");
--js where(`timestamp > (select max(date) from ${self()})`);
--js descriptor(["timestamp", "action"]);

select timestamp, action
from weblogs.user_actions