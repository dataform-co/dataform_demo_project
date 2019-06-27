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
    .query(ctx => `
      select '${country}' as country
      `);
});