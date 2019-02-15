-- learn more on https://docs.dataform.co/guides/tables/

--js type("table");


/*js
const foo = 1;
*/

SELECT ${foo} as country,
       ${mapping.country_group("country")} as country_group,
       device_type as device_type,
       sum(revenue) as revenue,
       sum(pageviews) as pageviews,
       sum(sessions) as sessions

FROM ${ref("dataset_1")}

GROUP BY 1, 2, 3 