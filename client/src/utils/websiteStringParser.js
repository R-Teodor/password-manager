export const websiteParse = (websiteURL) => {
  let url = websiteURL
  if (url?.startsWith('http://')) url = url.slice(7)
  if (url?.startsWith('https://')) url = url.slice(8)
  if (url?.includes('/')) {
    const endOfUrl = url.indexOf('/')
    url = url.slice(0, endOfUrl)
  }
  return url
}

export const websiteStringLogo = (websiteURL) => {
  let url = websiteParse(websiteURL) || 'L'

  if (url.startsWith('www.')) url = url.slice(4)

  return url[0].toUpperCase()
}
