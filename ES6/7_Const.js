//Siempre se inicializa
//SÓLO SE REASIGNA CUANDO NO ES TIPO DE DATO PRIMITIVO
//No primitivos: COMO OBJETO Y FUNCIONES

//No aplica HOISTING
//console.log(API_KEY_SENDGRID); 
//Rpta: Error, debe inicializar
const API_KEY_SENDGRID = '23456IOLKJHGFDFGBD-FSDF234233333242'
console.log(`Si imprime: ${API_KEY_SENDGRID}`);
API_KEY_SENDGRID = 28;
console.log(API_KEY_SENDGRID);
//ERROR -  No se puede reasignar

//----------------------------------------------------------------
//OBJETOS
const objUser = {
    name: 'Pablo',
    country: 'Colombia',
  };

  console.log(objUser);

  objUser.name = 'Juancito'
//Podemos reasignar
  console.log(`Reasigna Juancito ${objUser}`);

  //----------------------------------------------------------------

  const arrayDogs = ['Spock', 'King', 'Toffee', 'Milka'];
//Reasigna el valor
  arrayDogs[0] = 'Harry';

console.log(arrayDogs);

//------------------------------

//Usualmente crearemos funciones tipo const
//Funciones impuras, varían los resultados, como el tiempo. Se envía 5*tiempo actual.
//Funciones puras, mismo resultado, si envío 5, el resultado siempre será el mismo.
const getData = function () {
    return {};
  };
  
  getData();