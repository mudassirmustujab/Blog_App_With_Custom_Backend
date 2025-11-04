const nodemailer = require("nodemailer");
require('dotenv').config()

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log('SMTP connection failed:', error);
  } else {
    console.log('SMTP connection successful:', success);
  }
});

module.exports = transporter