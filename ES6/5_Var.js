//Global - ACCESO A TODO 

var globalScopeVar = 'Variable Global Scope';
console.log(globalScopeVar);


function functionScope() {
    var functionScopeVar = 'Variable Function Scope';
    console.log(functionScopeVar);
}

functionScope();
console.log(functionScopeVar);

//----------------------------------------------------------------
//***Block Scope - APLICA HOISTING

//var blockScopeVar = undefined;
console.log(blockScopeVar);
if (false) {
  var blockScopeVar = 'Variable Block Scope';
}
console.log(blockScopeVar);
//RPTA: UNDEFINED 