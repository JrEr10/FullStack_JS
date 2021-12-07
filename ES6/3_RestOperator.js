////////////////////////////////
// Objetivo: REST -> (LISTA DE VALORES) => (ARRAY DE VALORES)
//Transforma una lista de valores en un Array de valores
//Lista de argumentos que se van a transformar en un array de valores
////////////////////////////////

//ES5
function printMessage(message, title) {
    console.log(message);
    console.log(arguments);
  }
  
  printMessage('NewHorinzs', 'ES5');
//RPTA:
//NewHorinzs
//[Arguments] { '0': 'NewHorinzs', '1': 'ES5' } => Como si fuera un objeto, es confuso

//ES6
//Soluciona y solo muestra una array
function printMessage2(...rest) {
    //console.log(message);
    //console.log(`${message} `, rest);
    //console.log(message + '\n' + rest);
    console.log(rest);
  }
  
  printMessage2('Rest Operator',
    'ECMAScript 6',
    'Javascript',
    2021,
    'NewHorizons');
//Rpta: [ 'Rest Operator', 'ECMAScript 6', 'Javascript', 2021, 'NewHorizons' ]