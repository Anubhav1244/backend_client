exports.thankYouEmail = (name, logoUrl) => {
  return `<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Thank You</title>
  <style>
    body {
      background-color: #E6F2FA;
      font-family: Arial, sans-serif;
      font-size: 16px;
      line-height: 1.5;
      color: #333333;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 30px;
      text-align: center;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
    }

    .logo {
      max-width: 150px;
      margin-bottom: 20px;
    }

    .heading {
      font-size: 22px;
      font-weight: bold;
      color: #007BBD;
      margin-bottom: 15px;
    }

    .message {
      font-size: 16px;
      margin-bottom: 20px;
    }

    .highlight {
      font-weight: bold;
      color: #005f99;
    }

    .support {
      font-size: 14px;
      color: #777777;
      margin-top: 30px;
    }

    a {
      color: #007BBD;
      text-decoration: none;
    }
  </style>
</head>

<body>
  <div class="container">
    <img src="https://res.cloudinary.com/dpo4msttv/image/upload/v1748150519/abzrxpjnyhf7xbwogv4l.png" alt="logo" class="logo" />
    <div class="heading">Thank You, ${name}!</div>
    <div class="message">
      <p>
        Thank you for contacting us. One of our team members will reach out to you shortly.<br />
        We truly value your interest and are committed to providing you with the support you need.<br />
        If your matter is urgent, feel free to give us a call directly — we're here to help.
    </p>
    </div>
    <div class="support">
      If you have any questions, feel free to contact us at 
      <a href="mailto:info@nurturedisability.com.au">info@nurturedisability.com.au</a>. We're here to help!
    </div>
  </div>
</body>

</html>`;
};
