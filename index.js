const axios = require('axios').default;

(async () => {
  const a = await axios.get('https://gorest.co.in/public/v1/users/30');
  console.log(a.data);
})()