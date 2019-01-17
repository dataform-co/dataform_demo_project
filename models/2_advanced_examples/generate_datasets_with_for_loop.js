 const countries = [
    "GB",
    "US",
    "FR",
    "TH",
    "NG"
  ];

countries.forEach(country => {
  publish("reporting_" + country)
    .query(ctx => `
      select * from ${ctx.ref("dataset_2_with_ref")}
      where country = '${country}'
      `);
});