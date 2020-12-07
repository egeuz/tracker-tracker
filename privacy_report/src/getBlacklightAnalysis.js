const { collector } = require('@themarkup/blacklight-collector')

async function getBlacklightAnalysis(url) {
  const result = await collector({
    inUrl: url,
    numPages: 1,
    headless: true,
    emulateDevice: false
  })

  return result;
}

module.exports = getBlacklightAnalysis;