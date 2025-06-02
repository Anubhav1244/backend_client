
const dotenv = require("dotenv");
const {thankYouEmail }= require("../../Templates/thankyou_contactus");
const transporter = require("../Transporter")
const {contactusToClient} = require("../../Templates/contactusToclient");
dotenv.config();
// Set up the transporter for sending email


// Send email to the client
const sendClientEmail = async ({ name, email, message }) => {
  await transporter.sendMail({
    from: `${name}`,
    to: "anubhavkumar768@gmail.com", // Client's email address
    subject: "New Contact Us Submission",
    html: contactusToClient(
      name,
      email,
      message
    ),
  });
};

// Send email to the customer (thank you message)
const sendCustomerEmail = async ({ name, email  }) => {
    console.log("Sending thank you email to customer:", email);
    console.log("Customer name:", name);
  await transporter.sendMail({
    from: "anubhavkumar768@gmail.com", // Your email address
    to: email, // Customer's email address
    subject: "Thank You for Contacting Us!",
    html: thankYouEmail(
       name,
       "https://res.cloudinary.com/dpo4msttv/image/upload/v1748150519/abzrxpjnyhf7xbwogv4l.png"
    ), 
      
  });

};

module.exports = { sendClientEmail, sendCustomerEmail  };