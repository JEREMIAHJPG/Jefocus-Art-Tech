
const africastalking = {
    apiKey: 'atsk_9a561fc568e89ec22a9d8daf822c26f7a44cc14283b37d74e238ca22733ff1cae0641984', 
    username: 'sandbox'
  };

  export const sendMessage = async (to, message) => {
  try {
    const result=await africastalking.SMS.send({
      to, 
      message,
      // from: '[Your_sender_ID_goes_here]'
    });
    return result;
    
  } catch (error) {
    console.error('Error sending verification code:', error);
     throw error;
  }
};