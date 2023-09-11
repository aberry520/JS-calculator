const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const clear = document.getElementById("clear");
const display = document.getElementById("display");
const posNeg = document.getElementById("posNeg");
const percent = document.getElementById("percent");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const decimal = document.getElementById("decimal");
const equal = document.getElementById("equal");

let arr = [];

zero.addEventListener("click", function (){
    arr.push(0);
    display.innerHTML = arr.join('');
});
one.addEventListener("click", function (){
    arr.push(1);
    display.innerHTML = arr.join('');
});
two.addEventListener("click", function (){
    arr.push(2);
    display.innerHTML = arr.join('');
});
three.addEventListener("click", function (){
    arr.push(3);
    display.innerHTML = arr.join('');
});
four.addEventListener("click", function (){
    arr.push(4);
    display.innerHTML = arr.join('');
});
five.addEventListener("click", function (){
    arr.push(5);
    display.innerHTML = arr.join('');
});
six.addEventListener("click", function (){
    arr.push(6);
    display.innerHTML = arr.join('');
});
seven.addEventListener("click", function (){
    arr.push(7);
    display.innerHTML = arr.join('');
});
eight.addEventListener("click", function (){
    arr.push(8);
    display.innerHTML = arr.join('');
});
nine.addEventListener("click", function (){
    arr.push(9);
    display.innerHTML = arr.join('');
});



clear.addEventListener("click", function(){
    arr = [];
    display.innerHTML = 0;
});
divide.addEventListener("click", function (){
    arr.push("/");
    display.innerHTML = arr.join('');
});
multiply.addEventListener("click", function (){
    arr.push("*");
    display.innerHTML = arr.join('');
});
subtract.addEventListener("click", function (){
    arr.push("-");
    display.innerHTML = arr.join('');
});
add.addEventListener("click", function (){
    arr.push("+");
    display.innerHTML = arr.join('');
});
decimal.addEventListener("click", function (){
    arr.push(".");
    display.innerHTML = arr.join('');
});
equal.addEventListener("click", function(){
    display.innerHTML = eval(arr.join(''));
});



// not working yet
percent.addEventListener("click", function (){
    arr.push("*100");
    display.innerHTML = arr.join('');
});
posNeg.addEventListener("click", function(){
    arr.unshift("-");
    display.innerHTML = arr.join('')
});