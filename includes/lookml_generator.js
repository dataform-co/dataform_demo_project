function render_dimensions(dimensions) {
  return dimensions.map(dimension => `dimension: ${dimension} {
    type: string
    sql: \${TABLE}.${dimension} ;;
  }
  `).join("\n");
}

function render_measures(measures, transforms) {
  var string = measures.map(measure => `measure: ${measure.id} {
    type: sum
    label: "${measure.name}"
    group_label: "${measure.name}"
    sql: \${TABLE}.${measure.id} ;;
    value_format_name: ${measure.format || "decimal_0"}
  }
  `).join("\n");

  // transforms
  string = string + measures.map(measure =>
    transforms.map(transform => `measure: ${measure.id}${transform.id} {
    type: sum
    label: "${measure.name} ${transform.name}"
    group_label: "${measure.name}"
    sql: \${TABLE}.${measure.id}${transform.id} ;;
    value_format_name: ${measure.format || "decimal_0"}
  }`).join("\n")
  ).join("\n");

  return string;
}


function render_derived_metrics(derived_measures, transforms) {
  var string = derived_measures.map(measure => `measure: ${measure.id} {
    label: "${measure.name}"
    group_label: "${measure.name}"
    type: number
    sql: SAFE_DIVIDE(sum(ifnull(\${TABLE}.${measure.measure_1},0)), sum(ifnull(\${TABLE}.${measure.measure_2},0))) ;;
    value_format_name: ${measure.format || "decimal_0"}
  }
  `).join("\n");

  // transforms
  string = string + derived_measures.map(measure =>
    transforms.map(transform => `measure: ${measure.id}${transform.id} {
    type: number
    label: "${measure.name} ${transform.name}"
    group_label: "${measure.name}"
    sql: SAFE_DIVIDE(sum(ifnull(\${TABLE}.${measure.measure_1}${transform.id},0)), sum(ifnull(\${TABLE}.${measure.measure_2}${transform.id},0))) ;;
    value_format_name: ${measure.format || "decimal_0"}
  }`).join("\n")).join("\n");

  return string;

}

function render_variances(measures, derived_measures, variances) {
  var string = measures.map(measure => variances.map(variance => `measure: ${measure.id}${variance.id} {
    label: "${measure.name} ${variance.name}"
    type: number
    group_label: "${measure.name}"
    sql: SAFE_DIVIDE(sum(ifnull(\${TABLE}.${measure.id}${variance.numerator},0)), sum(ifnull(\${TABLE}.${measure.id}${variance.denominator},0)))-1 ;;
    value_format_name: ${variance.format || measure.format || "decimal_0"}
  }
  `).join("\n")).join("\n");

  string = string + derived_measures.map(measure => variances.map(variance => `measure: ${measure.id}${variance.id} {
    label: "${measure.name} ${variance.name}"
    type: number
    group_label: "${measure.name}"
    sql: ifnull(\${${measure.id}${variance.numerator}},0)-ifnull(\${${measure.id}${variance.denominator}},0) ;;
    value_format_name: ${variance.format || measure.format || "decimal_0"}
  }
  `).join("\n")).join("\n");

  return string;
}


function create_view_code(table_name, dimensions, measures, derived_measures) {

  const transforms = [{ id: "_ly", name: "last year" },
  { id: "_lw", name: "last week" },
  { id: "_ytd", name: "YTD" },
  { id: "_mtd", name: "MTD" },
  { id: "_ytd_ly", name: "YTD last year" },
  { id: "_mtd_ly", name: "MTD last year" },
  { id: "_forecast", name: "forecast" },
  { id: "_forecast_ytd", name: "YTD forecast" },
  { id: "_forecast_mtd", name: "MTD forecast" },
  { id: "_w1", name: "Week + 1" },
  { id: "_w2", name: "Week + 2" },
  { id: "_w3", name: "Week + 3" },
  { id: "_w4", name: "Week + 4" },
  ]


  const variances = [{ id: "_vs_forecast", name: "forecast variance", numerator: "", denominator: "_forecast", format: "percent_2"},
  { id: "_yoy", name: "Y/Y variance", numerator: "", denominator: "_ly", format: "percent_2" },
  { id: "_mtd_vs_forecast", name: "MTD forecast variance", numerator: "_mtd", denominator: "_forecast_mtd", format: "percent_2" },
  { id: "_ytd_vs_forecast", name: "YTD forecast variance", numerator: "_ytd", denominator: "_forecast_ytd", format: "percent_2" },
  { id: "_mtd_yoy", name: "MTD Y/Y variance", numerator: "_mtd", denominator: "_mtd_ly", format: "percent_2" },
  { id: "_ytd_yoy", name: "YTD Y/Y variance", numerator: "_ytd", denominator: "_ytd_ly", format: "percent_2" }];


  var string = `view: ${table_name.split(".")[1]} {
      sql_table_name: ${table_name} ;;\n`;

  // add dimensions
  string = string + render_dimensions(dimensions);

  // add measures
  string = string + render_measures(measures, transforms);

  // add derived measures
  string = string + render_derived_metrics(derived_measures, transforms);

  // add variances
  // forecast variance - Y/Y variance - MTD forecast variance - YTD forecast variance - YTD Y/Y variance
  string = string + render_variances(measures, derived_measures, variances);
 
  return string + "\n}";

}
module.exports = {create_view_code};
