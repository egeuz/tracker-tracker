/*** ENVIRONMENT VARIABLES ***/
require('dotenv').config()

/*** EXPRESS + MIDDLEWARE ***/
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
app.use(bodyParser.json())
app.use(cors())

/*** DATA ANALYSIS SCRIPTS ***/
const privacyReport = require('./privacy_report')

/*** SERVE REACT CLIENT ***/
app.use(express.static(path.join(__dirname, 'client/build')));

/*** CONNECT TO DATABASE ***/
// const mongoose = require('mongoose')
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

/*** ROUTES ***/
app.post('/api/analyze-url', async (req, res) => {
  const url = req.body.url
  const report = await privacyReport(url)
  res.json(report)
})

/*** START EXPRESS SERVER ***/
app.listen(process.env.PORT, () => console.log(`cooking things up at port ${process.env.PORT}`))