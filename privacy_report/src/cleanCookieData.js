function cleanCookieData(cookies) {
  return cookies.map(cookie => {
    return {
      name: cookie.name,
      type: cookie.type,
      value: cookie.value,
      domain: cookie.domain,
      secure: cookie.secure,
      session: cookie.session,
      httpOnly: cookie.httpOnly,
      thirdParty: cookie.third_party,
      expiryDate: cookie.expires
    }
  })
}

module.exports = cleanCookieData