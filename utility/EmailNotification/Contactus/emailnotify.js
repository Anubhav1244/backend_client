const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const {thankYouEmail }= require("../../Templates/thankyou_contactus");

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
const sendClientEmail = async ({ name, email, message }) => {
  await transporter.sendMail({
    from: `${name}`,
    to: "anubhavkumar768@gmail.com", // Client's email address
    subject: "New Contact Us Submission",
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
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