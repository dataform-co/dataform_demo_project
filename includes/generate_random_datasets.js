function random_number(min,max){
  return Math.floor(Math.random() * (max - min)) + min;
}

function time_series(){
    const countries = [
      "GB",
      "US",
      "FR",
      "TH",
      "NG"
    ];
    const device_types = [
      "desktop",
      "mobile",
      "tablet"
    ];
    const metrics = [
      "revenue",
      "pageviews",
      "sessions"
    ];
  
    var query = `
      SELECT
      country as country,
      device_type as device_type,
      ${metrics.map(field => `${field} as ${field}`).join(",")}
      FROM `;
  
      query = query + countries.map(country => device_types.map(device => `(SELECT '${country}' as country, '${device}' as device_type, ${metrics.map(field => `${random_number(100,1000)} as ${field}`).join(", ")})`).join("\nUNION ALL\n")).join("\nUNION ALL\n");

    return query;

}

module.exports = { render_script };
