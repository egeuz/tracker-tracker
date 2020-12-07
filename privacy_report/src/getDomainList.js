const psl = require('psl')

function getDomainList(host, fpd, tpd, cookies, trackers) {
  return [
    ...new Set([
      psl.parse(host).domain,
      ...fpd.map(domain => psl.parse(domain).domain),
      ...tpd.map(domain => psl.parse(domain).domain),
      ...cookies.map(cookie => psl.parse(cookie.domain).domain),
      ...trackers.map(tracker => psl.parse(tracker.domain).domain)
    ])
  ]
}

module.exports = getDomainList