const nodemailer = require('nodemailer');



function sendEmailWithQuestionnaireResults() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'benosgeorg13@gmail.com',
      pass: 'bpvfjwxsgqylmzsw',
    },
  });

  const options = {
    from: 'benosgeorg13@gmail.com',
    to: 'benos.geo@gmail.com',
    subject: 'Questionnaire results: George Benos',
    text: 'jsonData xD',
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.error('Error sending email:', err);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

module.exports = {
  sendEmailWithQuestionnaireResults,
};
