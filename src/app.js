/* eslint-disable no-unused-vars */
// import '@/css/app.scss';
// private readonly endPoint: string = "https://api.paycomet.com/gateway/xml-bankstore?wsdl";
//     private readonly endPointUrl: string = "https://api.paycomet.com/gateway/ifr-bankstore?";

import axios from 'axios';

const formData = new FormData();
formData.append('param', JSON.stringify({
  apiID: 'tTqDdxWNUhV4opRfkz20nA9jaQuJyGiP',
  datos: [
    { key: 'language', val: 'es' },
    { key: 'paNumber', val: '4539232076648253' },
    { key: 'cvc2', val: '377' },
    { key: 'cardHolderName', val: 'Sofia%20Campos%20Fernandez' },
    { key: 'dateMonth', val: '03' },
    { key: 'dateYear', val: '24' }
  ],
  method: 'iframe'
}));

const config = {
  method: 'post',
  url: 'https://api.paycomet.com/gateway/jet_request.php',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
    // 'PAYCOMET-API-TOKEN': 'ec71b512cee67b7e65b38800bc3b1018e64a2b94'
  },
  data: formData
};

axios(config)
  .then((response) => {
    console.log(response.data);
    axios({
      method: 'POST',
      url: 'https://rest.paycomet.com/v1/cards',
      data: {
        terminal: 30810,
        jetToken: response.data.paytpvToken
      },
      headers: {
        'Content-Type': 'application/json',
        'PAYCOMET-API-TOKEN': 'ec71b512cee67b7e65b38800bc3b1018e64a2b94'
      }
    }).then(response => console.warn(response));
  })
  .catch(function (error) {
    console.log(error);
  });
