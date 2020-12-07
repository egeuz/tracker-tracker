const axios = require('axios')

async function generateTrackerRadarReport(domain) {
  try {
    const { data } = await axios.get(`https://raw.githubusercontent.com/duckduckgo/tracker-radar/main/domains/US/${domain}.json`)
    return {
      owner_data: data.owner,
      prevalence: data.prevalence,
      fingerprinting: data.fingerprinting,
      cookies: data.cookies,
      categories: data.categories
    }
  } catch (err) {
    return {
      owner_data: "not found",
      prevalence: "not found",
      fingerprinting: "not found",
      cookies: "not found",
      categories: "not found",
    }
  }
}

module.exports = generateTrackerRadarReport

//prevalence: The percentage of the top sites that request this third-party domain.
//fingerprinting: The likelihood this third-party domain is using browser APIs to uniquely identify users. (0-3, 2 is sus, 3 is definitely tracking you)
//cookies: The percentage of the top sites that have cookies set by this third-party domain.
