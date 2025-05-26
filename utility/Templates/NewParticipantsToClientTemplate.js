exports.newParticipantstoclient = (name, userDetails) => {
    
    console.log(userDetails);
    if (typeof userDetails !== 'object' || userDetails === null) {
    userDetails = {};
  }

  const detailRows = Object.entries(userDetails).map(
    ([key, value]) =>
      `<tr>
        <td class="label">${key}</td>
        <td class="value">${value ?? 'N/A'}</td>
      </tr>`
  ).join("");


return `<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title>New User Registered</title>
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

    .support {
        font-size: 14px;
        color: #777777;
        margin-top: 30px;
    }

    a {
        color: #007BBD;
        text-decoration: none;
    }

    .details-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px auto;
    }

    .details-table th,
    .details-table td {
        border: 1px solid #cce5f6;
        padding: 10px;
        text-align: left;
    }

    .details-table th {
        background-color: #d4ecfa;
        font-weight: bold;
    }

    .label {
        font-weight: bold;
        background-color: #f0f8ff;
    }

    .value {
        background-color: #ffffff;
    }
</style>
</head>

<body>
<div class="container">
    <img src="https://res.cloudinary.com/dpo4msttv/image/upload/v1748150519/abzrxpjnyhf7xbwogv4l.png" alt="logo" class="logo" />
    <div class="heading">New User Registered</div>
    <div class="message">
        <p>A new user has registered. Here are the details of the user:</p>
    </div>
    
    <table class="details-table">
        <tbody>
            ${detailRows}
        </tbody>
    </table>

    <div class="support">
        If you have any questions, feel free to contact us at 
        <a href="mailto:info@nurturedisability.com.au">info@nurturedisability.com.au</a>. We're here to help!
    </div>
</div>
</body>

</html>`;
};
