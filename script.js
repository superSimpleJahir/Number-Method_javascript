// to String method
let num = 25;
num = toString(num);
console.log(num);
console.log(typeof(num));


// to parseInt method
let num1 = '20';
num1 = parseInt(num1);
console.log(num1);
console.log(typeof(num1));


// to parseFloat method
let num2 = '20.5';
num2 = parseFloat(num2);
console.log(num2);
console.log(typeof(num2));


// to toFixed method
let number = 20.5689;
number = number.toFixed(2);
console.log(typeof(number));


// to parseFloat method
let number1 = 20.5689;
number1 = number1.toPrecision(4);
console.log(typeof(number1));


// Number Method 
let number3 = Number(true);
console.log(number3);

let number4 = Number(false);
console.log(number4);

let number5 = Number("30");
console.log(number5);

let number6 = Number("   30");
console.log(number6);

let number7 = Number("20    ");
console.log(number7);

let number8 = Number("50.4467");
console.log(number8);

let number9 = Number("50,4467");
console.log(number9);

let number10 = Number("50 4467");
console.log(number10);

let number11 = Number("Jahir");
console.log(number11);


