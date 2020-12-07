const whoiser = require("whoiser");

async function generateWhoisReport(domain) {
  try {
    const whois_response = await whoiser(domain)
    const data = mergeWhoisLookups(whois_response)
    return {
      registrar: data["Registrar"],
      registrant_country: data['Registrant Country'],
      registrant_region: data['Registrant State/Province'],
      registrant_city: data['Registrant City'],
      registrar_abuse_contact_email: data['Registrar Abuse Contact Email'],
      registrar_abuse_contact_phone: data['Registrar Abuse Contact Phone']
    }
  } catch (err) {
    return {
      registrar: "not found",
      registrant_country: "not found",
      registrant_region: "not found",
      registrant_city: "not found",
      registrar_abuse_contact_email: "not found",
      registrar_abuse_contact_phone: "not found"
    }
  }
}

function mergeWhoisLookups(lookups) {
  let result = {}
  lookups = Object.values(lookups)
  lookups.forEach(lookup => {
    result = { ...result, ...cleanObject(lookup) }
  })
  return result;
}

function cleanObject(obj) {
  let clean = { ...obj }
  for (let property in clean) {
    if (
      clean[property] === null ||
      clean[property] === undefined ||
      clean[property] === [] ||
      clean[property] === ""
    ) {
      delete clean[property]
    }
  }
  return clean
}

module.exports = generateWhoisReport