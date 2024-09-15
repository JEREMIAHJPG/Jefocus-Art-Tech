// Download the helper library from https://www.twilio.com/docs/node/install
import twilio from "twilio"; // Or, for ESM: import twilio from "twilio";

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'AC00c9681f5e1c9813f1c2d519b69769c8';
const authToken = '32526e7b405275181f95d62b909bfbbf';
const client = twilio(accountSid, authToken);

async function sendVerificationcodeSMS(phoneNumber,code) {
  const message = await client.messages.create({
    body: `Jefocus Art and Tech says your Verification Code is :${code}`,
    from: "+15557122661",
    to: phoneNumber,
  });

  console.log(message.body);
}

sendVerificationcodeSMS(phoneNumber,code);