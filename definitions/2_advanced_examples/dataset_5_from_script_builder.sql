-- learn more on https://docs.dataform.co/guides/includes/

${script_builder.render_script(ref("dataset_1"),
                               ["country", "device_type"],
                               ["revenue", "pageviews", "sessions"]
                               )}