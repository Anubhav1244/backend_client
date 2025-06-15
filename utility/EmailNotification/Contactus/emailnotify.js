
const dotenv = require("dotenv");
const {thankYouEmail }= require("../../Templates/thankyou_contactus");
const transporter = require("../Transporter")
const {contactusToclient} = require("../../Templates/contactusToclient");
dotenv.config();
// Set up the transporter for sending email


// Send email to the client
const sendClientEmail = async ({ name, email, locationofservice, role, message }) => {
  await transporter.sendMail({
    from: process.env.MAIL_USER, // Use the name and email of the sender
    to: process.env.MAIL_USER, // Client's email address
    subject: "New Contact Us Submission",
    html: contactusToclient(
      name,
      email,
      locationofservice,
      role,
      message
    ),
  });
};

// Send email to the customer (thank you message)
const sendCustomerEmail = async ({ name, email  }) => {
    console.log("Sending thank you email to customer:", email);
    console.log("Customer name:", name);
  await transporter.sendMail({
    from: process.env.MAIL_USER, // Your email address
    to: email, // Customer's email address
    subject: "Thank You for Contacting Us!",
    html: thankYouEmail(
       name,
       "https://res.cloudinary.com/dpo4msttv/image/upload/v1748150519/abzrxpjnyhf7xbwogv4l.png"
    ), 
      
  });

};

module.exports = { sendClientEmail, sendCustomerEmail  };