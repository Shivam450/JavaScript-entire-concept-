/*Lesson - Functional Programming
    What is Functional Programming?
    ==> you writing a program using functions and expressions in such a way that the state becomes immutable.

    why ?
    ==> This becomes very easy to maintain security.
    ==>the Bugs or error will be less or more.
    ==> Code become very clean and neat and hence easy to understand.

    Characteristics of Functional Programming
       First class function ?
       ==> Function as treated as first class Object.
       ==> it means you can pass function as values !!
       ==> You can use the value directly or pass the value to other function 
       ==> One function can be used as a argument to another function, basically a function expression.
       Pure Function
       Immutable Data
       Statelessness
       Lazy Evaluation
       No side Effects*/
var square = function (m) //m==x
{
   return m*m
}
function a(x, somefunction)
{
  return somefunction(x)
}
var z = a(10, square);
//here i am passing function as a argument in the parameter of the function a 
console.log(z);
// 31 29 25 26 27 21 22 23 24 27 31 
//Pure Function==> No matter how many times you execute a function with same input, all those times you'll get the smae output without any cahnges or side effect
function add(a,b)
{
   console.log(a+b)
}
add(3,4)
add(3,4)
add(3,4)
//Impure function ==> here vice versa of impure function output will change wheather the input same
/*Immutable Data ==> for values if you use const, It is immutable.
  Array, set, Map, String, Number, Boolean, etc...
==>Strings are by default immmutable. */
const an = "shivam";
var ab = an.split("");
ab[1] = "n"
var jn = ab.join('')
console.log(an)
console.log(jn)
//Statelessness ==> If you not store any data like using Var, let, const is used to store a data. E.G.Accepting cookies is state and not accespting is statelessness.

//Lazy Evaluation ==> when, needed it will execute and when not required it will not execute. 
//No side Effects==> It will doesn't matter how many it triggered it will provide output. 
   /* 
   Higher Order Function 
   ==> In two scenerio you can call a funcion as higher order function.
     a.When a Function accept some input, it generate an output which inturn will be used as a input for another function.
     b.When function accept input from another function, it will generate some output */
    //E.G. of  scenerio a
     function a(x)  //This is the higher order function
    { 
      return x * 5;
    }   
    function b(j, k){
      console.log(k(j))
    }
    b(5,a)// here we call a higher order function a the parameter in b function

    //E.G. Scenerio b 
     const av = function ()
     {
      return 5;
     };

     function bv(x,y)  // function b is receive function a as a input and b is called higher order function
     {
      console.log(x*y);
     }

     bv(5,av)
   /* Function Composition - (Function Chaining)
   ==> Input - A - B - C - D - Output.*/
   var abc = function (){
      return 5;
   }
   var bod = function (z){
      return 5 + abc;
   }

   var cod = function (x,y){
      return 5 + x(y)
   } 
   cod(bod,abc)
         /*Appraches are Present in Function Composition
           a.Literal/ Normal/Traditional apprach.
           b.compose Function.
           c.Pipe Function.

    Declarative Code Vs Imperative Code (Difference) list any 5 points each
     Imperative Programming:
        1)Focuses on Steps: Imperative programming describes the sequence of steps or actions needed to achieve a goal.
        2)Explicit Control Flow: It involves specifying how tasks should be performed in detail, often involving loops, conditionals, and mutable state.
        3)Algorithmic Approach: You explicitly define the algorithm or logic to solve a problem.
        4)Mutable State: Often uses mutable variables that change over time as the program executes.
        5)Example: Traditional procedural languages like C, Pascal, and early versions of Fortran are primarily imperative.
    Declarative Programming:
       1)Focuses on Outcomes: Declarative programming emphasizes the desired result or outcome without specifying the detailed steps to achieve it.
       2)Abstracts Control Flow: It abstracts away the control flow details, allowing the programmer to focus more on the problem domain rather than implementation specifics.
       3)High-Level Description: You describe what should be done rather than how it should be done.
       4)Immutable Data: Encourages immutable data structures and avoids side effects.
       5)Example: Functional programming languages like Haskell, Lisp, and modern JavaScript frameworks like React.js often employ declarative     programming principles.
       
    Advantages of Functional Programming.
    ==> Secure
    ==> clean code
    ==> Less memory Usage
    ==> Less time for execution
    ==> System becomes easily scalable*/
