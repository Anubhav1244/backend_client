const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();
console.log("MAIL_USER:", process.env.MAIL_USER);
console.log("MAIL_PASSWORD:", process.env.MAIL_PASSWORD);
// Set up the transporter for sending email
const transporter = nodemailer.createTransport({
  host: 'smtp.titan.email',
  port: 587,
  secure: false, // use TLS
  auth: {
    user: process.env.MAIL_USER,   
    pass: process.env.MAIL_PASSWORD          
  }
});

module.exports = transporter;