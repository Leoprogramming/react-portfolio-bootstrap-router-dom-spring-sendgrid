const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sendGrid = require("@sendGrid/mail");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/api", (req, res, next) => {
  res.send("API Status: Running")
});

app.post("/api/email", (req, res, next) => {

  sendGrid.setApiKey("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");
  const msg = {
    to: "leo.costa.programming@gmail.com",
    from: req.body.email,
    subject: "Website Contact",
    text: req.body.message
  }

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'test@example.com',
    from: 'test@example.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);

    })
    .catch(err => {
      console.log("error: ", err);
      res.status(401).json({
        success: false
      });

    });
});

app.listen(3000, "0.0.0.0");