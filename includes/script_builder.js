function render_script(table, dimensions, metrics) {
    return `
      SELECT
      ${dimensions.map(field => `${field} as ${field}`).join(",")},
      ${metrics.map(field => `sum(${field}) as ${field}`).join(",")}
      FROM ${table}
      GROUP BY 1, ${dimensions.map((field, i) => `${i+2}`).join(", ")}

}

module.exports = { render_script };
