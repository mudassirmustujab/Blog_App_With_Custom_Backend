const nodemailer = require("nodemailer");
require('dotenv').config()
// Create a transporter for SMTP

console.log(process.env.SMTP_HOST);
console.log(process.env.SMTP_PORT);
console.log(process.env.SMTP_USER);
console.log(process.env.SMTP_PASS);
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// (async function testEmailConfig() {
//   try {
  


//     await transporter.verify();
//     console.log("✅ SMTP configuration is correct. Ready to send emails.");
//   } catch (error) {
//     console.error("❌ Error with configuration:", error);
//   }
// })();
module.exports = transporter