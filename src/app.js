/* eslint-disable no-unused-vars */
// import '@/css/app.scss';
// private readonly endPoint: string = "https://api.paycomet.com/gateway/xml-bankstore?wsdl";
//     private readonly endPointUrl: string = "https://api.paycomet.com/gateway/ifr-bankstore?";

import axios from 'axios';

const config = {
  method: 'post',
  url: 'https://rest.paycomet.com/v1/cards',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'PAYCOMET-API-TOKEN': 'ec71b512cee67b7e65b38800bc3b1018e64a2b94'
  },
  data: {
    terminal: 30810,
    cvc2: '012',
    jetToken: 'rApGWqLdH8ExOyNiLukyMMs78PZRzDm5',
    expiryYear: '23',
    expiryMonth: '11',
    pan: 'eu consectetur',
    order: 'PAY987654321',
    productDescription: 'Random product',
    language: 'es',
    notify: 1
  }
};

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
