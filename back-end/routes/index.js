const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
const User = require('../models/user');
const HR = require('../models/hr');
require("dotenv").config();

router.post("/send-mail", async (req, res) => {
    let data= req.body;
    let bodyofEmail= `<div style='font-size:large; font-family: sans-serif'>
        <h3 class="protest-riot-regular", >Hey <span>${data.name}</span>,</h3><p>Thanks for contacting me. How do you do? Want to follow me? <br> <br> Checkout & subscribe🔔 to my youtube channel <a href="https://www.youtube.com/channel/UCqFxWlMFmpOCyjQQBmsi6-g" target="_blank" style="text-decoration:underline; font-weight:bold; color: crimson;">Study&nbsp;With&nbsp;Sriram</a> </p>
        <div style = "margin:auto; padding: 0 30px; border: 2px solid lightgray; text-align: center; width:fit-content">
            <h5 style="text-decoration:underline;">Your Message</h5>
            <p style="white-space: pre-line;">${data.message}</p>
        </div>
        <p>I'll reach out to you shortly <b>:)</b></p>
        <p>- -<br>Best Regards<br> <a href="https://www.linkedin.com/in/sriramsanthosh/" target="_blank"
            style="font-weight:bold; text-decoration: underline; color: crimson;">Sriram Santhosh</a></p>
            </div>
        `;
    let newMessage = await User.create(data);
    if(await SendMail(data, bodyofEmail)){
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

router.post("/send-hiring-mail", async (req, res) => {
    let data= req.body;
    let bodyofEmail= `<div style='font-size:large; font-family: sans-serif'>
        <h3 class="protest-riot-regular">Dear <span>${data.name}</span>,</h3><p>Thanks for showing interest to hire me.</p>
        <div style = "margin:auto; padding: 0 30px; border: 2px solid lightgray; text-align: center; width:fit-content">
            <h5 style="text-decoration:underline;">Your Message</h5>
            <p style="white-space: pre-line;">Company : ${data.company}</p>
            <p style="white-space: pre-line;">Message : ${data.message}</p>
        </div>
        <p>I'll reach out to you shortly <b>:)</b></p>
        <p>- -<br>Best Regards<br> <a href="https://www.linkedin.com/in/sriramsanthosh/" target="_blank"
            style="font-weight:bold; text-decoration: underline; color: crimson;">Sriram Santhosh</a></p>
            </div>
        `;
    // let newHiringMessage = await HR.create(data);
    
    if(await SendMail(data, bodyofEmail)){
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

const SendMail = async (data, bodyofEmail) => {
    try {   
        await transporter.sendMail({
            from: `"Sriram's PortFolio" ${process.env.SMTP_USER_NAME}`,
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