function sendEmailWithQuestionnaireResults() {
    console.log(localStorage)
    require(['nodemailer'], function(nodemailer) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "benosgeorg13@gmail.com",
          pass: "bpvfjwxsgqylmzsw",
        }
      });
  
      const options = {
        from: "benosgeorg13@gmail.com",
        to: "benos.geo@gmail.com",
        subject: "Questionnaire results",
        text: JSON.stringify(localStorage),
      };
  
      transporter.sendMail(options, function (err, info){
        if (err) {
          console.log(err);
          return;
        }
        console.log("Sent: " + info.response);
      });
    });
  }

sendEmailWithQuestionnaireResults();