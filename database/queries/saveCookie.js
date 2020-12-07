/*** COOKIE SCHEMA ***/
const Cookie = require('../models/cookies')

function saveCookie({cookie, geo, whois}) {
  const new_cookie = new Cookie({
    times_found: cookie.times_found,
    latest_date_found: cookie.latest_date_found,
    first_date_found: cookie.first_date_found,
    source_url: cookie.source_url,
    name: cookie.name,
    value: cookie.value,
    priority: cookie.priority,
    type: cookie.type,
    secure: cookie.secure,
    session: cookie.session,
    http_only: cookie.http_only,
    expiry_date: cookie.expiry_date,
    third_party: cookie.third_party,
    domain: cookie.domain,
    ip_address: geo.ip_address,
    country_code: geo.country_code,
    country: geo.country,
    region: geo.region,
    city: geo.city,
    latitude: geo.latitude,
    longitude: geo.longitude,
    domain_registrar: whois.registrar,
    domain_created_date: whois.domain_created_date,
    domain_updated_date: whois.domain_updated_date,
    domain_expiry_date: whois.domain_expiry_date,
    registrant_country: whois.registrant_country,
    registrant_region: whois.registrant_region,
    registrant_city: whois.registrant_city,
    registrar_abuse_contact_email: whois.registrar_abuse_contact_email,
    registrar_abuse_contact_phone: whois.registrar_abuse_contact_phone
  })

  new_cookie.save()
}


module.exports = saveCookie