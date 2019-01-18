-- learn more on https://docs.dataform.co/guides/operations/

grant select on ${ref("dataset_1")} to group "team@dataform.co"
---
grant select on ${ref("dataset_2_with_ref")} to group "team@dataform.co"
