/* eslint-disable no-unused-vars */
// import '@/css/app.scss';
// private readonly endPoint: string = "https://api.paycomet.com/gateway/xml-bankstore?wsdl";
//     private readonly endPointUrl: string = "https://api.paycomet.com/gateway/ifr-bankstore?";

import axios from 'axios';

const data = '{\n    "terminal": 34076758,\n    "cvc2": "012",\n    "jetToken": "rApGWqLdH8ExOyNiLukyMMs78PZRzDm5",\n    "expiryYear": "23",\n    "expiryMonth": "11",\n    "pan": "eu consectetur",\n    "order": "PAY987654321",\n    "productDescription": "Random product",\n    "language": "fr",\n    "notify": 1\n}';

const config = {
  method: 'post',
  url: 'https://rest.paycomet.com/v1/cards',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'PAYCOMET-API-TOKEN': '64213a07d21e22e47db6566e6cda659cf4860440'
  },
  data: {
    terminal: 34076758,
    cvc2: '012',
    jetToken: 'rApGWqLdH8ExOyNiLukyMMs78PZRzDm5',
    expiryYear: '23',
    expiryMonth: '11',
    pan: 'eu consectetur',
    order: 'PAY987654321',
    productDescription: 'Random product',
    language: 'fr',
    notify: 1
  }
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

// Instancia para cosumir la mayoria los servicios
// const axiosInstance = axios.create({
//   // baseURL: 'https://rest.paycomet.com',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     'PAYCOMET-API-TOKEN': '64213a07d21e22e47db6566e6cda659cf4860440'
//   }
// });

// async function apiPayComet () {
//   try {
//     await axiosInstance.get('https://rest.paycomet.com');
//   } catch (error) {

//   }
// }

// apiPayComet();

// const PaycometRestApi = require('paycomet_rest_api');

// const api = new PaycometRestApi.BalanceApi();
// const opts = {
//   body: {},
//   pAYCOMETAPITOKEN: '64213a07d21e22e47db6566e6cda659cf4860440' // {{String}} PAYCOMET API key (Query privilege required)
// };
// const callback = function (error, data, response) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('API called successfully. Returned data: ' + data);
//   }
// };
// api.productBalance(opts, callback);
