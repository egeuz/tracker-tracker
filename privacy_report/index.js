const getBlacklightAnalysis = require('./src/getBlacklightAnalysis')
const generateVisitReport = require('./src/generateVisitReport')

async function privacyReport(domain) {
  const analysis = await getBlacklightAnalysis(domain)
  const report = await generateVisitReport(analysis)
  return report
}

module.exports = privacyReport