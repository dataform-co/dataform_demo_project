// learn more on https://docs.dataform.co/guides/js-api/

const countries = [
    'GB',
    'US',
    'FR',
    'TH',
    'NG'
  ];
  

countries.forEach(country => {
  publish("reporting_" + country)
    .dependencies(["dataset_2_with_ref"])
    .query(ctx => `
      select '${country}' as country
      `);
});