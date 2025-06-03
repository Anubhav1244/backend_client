const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const {thankYouEmail }= require("../../Templates/thankyouTemplate_newparticipants");
const {newParticipantstoclient}= require("../../Templates/NewParticipantsToClientTemplate");
const transporter = require("../Transporter");
dotenv.config();

const sendtoClientEmail_newParticipants = async ({ name, email,userDetails  }) => {
  await transporter.sendMail({
    from: process.env.MAIL_USER, // Use the name and email of the sender
    to: process.env.MAIL_USER, // Client's email address
    subject: "New Participants Submission",
    html: newParticipantstoclient(
        name,
        userDetails
    )
  });
};

// Send email to the customer (thank you message)
const sendtoCustomerEmail_newParticipants = async ({ name, email  }) => {
    console.log("Sending thank you email to customer:", email);
    console.log("Customer name:", name);
  await transporter.sendMail({
    from: process.env.MAIL_USER, // Your email address
    to: email, // Customer's email address
    subject: "Thank You for Registering With Us!",
    html: thankYouEmail(
       name,
       "https://res.cloudinary.com/dpo4msttv/image/upload/v1748150519/abzrxpjnyhf7xbwogv4l.png"
    ), 
      
  });

};

module.exports = { sendtoClientEmail_newParticipants, sendtoCustomerEmail_newParticipants  };