const axios = require('axios');

async function Log(stack, level, pkg, message) {
  const payload = {
    stack,
    level,
    package: pkg,
    message,
  };

  try {
    const response = await axios.post('http://20.244.56.144/evaluation-service/log', payload, {
      headers: {
        Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Replace with actual token
      },
    });

    console.log('Log sent:', response.data);
  } catch (error) {
    console.error('Logging failed:', error.response?.data || error.message);
  }
}

module.exports = Log;
