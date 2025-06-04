const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const {thankYouEmail }= require("../../Templates/thankyou_makeanenquiry");
const {makeanEnquiryToClient} = require("../../Templates/makeAnenquiryToclient");
const transporter = require("../Transporter");
dotenv.config();

// Set up the transporter for sending email

const sendtoClientEmail_Makeanenquiry = async ({ name, email, message,locationofservice }) => {
    await transporter.sendMail({
      from:process.env.MAIL_USER, // Use the name and email of the sender
      to: process.env.MAIL_USER, // client's email address
      subject: "New Make an Enquiry Submission",
      html: makeanEnquiryToClient(
        name,
        email,
        message,
        locationofservice,
      ),
    });
  }
  const sendtoCustomerEmail_Makeanenquiry = async ({ name, email  }) => {
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

  module.exports = { sendtoClientEmail_Makeanenquiry, sendtoCustomerEmail_Makeanenquiry  };