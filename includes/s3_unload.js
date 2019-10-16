module.exports = ({
  source,
  path,
  auth,
  options
}) => {
  return `
        unload ('select * from ${source}')
        to '${path}'
        ${auth || "iam_role 'arn:aws:iam::161427895535:role/RedshiftWriteRole'"}
        ${(options || []).join("\n")}`
}
