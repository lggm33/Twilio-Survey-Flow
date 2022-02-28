const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const client = require('twilio')(accountSid, authToken);
const numbersToSendMessages = JSON.parse(`{
  "numbers": [
  "+18483211234",
  "+14151234567",
  "+19103217654",
  "+19103217654",
  "+17076543210"
  ]
}`)

function sendMessages(numbers) {
  
  function twilioMessages(number) {
    client.messages
      .create({body: 'Hi, I am Gabriel and I would love to work with Twilio', from: numberTwilio, to: number})
      .then(message => console.log(message.sid))
      .catch(error => console.log(error))
  }

  numbers.numbers.forEach(number => twilioMessages(number))
}

sendMessages(numbersToSendMessages)
