const getDomainList = require('./getDomainList')
const cleanCookieData = require('./cleanCookieData')
const cleanTrackerData = require('./cleanTrackerData')
const generateDomainReport = require('./generateDomainReport')

async function generateVisitReport(analysis) {
  //STEP 0 – Harvest raw data from analysis
  const sourceURL = analysis.uri_dest
  const hostDomain = new URL(sourceURL).hostname
  const firstPartyDomains = analysis.hosts.requests.first_party
  const thirdPartyDomains = analysis.hosts.requests.third_party
  const cookies = cleanCookieData(analysis.reports.cookies)
  const trackers = cleanTrackerData(analysis.reports.third_party_trackers)
  //STEP 1 – Collect a list of unique entities
  const domainList = getDomainList(
    hostDomain,
    firstPartyDomains,
    thirdPartyDomains,
    cookies,
    trackers
  )
  //STEP 2 – CREATE REPORTS FOR EACH DOMAIN
  const domainReports = await Promise.all(domainList.map(async domain => {
    return await generateDomainReport(domain, cookies, trackers)
  }))

  //STEP 3 – GENERATE FINAL REPORT
  const visitReport = {
    url_visited: sourceURL,
    host_data: domainReports.shift(), //will this be enough?
    third_party_data: domainReports
  }

  return visitReport
}

module.exports = generateVisitReport