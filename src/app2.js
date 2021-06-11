/* eslint-disable no-unused-vars */
// import '@/css/app.scss';

import es from './es';
import fr from './fr';
const sortKeysRecursive = require('sort-keys-recursive');

function findKeys (mainObj, alterObj) {
  for (const key of Object.keys(mainObj)) {
    if (typeof alterObj[key] === 'string') {
      if (alterObj[key].toLowerCase().includes('todo')) {
        alterObj[key] = 'TODO: TRANSLATION';
      } else {
        delete alterObj[key];
      }
      continue;
    }
    //
    if (typeof mainObj[key] === 'object') {
      if (!alterObj[key]) {
        alterObj[key] = JSON.parse(JSON.stringify(mainObj[key]));
        for (const o of Object.keys(alterObj[key])) {
          if (mainObj[key][o] === alterObj[key][o]) {
            alterObj[key][o] = 'TODO: TRANSLATION';
          } else if (typeof mainObj[key][o] === 'object') {
            //
            const assignTodo = (object) => {
              for (const y of Object.keys(object)) {
                if (typeof object[y] === 'string') {
                  object[y] = 'TODO: TRANSLATION';
                } else {
                  object[y] = assignTodo(object[y]);
                };
              }
              return object;
            };

            alterObj[key][o] = assignTodo(mainObj[key][o]);
          }
        }
      } else {
        findKeys(mainObj[key], alterObj[key]);
      }
    }

    if (!alterObj[key]) {
      alterObj[key] = 'TODO: TRANSLATION';
    }
  };

  return {
    mainObj,
    alterObj
  };
}

const { mainObj, alterObj } = findKeys(fr, es);
const { mainObj: x1, alterObj: x2 } = findKeys(alterObj, mainObj);
const pre = document.createElement('pre');
pre.textContent = JSON.stringify(x1, undefined, 2);
document.body.appendChild(pre);

function completeMainKeys (alter, main) {
  for (const key of Object.keys(alter)) {
    console.warn(key);
    main[key] = es[key];
  }
  return main;
}
const main = completeMainKeys(alterObj, {});

const pre2 = document.createElement('pre');
pre2.style.backgroundColor = '#aaa';
pre2.textContent = JSON.stringify(main, undefined, 2);
document.body.appendChild(pre2);

// console.warn(sortKeysRecursive(alterObj));
// console.warn(Object.keys(alterObj).sort());

const a = document.createElement('a');
a.href = 'data:application/octet-stream,' + encodeURIComponent(JSON.stringify(sortKeysRecursive({
  title: 'Ya casi tienes lista tu cuenta de Flux Play',
  description: 'Vamos a terminar de configurar tu cuenta para que puedas comenzar a utilizar Flux enseguida. Sólo nos quedan cuatro sencillos pasos:',
  personal: {
    title: 'Datos profesionales',
    description1: 'Enim eiusmod exercitation aliqua sit enim ut mollit proident. Aliqua ut tempor proident quis et qui enim excepteur occaecat ipsum veniam velit est.',
    description2: 'Más tarde podrás cambiarlos desde Mi perfil.'
  },
  center_and_space: {
    first_center: {
      title: 'Crea tu primer centro',
      description1: 'En Flux Play llamamos centros a los diferentes locales o ubicaciones que tenga tu negocio. Desde aquí podrás crear tu primer centro.',
      description2: 'Más tarde podrás gestionarlos y crear nuevos desde la sección Centros y Espacios.'
    },
    first_space: {
      title: 'Crea un espacio',
      description1: 'En Flux Play llamamos espacios a las zonas separadas que puede haber en cada centro. Desde aquí vamos a crear un único espacio para tu primer centro.',
      description2: 'Más tarde podrás gestionarlos y crear nuevos desde la sección Centros y Espacios.'
    },
    create: 'Creación de centro y espacio',
    description: 'El centro {center} con el espacio {space} ha sido creado con éxito y están listos para utilizarse.'
  },
  catalog: {
    title: 'Elige tu catálogo de música',
    description1: 'En Flux Play utilizamos dos catálogos de música diferentes. El uso de cada uno de ellos está sujeto a la obtención de una licencia.',
    description2: 'Sólo se puede seleccionar un catálogo. Cuando lo hagas te enviaremos un email con instrucciones sobre cómo conseguir la licencia.',
    sgae: {
      title: 'Catálogo SGAE-AGEDI',
      description1: 'Con unas 5.000 canciones incluídas, donec ullamcorper nulla non metus auctor fringilla.',
      description2: 'El coste de una licencia para este catálogo oscila en torno a XX€ por espacio, dependiendo de varius blandit sit amet non magna.'
    },
    soundreef: {
      title: 'Catálogo Soundreef',
      description1: 'Con unas 5.000 canciones incluídas, donec ullamcorper nulla non metus auctor fringilla.',
      description2: 'El coste de una licencia para este catálogo oscila en torno a XX€ por espacio, dependiendo de varius blandit sit amet non magna.'
    },
    help_me_decide: 'Necesito ayuda para decidir'
  },
  billing: {
    title: 'Indica los datos de facturación',
    description1: 'Lorem ipsum dolor sit amet.',
    description2: 'Más tarde podrás cambiarlos desde la sección Facturación.'
  },
  payment: {
    title: 'Indica un medio de pago',
    description1: 'Lorem ipsum dolor sit amet.',
    description2: 'Más tarde podrás cambiarlos desde la sección Facturación.'
  },
  finish: {
    catalog: {
      title: 'Selección de catálogo musical',
      description: 'Contarás con todas las canciones y canales de Soundreef. Asegúrate de conseguir la licencia adecuada según te indicamos en el email que te hemos enviado.'
    },
    billing: {
      title: 'Datos de facturación',
      description: 'Tus datos de facturación y el medio de pago se han guardado en nuestros sistemas.'
    }
  }
})));
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
