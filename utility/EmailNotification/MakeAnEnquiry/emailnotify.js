const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const {thankYouEmail }= require("../../Templates/thankyou_makeanenquiry");
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

const sendtoClientEmail_Makeanenquiry = async ({ firstName, email, message }) => {
    await transporter.sendMail({
      from:`${firstName}. <${email}>`, // Use the name and email of the sender
      to: 'anubhavkumar768@gmail.com', // client's email address
      subject: "New Make an Enquiry Submission",
      html: `
        <h3>name: ${firstName}!</h3>
        <p>email:${email}</p>
        <p><strong>message:</strong><br/>${message}</p>
      `,
    });
  }
  const sendtoCustomerEmail_Makeanenquiry = async ({ name, email  }) => {
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

  module.exports = { sendtoClientEmail_Makeanenquiry, sendtoCustomerEmail_Makeanenquiry  };