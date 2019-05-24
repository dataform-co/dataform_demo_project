-- learn more on https://docs.dataform.co/guides/tables/

--js type("table"); 


SELECT  date as date,
        country as country,
        device_type as device_type,
        revenue as revenue,
        pageviews as pageviews,
        sessions as sessions 
FROM 
  (SELECT current_date as date, 'GB' as country, 'desktop' as device_type, 578 as revenue, 415 as pageviews, 967 as sessions) UNION ALL
  (SELECT current_date as date, 'GB' as country, 'mobile' as device_type, 429 as revenue, 669 as pageviews, 888 as sessions) UNION ALL
  (SELECT current_date as date, 'GB' as country, 'tablet' as device_type, 181 as revenue, 765 as pageviews, 502 as sessions) UNION ALL
  (SELECT current_date as date, 'US' as country, 'desktop' as device_type, 354 as revenue, 135 as pageviews, 790 as sessions) UNION ALL
  (SELECT current_date as date, 'US' as country, 'mobile' as device_type, 492 as revenue, 580 as pageviews, 514 as sessions) UNION ALL
  (SELECT current_date as date, 'US' as country, 'tablet' as device_type, 510 as revenue, 325 as pageviews, 890 as sessions) UNION ALL
  (SELECT current_date as date, 'FR' as country, 'desktop' as device_type, 901 as revenue, 985 as pageviews, 576 as sessions) UNION ALL
  (SELECT current_date as date, 'FR' as country, 'mobile' as device_type, 499 as revenue, 288 as pageviews, 238 as sessions) UNION ALL
  (SELECT current_date as date, 'FR' as country, 'tablet' as device_type, 977 as revenue, 243 as pageviews, 600 as sessions) UNION ALL
  (SELECT current_date as date, 'TH' as country, 'desktop' as device_type, 526 as revenue, 862 as pageviews, 575 as sessions) UNION ALL
  (SELECT current_date as date, 'TH' as country, 'mobile' as device_type, 533 as revenue, 695 as pageviews, 404 as sessions) UNION ALL
  (SELECT current_date as date, 'TH' as country, 'tablet' as device_type, 129 as revenue, 925 as pageviews, 459 as sessions) UNION ALL
  (SELECT current_date as date, 'NG' as country, 'desktop' as device_type, 784 as revenue, 391 as pageviews, 197 as sessions) UNION ALL
  (SELECT current_date as date, 'NG' as country, 'mobile' as device_type, 511 as revenue, 551 as pageviews, 405 as sessions) UNION ALL
  (SELECT current_date as date, 'NG' as country, 'tablet' as device_type, 244 as revenue, 964 as pageviews, 132 as sessions) UNION ALL
  (SELECT current_date as date, 'NG' as country, 'tablet' as device_type, 244 as revenue, 964 as pageviews, 132 as sessions)


