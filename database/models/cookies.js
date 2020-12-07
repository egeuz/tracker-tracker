const mongoose = require('mongoose')

const cookieSchema = new mongoose.Schema({
  times_found: Number,
  latest_date_found: String,
  first_date_found: String,
  source_url: String,
  name: String,
  value: String,
  secure: Boolean,
  session: Boolean,
  http_only: Boolean,
  third_party: Boolean,
  priority: String,
  type: String,
  expiry_date: String,
  domain: String,
  ip_address: String,
  country_code: String,
  country: String,
  region: String,
  city: String,
  latitude: String,
  longitude: String,
  domain_registrar: String,
  domain_created_date: String,
  domain_updated_date: String,
  domain_expiry_date: String,
  registrant_country: String,
  registrant_region: String,
  registrant_city: String,
  registrar_abuse_contact_email: String,
  registrar_abuse_contact_phone: String
})

module.exports = mongoose.model('Cookie', cookieSchema)