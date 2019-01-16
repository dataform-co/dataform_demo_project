function random_number(min,max){
  return Math.floor(Math.random() * (max - min)) + min;
}


function render_script(){
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
  
    return `
      SELECT
      country as country,
      device_type as device_type,
      ${metrics.map(field => `${field} as ${field}`).join(",")}
      
      FROM 
      ${countries.forEach(country => 
                          device_types.map(device => 
                                           `(SELECT ${country} as country,
                                                    ${device} as device, 
                                                    ${metrics.map(field => `${random_number(100,1000)} as ${field}`).join(",")})`))}

}

module.exports = { render_script };
