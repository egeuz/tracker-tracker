const axios = require('axios')

async function generateGeolocationReport(domain) {
  try {
    const { data } = await axios.get(`https://freegeoip.app/json/${domain}`)
    return {
      ip_address: data.ip,
      country_code: data.country_code,
      country: data.country_name,
      region: data.region,
      city: data.city,
      latitude: data.latitude,
      longitude: data.longitude,
    }
  } catch (err) {
    return {
      ip_address: "not found",
      country_code: "not found",
      country: "not found",
      region: "not found",
      city: "not found",
      latitude: "not found",
      longitude: "not found",
    }
  }
}

module.exports = generateGeolocationReport