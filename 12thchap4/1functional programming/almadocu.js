/*We mainly focus on the: Functional programming, Higher Order Function, Declarative function.
With Functional Programming , you can effortlessly manage and manipulate user data as it flow through various functions, ensuring Clean code.
Understand pure functions, immutability, higher-order functions, and functional programming libraries.

What is Functional Programming?
==> It is based on the mathematical concept of a function, where a function takes input values and produces output values without side effects.

what is first class function?
==> They can be passed around as arguments to other functions, returned as values from functions, and stored in Data Structures.

Functional programming avoids mutable state and relies immutable data i.e. immutable means data can't change.
==> functional programming are follows pure function that don't modify the state of the program.

Functional Programming ==> follows
1)First calss functions - The function are passed as arguments in other function.
==> First class function are treated like any other value b'cuz  they are first class Objects in JS
==> First class function are write as variable*/
const add = function(a,b){
    return a + b;
}

function OperatorOnNumbers(a,b,operation){
    return operation(a,b)
}
const result = OperatorOnNumbers(2,3,add)
console.log(result)
//2)Pure function - No, matter how many times you execute a function it produces same output. 
function add2(a,b){
    return a+b;
}
//Under the function add it will give output as depend on arguments, if argu chnge then output change 
console.log(add2(5,6))
//2.1=Impure Function
let counter = 0;
function increment(){
    counter++;
    return counter;
}
console.log(increment())
/*3)Immutable data- The data can't be changed or modify, achieved by using const variable, strings.
4)Statelessness - The data was not store in memory, means they don't assigned var, let, const.
5)Lazy Evaluation ==> when, needed it will execute and when not required it will not execute. 
6)No side Effects==> It will doesn't matter how many it triggered it will provide output. */

//Higher Order Function==> In JS, A higher-order function ischaracterized by it's ability to take one or more functions as arguments and return another functions as it's output.
function double(numbers) {
    return numbers.map(function(n) {
      return n * 2;
    });
  }
  //here we say that in function double there one function we passed i.e. map function, filter, 

  function add443 (a){
    return function(b){
       return a + b;
    };
  }

//Function Composition ==> The output of the function will passed input as second function and it's follow the chaining
//Traditional approach

const double2 = x => x*2//function 1st
const square = x => x*x;//function 2nd 
const cube = x => x*x*x;
//Traditional Approach
var output1 = double2(2);//arguments passed for 1st function
var output2 = square(output1);//arguments passed from taken 1st function for second function.
var output3 = cube(output2)
console.log(output3)

var output_final = cube(double2(2));
var output2_final = square(double2(2))
console.log(output_final)//64 cube of 2
console.log(output2_final)//16 is sqaure of 2

//Immmutablity==> Programmers use the term "immutability" to describe an object's unchangeable state after it has been created.

//once Promitive data types like integers, texts, booleans are immutable
let str = 'hello';
str[0] = "S";
console.log(str);


//How everver Object and array are mutable
const Person = {
    name: "shivam",
    age:30
};
Person.age = 23;
console.log(Person.age);

///Another example
const person = {
    name: "sani",
    age: 17
}

const updatedPerson = {
    ...person,
    age:18
}
//here we pass a object person In another object i.e. updated Person.
console.log(updatedPerson)

///Declarative and Imperative function.


//Declarative approach
// function double(numbers){
//     return numbers.map(n => n * 2);
// }
// console.log(double(2))

//Imperative approach
function double45(number){
    const result = [];
    for (let i =0; i< number.length; i++){
        result.push(number[i] * 2)
    }
    return result;
}

const doble = double45([1,2,3,4])
console.log(doble)


//Extras 
//Recursion = It is a feature used in creating a function that keeps calling itself but with a smaller input every consecutive time until the code’s desired result from the start is achieved.

//Example 1
function factorial(num){
    if (num== 0){
        return 1;
    } 
    return num * factorial(num-1)// her num==0 it is 5 so, 5*(5-1)=20, 
}
console.log(factorial(5))

//Example 2 
//  function recurse(x){
//     if (x > 0){
//         console.log(x)
//     }
//         return recurse(x-1)
//  }
//  //recurse(10)

const getMaxCallStackSize = (i) => {
    try {
        return getMaxCallStackSize (++i)
    } catch{
        return i
    }
}
console.log(getMaxCallStackSize(0))
//In call stack will be have max stack size in every browser and browser environment, till that size it will execute and after that it exceed.
//This funciton will add the function in call stack and call stack will full and then it catch and execute

//3rd example
function recursion (n){
    if (n == 0){
        return 1;
    }
    return n * recursion(n-1);
}
console.log(recursion(10))

//Fibonacci 
const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n-1) + fibonacci(n-2));

console.log(fibonacci(10));

//Problem 
//  var strings = "HELLO";
// function tolowercase(strings){
//     return strings.tolowercase();
// }
// console.log(tolowercase(strings))
const add232 = x => y => x + y;
const add232Five = add232(5);
console.log(add232Five(2));

//
function dog(string) {
    console.log(string);
  }
  dog("Bark");
  var animal = dog;
  animal("meow");
  animal.myProperty = "black";
  console.log(animal.myProperty);

  //
  const numbers = [1, 2, 3, 4, 5];

const result89 = numbers.filter(num => num % 2 === 0)
  .map(num => num * 2)
  .reduce((acc, num) => acc + num, 0);

console.log(result89);

///
const person6 = {
    name: 'Lydia'
  };
  
  function sayHi(age) {
    return `${this.name} is ${age}`;
  }
  console.log(sayHi.call(person6, 21));
  console.log(sayHi.bind(person6, 21));

  ///
  function sayHi() {
    return (() => 0)();
  }
  console.log(typeof sayHi())


  ////////
  var obj1 = {"name": "John", "age": 25, "city": "New York"}
// function keys(obj1){
//    let result = [];
//    let fnl = JSON.parse(obj1)
//    let final = Object.keys(fnl)
//    final.push(result)
//    return result 
// }

// var sme = keys(obj1);
// let fnl = JSON.parse(obj1)
// console.log(fnl)


//Leap year Challenge
let value = 1700;

function isLeapYear(value){
    if(value % 4===0){
        if(value % 100 === 0)
        {
            if(value % 400 == 0){
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
    }else {
        return false;
    }
}

var fina4 = isLeapYear(value)
console.log(fina4)

var s = " fly me to the moon "

function lastwordFinder(s){
    if(1 <= s.length <=104){
    let trm = s.trim().split(" ").pop()
    let value = trm.length
    return value
    }
}

console.log(lastwordFinder(s))