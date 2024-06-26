/*23/02/2024
Lesson-Functional Programming
What is functional Programming?
 ==> You writing the program using function and expression in such a way that state become immutable.

 why we have ?
 ==>This becomes very easy to maintain security.
 ==>The error or bugs will be less or none.
 ==>Code become very clean. hence easy to understand.

 Characteristics of functional programming?
  First class funciton
  ==>One function can be used as a argument to another function.
  ==>Function as treated as first class object
  ==>*/
 var square = function square(m){
    return m*m
  }
  function a(x,somefunction)
  {
    return somefunction(x)
  }
  var z = a(10,square)// here we pass function in argument a(x=10, square=somefuntion(x=10))
  console.log(z)


  /*pure function
  ==>no, matter hoe many times exute a function same input i get same output*/
  function add(a,b) {
    console.log(a+b)
  }
  add(3+4)
  //Impure funtion=> vice versa of pure function , output will change many times
let i=0;
function add(){
    i = i + 1
}
add()
console.log()
  /*Immutable Data-Not letting anybody to change the data.
  ==> for values you use const, It is immutable
    Array, set,map,String, Number, Boolean, etc
  ==>Strings are by deafult immutable


  state- It is a storage*/
  function ab(){
    let x = 10
    return x
  }
  ab()
  /*Statelessness
  ==>when there is not storage of data invovled 
  */
 function a(){
    return 5
 }
 a()// it will not store any data
  /*Lazy Evaluation
  ==>The funciotn is executed only if neccessary and required, means you made function and not execute
  
  No Side Effects
  ==> No considerartion is required if you are calling the same function 'n' times.

Higher Order Function
==>In 2 c=scenerioi you can call a funciton as Higher order function.
  a.it accept a funciton, it generates an output ehich inturn will be used as a input for another function.
  b.When a funcion accepts input 
*/
function a(x) //Higher order function
{
    return x*5
}
function b(j,k){
    console.log(k(j))   //j your x , k your function a
}
b(5,a)
/*Function Composition (Function Chaining)
==>Function a output is function b input and similiar*/
var a = function () {
    return 5
}
var b = function (a){
    return 5 + a;
}

/* Appraches are present in Funcion Composition
    a.Literal Apprach / Normal Approach / Traditional Approach
    b.compose Function
    c.Pipe function*/
