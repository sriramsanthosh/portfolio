const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");

require("dotenv").config();

router.post("/send-mail", async (req, res) => {
    console.log(req.body);
    if(await SendMail(req.body)){
        return res.status(200).json({
            message:"Message received! Get back to you shortly :)"
        });
    }
    else{
        return res.status(201).json({
            message:"Error! Message not sent"
        });
    }
    
});

router.get("/", (req, res) => {
    res.status(200).json({ message: "This Server is Running!" });
});

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER_NAME,
        pass: process.env.SMTP_PASSCODE
    }
});

const SendMail = async (data) => {
    try {
        console.log(process.env.SMTP_HOST);
        console.log(data.email);
        let bodyofEmail= `<div style='font-size:large; font-family: sans-serif'>
        <h2 class="protest-riot-regular", >Hey <span>${data.name}</span>,</h2><h3>Thanks for contacting me. How do you do? Want to follow me? <br> <br> Checkout & subscribe to my youtube channel <a href="https://www.youtube.com/channel/UCqFxWlMFmpOCyjQQBmsi6-g" target="_blank" style="text-decoration:underline; color: crimson;">Study&nbsp;With&nbsp;Sriram</a> </h3>
        <div style = "margin:auto; padding: 0 30px; border: 2px solid lightgray; text-align: center; width:fit-content">
            <h5>Your Message </h5>
            <h2>${data.message}"</h2>
        </div>
        <h3>I'll reach out to you shortly <b>:)</b></h3>
        <h3>--<br>Best Regards<br> <a href="https://www.linkedin.com/in/sriramsanthosh/" target="_blank"
            style="text-decoration: underline; color: crimson;">Sriram Santhosh</a></h3>
            </div>
        `;
            
        await transporter.sendMail({
            from: `${process.env.SMTP_USER_NAME}`,
            to: data.email,
            subject: "Thanks for contacting me",
            html: await bodyofEmail
        }).then(() => {
            console.log("Email sent successfully!");
        });
        return 1;
    }
    catch (error) {
        console.log(`Error in sending email: `, error);
        return 0;
    }
}

module.exports = router;