console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1

let a = 20;
let b = 4;
let add = a + b;
let minus = a - b;
let multiply = a * b;
let divide = a / b;

console.log( ` ${add} ${minus} ${multiply} 
  ${divide} `);

// Exercise 2


let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

// I wanted to work these out before I pritned them. 
//ex2_1 is the 1st question of exercise 2
//ex2_2 is the 2nd question, and so on... 


let ex2_1 = num + str;
let ex2_2 = num + str2;
let ex2_3 = num + isPresent;
let ex2_4 = firstName + num;
let ex2_5 = isPresent + str;
let ex2_6 = firstName + lastName; 


console.log(`${ex2_1} ${ex2_2} ${ex2_3} 
${ex2_4} ${ex2_5} ${ex2_6}`);



// Exercise 3

let val = 5;
let str3 = "5";
let str4 = "five";
let isAwake = false;

//again, I will work these out before I print them,
//using the same style as before. 
// the variable ex3_1 is the 1st question, 
// ex3_2 is the 2nd.. 

let ex3_1 = val == str3; 
let ex3_2 = val === str3;
let ex3_3 = !isAwake;
let ex3_4 = ("eleven" == str4 && val >= str3); 
let ex3_5 = (!isAwake || isAwake);
let ex3_6 = 0 == false;
let ex3_7 = 0 === false;
let ex3_8 = 0 != false;
let ex3_9 = 0 !== false;


console.log(`${ex3_1} ${ex3_2} ${ex3_3} 
${ex3_4} ${ex3_5} ${ex3_6} 
${ex3_7} ${ex3_8} ${ex3_9}`);


