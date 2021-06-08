/* eslint-disable no-unused-vars */
// import '@/css/app.scss';

import es from './es/index';
import fr from './fr/index';
const sortKeysRecursive = require('sort-keys-recursive');

function findKeys (mainObj, alterObj) {
  Object.keys(mainObj).forEach(key => {
    if (typeof mainObj[key] === 'object') {
      if (!alterObj[key]) {
        alterObj[key] = JSON.parse(JSON.stringify(mainObj[key]));
        for (const o of Object.keys(alterObj[key])) {
          console.warn('compare', mainObj[key][o], alterObj[key][o], typeof alterObj[key][o]);
          if (mainObj[key][o] === alterObj[key][o]) {
            alterObj[key][o] = 'TODO: TRANSLATION';
          } else if (typeof mainObj[key][o] === 'object') {
            //
            const assignTodo = (object) => {
              console.error('comes', object);
              for (const y of Object.keys(object)) {
                if (typeof object[y] === 'string') {
                  object[y] = 'TODO: TRANSLATION';
                } else {
                  object[y] = assignTodo(object[y]);
                  console.warn('myojbect', object[y]);
                };
              }
              return object;
            };

            alterObj[key][o] = assignTodo(mainObj[key][o]);

            // console.error(key, o, mainObj[key][o]);
            // return findKeys(mainObj[key][o], alterObj[key][o]);
          }
        }
      } else {
        return findKeys(mainObj[key], alterObj[key]);
      }
    }

    if (!alterObj[key]) {
      alterObj[key] = 'TODO: TRANSLATION';
    }
  });

  return {
    mainObj,
    alterObj
  };
}

const { mainObj, alterObj } = findKeys({ es }, { es: fr });
const pre = document.createElement('pre');
pre.textContent = JSON.stringify(alterObj, undefined, 2);
document.body.appendChild(pre);

// console.warn(sortKeysRecursive(alterObj));
// console.warn(Object.keys(alterObj).sort());

const a = document.createElement('a');
a.href = 'data:application/octet-stream,' + encodeURIComponent(JSON.stringify(sortKeysRecursive(es)));
a.download = 'es.json';
a.click();

// espect
const espect = {
  centers: {
    edit: '',
    create: '',
    user: {
      account: ''
    },
    trade: ''

  }
};

// function findKeys (mainObj, alterObj) {
//   return Object.keys(mainObj).reduce((acc, key) => {
//     console.warn('mainObj', mainObj);
//     console.log('alterObj', alterObj);
//     console.warn('compares', key);

//     // acc = findKeys(mainObj[key], {});

//     if (typeof mainObj[key] === 'object') {
//       console.warn('object', key);
//       findKeys(mainObj[key], alterObj[key] ?? {});
//       // console.log(typeof mainObj[key] === 'object');
//       // acc = findKeys(mainObj[key], alterObj[key] ?? acc);
//     }
//     if (!alterObj[key]) {
//       // console.log('key', key);
//       acc[key] = '';
//     }

//     // console.log('acc', acc);
//     return acc;
//   }, {});
// }

// const indexedDB = window.indexedDB;

// if (indexedDB) {
//   let db = null;
//   const request = indexedDB.open('test', 1);

//   request.onsuccess = () => {
//     console.warn('SUCCESS');
//   };

//   request.onupgradeneeded = () => {
//     // eslint-disable-next-line no-unused-vars
//     db = request.result;
//     const createObjectStore = db.createObjectStore('tasks');
//     createObjectStore.add(true, 'val');
//     console.warn('ON CREATED');
//   };
// }
