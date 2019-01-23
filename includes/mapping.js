// learn more on https://docs.dataform.co/guides/includes/

function country_group(country){
  return `CASE
          WHEN ${country} IN ("US", "CA") THEN "NA"
          WHEN ${country} IN ("GB", "FR", "DE", "IT", "PL") THEN "EU"
          WHEN ${country} IN ("AU") THEN ${country}
          ELSE "Other countries"
          END`;
}

module.exports = { country_group };