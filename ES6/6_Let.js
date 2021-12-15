//GLOBAL SCOPE - NO APLICA HOISTING
console.log(globalScopeLet);
//RPTA: ERROR
let globalScopeLet = 'Variable Global Scope';

//----------------------------------------------------------------
//**FUNCTION SCOPE - NO ACCEDE DESDE AFUERA - solo en su ÁMBITO
function functionScope() {
    let functionScopeLet = 'Variable Function Scope';
    console.log(functionScopeLet);
  }
//NO es posible acceder al LET dentro de una función
//functionScope();
  console.log(functionScopeLet);
//RPTA: ERROR

//----------------------------------------------------------------
//***Block Scope - NO APLICA HOISTING 


console.log(blockScopeVar);
//rpta: ERROR
if (false) {
  let blockScopeVar = 'Variable Block Scope';
}
console.log(blockScopeVar);
//RPTA: ERROR 

//----------------------------------------------------------------

