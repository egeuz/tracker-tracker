const generateGeolocationReport = require('./generateGeolocationReport')
const generateWhoisReport = require('./generateWhoisReport')
const generateTrackerRadarReport = require('./generateTrackerRadarReport')

async function generateDomainReport(domain, cookies, trackers) {
  try {
    const ipdata = await generateGeolocationReport(domain)
    const whoisdata = await generateWhoisReport(domain)
    const radardata = await generateTrackerRadarReport(domain)
    const associated_cookies = cookies.filter(cookie => cookie.domain.includes(domain))
    const associated_trackers = trackers.filter(tracker => tracker.domain.includes(domain))
    return {
      domain: domain,
      ip_data: ipdata,
      whois_data: whoisdata,
      radar_data: radardata,
      associated_cookies: associated_cookies,
      associated_trackers: associated_trackers
    }
  } catch (err) {
    console.log(err)
  }
}

module.exports = generateDomainReport