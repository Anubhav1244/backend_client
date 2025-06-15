const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const {thankYouEmail }= require("../../Templates/thankyou_makeanenquiry");
const { getHelpToClient } = require("../../Templates/getHelpToclient");
const transporter = require("../Transporter");
dotenv.config();

// Set up the transporter for sending email

const sendtoClientEmail_GetHelp = async ({ name, email, phone, message,  }) => {
    await transporter.sendMail({
      from:process.env.MAIL_USER, // Use the name and email of the sender
      to: process.env.MAIL_USER, // client's email address
      subject: "New Make an Enquiry Submission",
      html: getHelpToClient(
        name,
        email,
        phone,
        message,

      ),
    });
  }
  const sendtoCustomerEmail_GetHelp = async ({ name, email  }) => {
      console.log("Sending thank you email to customer:", email);
      console.log("Customer name:", name);
    const mailResponse=await transporter.sendMail({
      from: process.env.MAIL_USER, // Your email address
      to: email, // Customer's email address
      subject: "Thank You for Contacting Us!",
      html: thankYouEmail(
         name,
         "https://res.cloudinary.com/dpo4msttv/image/upload/v1748150519/abzrxpjnyhf7xbwogv4l.png"
      ), 
        
    });
    console.log("Email sent successfully:", mailResponse.response);
  
  };

  module.exports = { sendtoClientEmail_GetHelp, sendtoCustomerEmail_GetHelp  };