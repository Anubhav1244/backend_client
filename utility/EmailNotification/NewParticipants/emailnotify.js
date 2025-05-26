const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const {thankYouEmail }= require("../../Templates/thankyouTemplate_newparticipants");
const {newParticipantstoclient}= require("../../Templates/NewParticipantsToClientTemplate");
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

// Send email to the client
const sendtoClientEmail_newParticipants = async ({ name, email,userDetails  }) => {
  await transporter.sendMail({
    from: `${name}. <${email}>`, // Use the name and email of the sender
    to: "anubhavkumar768@gmail.com", // Client's email address
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
    from: "anubhavkumar768@gmail.com", // Your email address
    to: email, // Customer's email address
    subject: "Thank You for Registering With Us!",
    html: thankYouEmail(
       name,
       "https://res.cloudinary.com/dpo4msttv/image/upload/v1748150519/abzrxpjnyhf7xbwogv4l.png"
    ), 
      
  });

};

module.exports = { sendtoClientEmail_newParticipants, sendtoCustomerEmail_newParticipants  };