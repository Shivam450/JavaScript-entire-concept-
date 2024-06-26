/*function are the building blocks of complex application and they key to unlocking the full potential of the language */
/*Focus:JS function, Function Declaration,Calling Function,Parameters & Arguments and the helper function */
/*Primary Goals-
1)understand the concept and syntax of function declarations in JS.
2)learn how to call a function and arguments and hoe they are used in a funciton.
3)Understand the difference betn parameters and arguments and how they are used in a function.
4) Understand differrnt types of function in JS, including anonymous function and arrow function.
5)Learn about hoisting and how it affects how function are defined and executed in JS
6)Understand the concept of the call stack and how it is used to manage function call in JS */
/*A function in JavaScript is a piece of reusable code
Function define and wht it contain-The function keyword, the function name, any optional parameters in parentheses, and the code block encased in curly brackets are used to define functions. */


//Simple function
function sum (num1,num2){
    console.log(num1+num2)
}
//calling the funciton
sum(3,6)// 9
//This code defines a function called sum which is taking two arguments num1 and num2 and outputs sum using the + operator.

//Example of JS Funciton which calculate area of rectangle
function calculateArea (width, height){
    let area = width * height;
    console.log(area)
}

//Calling the function with arguments
calculateArea(5,10)// 50

/*Funtion Declarations
In JS, Function declaration it is create for reusable code and that can be called later in program.
example:*/
function functionName(parameter1, parameter2) {
    // Function body: code that is executed when the function is called
    // You can use parameters and perform operations here
    return result; // Optional: You can return a value from the function
  }
//functionName: It is the variable name only(no space, can't start with number)
//return keyword:value that the function will produce and send back when called.if the  no return keyword than function return undefined

function greet(name/*name is parameter,it can be multiple*/){
    return `Hello ${name}`;
}
const nam = greet("Shivam"/*"Shivam" is the arguments with respect to parameter*/)
console.log(nam)// Hello Shivam

/*calling the function
In JS, calling the function is the code inside {} braces or inside the body.
when you call a function, you use name followed by parantheses().
if the function has any parameter than you can pass the argument inside ().
parameter should be empty or, multiple parameter.
the function should be executed provided by the arguments.*/

//Function declaration
function sayHello(name){
    console.log(`Hello, ${name}!`);
}

//Function call with argument
sayHello("John");//Hello John

//2nd Examples
function add(a,b/*parameter*/){
    return a+b;//return keyword will passed the value inside the parameter
}

const result = add(3,5);// assign new variable and pass the arguments
console.log(result);
/*The return keyword in JavaScript is used to specify the value that a function should produce and send back when called. When a function encounters a return statement, it immediately exits the function and returns the specified value to the caller. If there is no return statement in the function, it implicitly returns undefined.*/
//Parameters is the local scope, means they only work inside the function

//Default Parameter:- It is default parameter we set directly after assign parameter using (=) equal to symbol, like this (parameter=defaultvalue), but if we provide argument then it will first consider after defaultvalue will consider
//Example
function greet(parameter1 = "hello",parameter2="Shivam") {
    console.log(`${parameter1},${parameter2}`);
    return (`${parameter1},${parameter2}`);
}
greet()//ny using console.log()
console.log(greet())//by using return keyword
//Above we use default parameter as output but we also pass argument which consider more important 
//remember always write return keyword at end of the code

greet("!Hii","Sani")
console.log(greet("!Hii","Ronak"))// in here it will print 2 times b'cuz first return keyword work and then console.log work

function multiply(a,b=2){
    return (a*b)
}
console.log(multiply(3))//while we have default value of b=2, so we cannot give argument for b
console.log(multiply(3,5))// here argument is important as compare to defaultvalue


//Helper Function
//It is also known as helper methods, these function are help to assist other function, and also perform some specific task, and also use for reusability.It is used to design repetative task or complex task.
//Example
function calculateRectangleArea(width,height){
    return width*height;
}
 const area = calculateRectangleArea(5,6);//here calculateRectangleArea is a helper function which is used under the new variable.

 /*Uses cases-Helper function follow DRY principle meant don't reapeat code */
 //helper funciton follow many uses case rule




 //1)Modularize code:If we have many function will repeat same code then we break down code into smaller pieces,
 //Let's say you have a complex task that involves multiple steps, such as uploading a file, parsing its contents, and saving the results to a database.

 function uploadfile() {
    return "code for upload file"
 }

 function parseFile(){
//code for parse file
 }

 function saveToDatabase(data){
    return data="code save to database"
 }
 uploadfile();
 let ata = parseFile();
 saveToDatabase();



 //2)Reusability:
 function calate(length,width){
    return length*width
 }

 let area1 = calate(5,6)//here we use calate as reusability function
 let area2 = calate(3,6)//here we use calate as reusability function

 //3)Encapsulation:Hinding the data from user view 
 function mycompundlength(a,b){
    let z = a+b//this is the local variable or we can set, also this variable are used to hide the data, and values nobody can acsess,this is called as encapsulation
    return 2*z
}

var moneyspentcompund = mycompundlength(30,40) * 100;
console.log(moneyspentcompund)//14000, here in function arguments were passed a=30,b=40 and in under the function z = 30+40, and return 2*z, 2*70=140; and after new variable "moneyspentcompund" is 140*100==14000.

//Scope
function calculateTotal(items) {
let subtotal = 0;
for(let item of items){
    subtotal +=item.price;
}
let tax = subtotal * 0.1;
let total = subtotal + tax;
return total;   
}

let myItems = [
    {name:'Widget', price:9.99},
    {name:'Gadget',price:14.99},
    {name:'Doohickey',price:4.99}
]
console.log(calculateTotal(myItems));
// let myTotal = calculateTotal(myItems);
// console.log(myTotal)//32.967

//Additional 
//normal Function
function name(parameter) 
{
  //Statement  
}

//return Statement
function name(a,b) {
    let value = a+b;
    return value;
}
console.log(name(3,4))//7

//Function Exprsseion
var func = function name(params) {
    
}// variable assigned Function is function expression

//Calling Function
console.log(name(5,6))//arguments 5,6
 //2nd exapm
 function saySomething (){
    return ("hello world")
 }
 var a = saySomething()
 console.log(a)//hello world

 //using function expression
 var finalarea = function (width, height) {
    return width * height;
 }

var final = `The Area of Room is ${finalarea(20,30)}`
console.log(final)//600

/*funtion parameter and argument 
Parameter:- are used inside the () when funtion declare.It takes the arguments 
Arguments:- are used to assign data and values for the parameters */

//Funcion Scope
/*Function Scope
A variable defined inside a function cannot be accessed outside it. But a function can access any variable defined as a global variable. When you define a function inside another function, we call that a nested function. This function is the child function of whichever function it is defined in (the parent function). A child function has access to all the variables defined in the parent function or which the parent has access to; vice-versa is not true.*/
var num1 = 2;
function parentFunction (){
    //Global Function
    var num2 = 4;
    num1=8;// we can also reasigned a outside value inside the function
         console.log(`Value of num1 is ${num1} inside the parentfunction`)
         console.log(`value of num2 is ${num2} is inside the parentFunction`)
    console.log(childFunction());
         console.log(`Value of number 3 is not accessbale outside the child function but inside the parent function`)
    function childFunction() { //nested function
        var num3 = 13;
         console.log(`Value of num2 is ${num2} is accesable inside child function`)
         console.log(`value of num3 ${num3} is accesable inside the local scope`)
    }
}

parentFunction()

/*1. Recursive Functions
It is possible for a function to call itself directly or indirectly. A function that calls itself during its execution is a recursive function.
This allows a function to repeat for multiple iterations, minimizing the code. The problem with these functions is that, if not written properly, they can cause infinite loops and other unexpected results.
example of recursion function */
let num = 5;
function calculateFactorial(number) {
    if (number === 0){
        return 1;
    }else{
        return number*calculateFactorial(number-1)// Calling itself
    }
}

var final = calculateFactorial(num);
console.log(final)// 5! = 120