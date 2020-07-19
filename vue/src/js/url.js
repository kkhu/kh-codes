
export const objectToUrlParams = (url, params) => {
  if (!params) return url
  let rs = []
  for (let p in params) {
    rs.push(p + '=' + params[p])
  }
  if (rs.length < 1) return url
  return (url += url.indexOf('?') !== -1 ? rs.join('&') : '?' + rs.join('&'))
}
