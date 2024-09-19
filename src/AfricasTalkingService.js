// import axios from 'axios';

// const username = 'sandbox';
// const apiKey = 'atsk_9a561fc568e89ec22a9d8daf822c26f7a44cc14283b37d74e238ca22733ff1cae0641984';
// const baseUrl = 'https://api.africastalking.com/version1/messaging';

// export const sendMessage = async (to, message) => {
//   try {
//     const response = await axios.post(baseUrl, {
//       username,
//       to,
//       message,
//     }, {
//       headers: {
//         'apiKey': apiKey,
//         'Content-Type': 'application/json',
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error sending message:', error);
//     throw error;
//   }
// };
import africastalking from 'africastalking';

const credentials = {
  apiKey: 'atsk_9a561fc568e89ec22a9d8daf822c26f7a44cc14283b37d74e238ca22733ff1cae0641984',
  username: 'sandbox',
};

const AT = africastalking(credentials);
const sms = AT.SMS;

export const sendMessage = async (to, message) => {
  try {
    const response = await sms.send({
      to,
      message,
    });
    return response;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};
