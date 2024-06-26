/*Lesson- Function in JS Advanced
     Different types of Functions in JS.
        1.Function Declaration
        ==>Literal Approach/Normal Function/ General syntax of function*/
        function add(a,b,c){
            return a+b+c
        }
        var x = add(3,4,5)
        console.log(x)
        /*2.function Expression
        ==>function is expressing through a variable, ehn you assigned  FUNCTION TO VARIABLE.
        ==>Variable name acts as the name of the function*/
        var add = function (a,b,c){
            return a+b+c;
        }
        //var f = add(3,4,5)
        console.log(add(3,4,5))
        /*3.Arrow Function
        ==>It was ES5,ES6 concept
        ==>It is short hand property to declare a function
        ==>pre-defined 
          a. You don't need the function keyword.
          b. you don't nedd to use () round braces if only you have single paramter.
          c. you have to use () for no parameter, or multiple parameter
          d. If you have a single statement you don't need to use {} flower braces.
          e. you don't need to use a return keyowrd if and only if you have single statement.
          f. The parameter and the scope is separated by arrow symbol
          g. also removed the variable keyword*/
          //Normal function
          var add = function(a)
          {
              console.log(1+a)
          }
          add()
              //now arrow function
          add = a => console.log(1+a)
          add(12) //call the function
          
          //Example of multiple parameter
          multiply = (a,b,c) => a*b*c
          var multi = multiply(4,5,6)
          console.log(multi)

          //Example 
          var a = function(){
            console.log("hello")
          }
          //rewrite this in arrow function with no parameters
          a = () => console.log("hello")
          console.log(a)

          //single parameter 
          var b = function (m){
            return m
          }
          //rewrite in arrow function
          b = m => m
          console.log(b(10))

          var z = function (){
            console.log("I love India");
            return "India";
          }
          console.log(z())

          //Rewrite in arrow function
          z = () => {
            console.log("I love India");
            return "India";
          }
          console.log(z())
        /*4.Anonymous Function
        ==>A function without any name
        ==>It is used in callback function
        ==>A callback function is nothing but when you pass a function as a argument to a function.*/
        var add = function (a,b){
            return a+b;
        }
        add()//this is normal function
        //Now anonymous
        var add = (function(a,b){return a+b;})(3,4)   //by adding () braces to entire function it become anonymous function
        console.log(add)//here add is just a variable

        //CallBack
        var y = function(){
          return "world"
        }
        function add1(a){
          console.log("India" + a);
        }
        add1(y);

        /*5.generator function
        ==>These are function which has the power of stop and start the flow of execution by yield keyword.
        ==>why we use?:-we use them for performing asynchronus request.
        ==> It will provide line by line exection by our control, and wait for others
        ==>generator function are denoted by star (*) symbol*/

        //it's behaviour similair to class
        function* add3(){
          yield ("hello");
          yield "India";
          yield true;
          yield ''
        }
        //We have to create a instance of the generator function
        //this instance behav like array so, we use loop concept
        
        var a = add3()//this is instance of generator function
        for (let x of a){
          console.log(x)
        }

        /*6.IIFE - immediately    invoked function Expression
        ==>The moment you create a function automatically it is execute
        ==>There is no need to store the data*/
        (function (){
          console.log("hello")
        }) () //hello

        /*7.Recursion ==>function-same logic repeat again and again.
        ==>function will call itself again and again until it acheive end result*/
        var num = 5;
        function myfactorial(number){
          if (number == 0){
            return 1;
          }else{
            return number * myfactorial(number-1) 
          }//here number = 5 and myfactorial(number -1=4) 5*4 1st time, 2nd time 4*3, 3rd 3*2, 4th time 2*1
        }
        console.log(myfactorial(num))

        //ar^(n-1) n=limit 
        //Geometric progession example
        var a=5;
        var r=2;
        function mygeo(n){
          if(n == 0) return 1;
          var ab = (a*r**(n-1))
          console.log(ab);
          return ab*mygeo(n-1)
        }
        var a = mygeo(3)
        console.log(a)

    /*Call Stack
    ==> It is que like data structure.
    ==> It store the flow in which function execute
    ==>This stack will be created at the function call.
    ==>It follows LIFO
    notes:-FIFO,LIFO,FILO*/
    function abc(){
      console.log("I love India")
      var a = 5
      var b = 5
      console.log(a+b);
      console.log("I am on PLanet Earth")
    }

    abc()
    //flow of Line number with execution
    //155 147  148(It is executed), 149 & 150 =stored a value, 151(executed), 152(executed), 153(function end), 155  (here 155 will first and it also last so,LIFO) 
    
    //call stack behaviour
    //variable will be store and uses when console is print
    
    /*Hoisting in JS ==>Calling the function even before declaring it*/
        //variable Hoisting
        console.log(a)//undefined
        var a =5;
        //hoisting is not used in variable

        //Function Hoisting:-Function hoisting will be work correctly
        abc()
        function abc(){
          console.log("India")

        }
        //Function Express Hoisting
        // abcd()//It does'nt work in hoisting
        // var abcd = function (){
        //   console.log("hello India")
        // }

       let num2 = [5, 2, 8, 1, 9]
       console.log(num2.sort())
       console.log(num2[1])

       nums = [5, 2, 3, 2, 4, 4, 5]
       var a = new Set(nums)
       var b = Array.from(a)
       console.log(b)

       //Closure 
       //1st Exm
       var sum = function (a){
        console.log("This is value "+ a);
        var c = 5;
        return function (b){
          return a+c+b;
        }
       }
       var store = sum(2);
       console.log(store(6));
       //here we store parent function and then call child function

       //2nd Example
       var sum = function (a,b,c,d){
        
        return{ getSumTwo:function (){
          return a+b;
        },
        getSumThree:function (){
          return a+b+c;
        },
        getSumFour:function (){
         return a+b+c+d;
        }
      }
       }
var store = sum(13,14,15,16);
console.log(store.getSumTwo())
console.log(store.getSumThree())
console.log(store.getSumFour())//58


//closure defination:= A child function enclosed with parent function and have refrecence to it's parent function, and parent function is lexical environment of child function.
// for (let id = 0; id < 3; id++) {
//   // The use of 'let' creates a block-scoped variable, fixing the closure issue.
//   // Now each setTimeout callback captures the correct value of 'id'.
//   setTimeout(function () {
//     console.log('seconds: ' + id);
//   }, id * 1000);
// }
   
// for (var id = 0; id < 3; id++) {
//   // The setTimeout function uses a callback, and by the time the callback is executed,
//   // the loop has already completed, so 'id' will always be 3 in all setTimeout callbacks.
//   setTimeout(function () {
//     console.log('seconds: ' + id);
//   }, id * 1000);
// }
   

var string2Num = parseInt("123xyz");
console.log(string2Num);

function TnS_outer() {
  var a = 10;

  function TnS_inner() {
    var b = 10;
    return a + b;
  }
  return TnS_inner();
}
console.log(TnS_outer());

//
function TnS_add(a, b) {
  return a + b;
}

function TnS_spreadadd(...nums) {
  var count = 0;
  for (let num of nums) {
    count += num;
  }
  return count;
}
console.log(TnS_add(10, 20, 40), TnS_spreadadd(10, 20, 40));