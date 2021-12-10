//SOLO SE REASIGNA CUANDO NO ES TIPO DE DATO PRIMITIVO
//COMO OBJETO Y FUNCIONES

const API_KEY_SENDGRID = '23456IOLKJHGFDFGBD-FSDF234233333242'
console.log(API_KEY_SENDGRID);
API_KEY_SENDGRID = 28;
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
  console.log(objUser);

  //----------------------------------------------------------------

  const arrayDogs = ['Spock', 'King', 'Toffee', 'Milka'];
//Reasigna el valor
  arrayDogs[0] = 'Harry';

console.log(arrayDogs);