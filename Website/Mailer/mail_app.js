const nodemailer = require('nodemailer');

console.log()

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
    text: "TEST TEXT B!ATCH!",
};

transporter.sendMail(options, function (err, info){
    if(err){
        console.log(err);
        return;
    }
    console.log("Sent: " + info.response)
})