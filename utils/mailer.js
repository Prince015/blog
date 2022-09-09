var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: 2525,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
  });

module.exports = transporter;