const express = require('express');
const mailApp = require('./Mailer/mail_app');
const path = require('path');

const app = express();
const port = 5500;

app.use(express.static(path.join(__dirname, 'Website')));

app.post('/send-email', (req, res) => {
  mailApp.sendEmailWithQuestionnaireResults();

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
