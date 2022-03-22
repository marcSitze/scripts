const axios = require('axios');

const login = (tel, password) => {
const data = JSON.stringify({
  "tel": "+237699576276",
  "password": "12345678",
  "fromApi": true
});

const config = {
  method: 'post',
  url: 'https://dashboard.genuka.com/api/2021-10/clients/login',
  headers: {
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log('LOGIN_SUCCESS')
  return  getUser(response.data.access_token);
})
.catch(function (error) {
  console.log(error);
});
}

const getUser = (token) => {

const config = {
  method: 'get',
  url: 'https://dashboard.genuka.com/api/2021-10/user',
  headers: {
    'Authorization': 'Bearer ' + token
  }
};

axios(config)
.then(function (response) {
  console.log("GET_USER", response.data);
  return response.data;
})
.catch(function (error) {
  console.log(error);
});

}

// const resultLogin = login('+237699576276', '12345678');

login('+237699576276', '12345678');
