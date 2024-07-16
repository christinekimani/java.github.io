let globalvar = "I am a globalvar";

function demoScope(){
    let localvar ="I am a localvar";

console.log(globalvar);
console.log(localvar);
}

console.log(globalvar);
// console.log(localvar);
return demoScope();