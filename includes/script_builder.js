function render_script(table, dimensions, metrics) {
    return `
      SELECT
      ${dimensions.map(field => `${field} as ${field}`).join(",")},
      ${metrics.map(field => `sum(${field}) as ${field}`).join(",\n")}
      FROM ${table}
      GROUP BY ${dimensions.map((field, i) => `${i+1}`).join(", ")}
    `
}

module.exports = { render_script };
