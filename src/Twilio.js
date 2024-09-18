// Download the helper library from https://www.twilio.com/docs/node/install
// import twilio from "twilio"; // Or, for ESM:

// // Find your Account SID and Auth Token at twilio.com/console
// // and set the environment variables. See http://twil.io/secure
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = twilio(accountSid, authToken);

// async function createMessage() {
//   const message = await client.messages.create({
//     body: "This is the ship that made the Kessel Run in fourteen parsecs?",
//     from: "+15017122661",
//     to: "+15558675310",
//   });

//   console.log(message.body);
// }

// createMessage();

// Download the helper library from https://www.twilio.com/docs/node/install
// import twilio from "twilio"; // Or, for ESM: import twilio from "twilio";

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
// const accountSid = 'AC00c9681f5e1c9813f1c2d519b69769c8';
// const authToken = '32526e7b405275181f95d62b909bfbbf';
// const client = twilio(accountSid, authToken);

// async function sendVerificationcodeSMS(phoneNumber,code) {
//   const message = await client.messages.create({
//     body: `Jefocus Art and Tech says your Verification Code is :${code}`,
//     from: "+15557122661",
//     to: phoneNumber,
//   });

//   console.log(message.body);
// }

// sendVerificationcodeSMS(phoneNumber,code);
import express from 'express';
import { Twilio } from 'twilio';

const app = express();
const port = 3000;

const accountSid = 'AC00c9681f5e1c9813f1c2d519b69769c8';
const authToken = '32526e7b405275181f95d62b909bfbbf';
const client = new Twilio(accountSid, authToken);

app.use(express.json());

app.post('/send-verification-code', (req, res) => {
  const { to } = req.body;
  const code = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit code

  client.messages
    .create({
      body: `Your verification code is ${code}`,
      from: "+12513130478", // Your Twilio number
      to: to
    })
    .then(message => res.send({ sid: message.sid, code }))
    .catch(error => res.status(500).send(error));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

