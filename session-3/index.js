const a = 5;
const b = 10;
let c = a + b;

console.log(c);
function sayHey() { 
    console.log("Hey!"); 
}

sayHey();
function conversation() {
    sayHey();
    console.log("How are you?");
    console.log('Goodbye');
    
}
conversation()
function futureAge(x,y) {
    console.log(x)
    console.log(y)
    const answer = x + 5;
    console.log(y + "Your age in 5 years time will be" + answer)
    return y + " Your age in 5 years time will be" + answer
   
}
futureAge(22, "Mary")