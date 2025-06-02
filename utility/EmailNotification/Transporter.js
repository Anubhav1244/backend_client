const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();
// Set up the transporter for sending email
const transporter = nodemailer.createTransport({
  service: "gmail", // Use Gmail, or you can use another SMTP service
  auth: {
    host: "smtp.gmail.com",
    user: process.env.MAIL_USER, // Your email address
    pass: process.env.MAIL_PASSWORD, // Your email password or app password
  },
});

module.exports = transporter;