const express = require('express');
const mailApp = require('../Mailer/mail_app.js');
const path = require('path');

const app = express();
const port = 5500;

// Enable CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(express.static(path.join(__dirname, 'Final_page')));

app.get('/send-email', (req, res) => {
  mailApp.sendEmailWithQuestionnaireResults();

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
