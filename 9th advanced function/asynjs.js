var add = function (a,b,c){
    return a+b+c
}
var x = add(5,7,9);
console.log(x)//This is function expression

/*Arrow Function
==>It is ES5, and ES6 concept introduced
==>It is a shord hand property to declare function, or shortcut to declare function
where you have normal function contain Function  keyword, function name, Pararmenters enclosed with(), a scope represented by {}, statements with or without return keyword */

function add(){
    console.log(1)
}
add()

/*Pre defined consditions:
a.you don't need to use the function keyword anymore during function expression.
b.you don't to use () if and only if you have a single paramenter
c.you don't need to use {} flower bcraces you have a single statement.
d.you don't need to use return keyword if and only if you have a single statement in the function which is using return keyword 
e.The parameter and the scope of statements/single statement will be separeted by => symbol.
d.In new version their is no need to use variable keyword like var,let,const/*/

var add = function (a){
    console.log(1+a)
}
add()
//Function Expression ^
add =  a => console.log(1+a)
//Arrow Function using single parameters ^
add()

//Three parameters use ()braxces

add1 = (a,b,c) => a+b+c
var y = add1(5,7,9)
console.log(y)
//Normal function
var a = function (){
    console.log("hello")
}
a()
//No Parameter use ()
a = () => console.log("hello")

//single parameter 
b = m => m
console.log(b(10))

//Multiple statements
var z = function (){
    console.log("I love India")
    return "India"
}
console.log(z())

//using arrow 
z = () => {
    console.log("I love India")
    return "India"
}
console.log(z())


/*Anonymous Function
==>A function without any name, and ==>it is used in call Back function
==>A callback function is nothing but when you pass a funciton as a argument*/


//Funciton expression
var add = function (a,b){return a+b}
add(3,5)
console.log(add())

//This is anonymous function
var add = (function (a,b){return a+b})(3,5)
console.log(add)

/* Generator Funciton
==>These are function which has the power to stop and start the flow of execution by using the yeild keyword
==>We need them for performing asynchronus requests.
==> generator are denoted by star symbol just after the function keyword*/
function* addd(){
    yield "Hello"
    yield "India"
    yield 10
    yield true
    yield ''
}
var arr = addd()
for (let x of arr){
    console.log(x)
}
//we have create a instance of the generator funciton
//this instance will act as a array and then we can iterate each and every statement one by one
//line by line triggered required
//generator function behave like array so, every yield keyword are item


/*IIFE imediatly invoked function
==>the moment you defined it immediatly invoked */

(function(){
    console.log("hello")
}) ()
//Where it is used 
//==>It is used for when imediatly invoked required and data can't be stored
//==> when we add to cart some product then notification will like similair item another user added


/*Recursion==> the function will call itself again and again untill it receive end result */

//5! = 5+4+3+2+1 
// function myfact(m){
//       m*myfact(m-1)    //5*myfact(4)   //5*4myfact(3)   //5*4*3myfact(2)   //5*4*3*2myfact(1)   //5*4*3*2*1myfact(0) // 5*4*3*2*1==120 
// }
// myfact(5);

//ar^(n-1)  a=5, r=2, => upto 3 digits i.e. n = 3
//20, 10, 


function abc(){
    console.log("I love india")
    var a =5
    var b = 10
    console.log(a+b)
    console.log("I am on planet Earth")
}
abc()
//order of line executing
//131  124  (125)   126   127   (128)  (129)  131


/*Call Stack 
==>It is a queue like data structure.
==>It stores  the flow in which the function executes.
==>This stack will be created at the time of function call.
==>LIFO principle used in call stack
==>FIFO,LIFO,FILO 
*/

/*Hoisting in JS
 variable Hoisting
 functional hoisting*/

console.log(a)
var a = 5;
//Hoisting means you declared variable after you invoke but can't work

abc()
function abc(){
    console.log("India")
}
//Hoisting means you declared function after you invoked

//but it can't work on function expression