//here We learn ==> OOps and ES Classes, 'this' keyowrd, JS prototype and inheritance, extends keyword.
/*what is OOPs ?
  ==>OOP stands for object Oriented Programming, means we create class i.e. object which is defined where we declare real world object day by day user are getting more complex data we need to defined real defined data as a objec*/ 
///What is Instances?
//e.g. A car has pented like contain four door, four wheels, and many other properties that contian to call a car like:Audi,Bmw,Tata
//Object contain properties and methods, where properties are defined as contructor method, and normal other method defined simply(){} like this synatax

//e.g
let person = {
    first_name : "shivam",
    last_name: "Mishra",
//method
 getPersonDetails: function(){
    return `The name of the person is ${person.first_name} ${person.last_name}`
 }
}

console.log(person.first_name);
console.log(person.getPersonDetails());


/*ES6 Classess and instance (object)
==It is introduced by ES6 version (2015),where it is much better than normal object
*/

//Example- Declaring class
class ClassName{
    constructor(parameter1, paremeter2){
        //here we defined the properties
        this.parameter1 = parameter1,
        this.paremeter2 = paremeter2
    }
    //This is method function
    method1(){
        return `${this.parameter1} is the method ${this.paremeter2}`
    }
    method2(){
        return `${this.paremeter2} is the ${this.parameter1}`
    }
}
 
//Declaring a exampl
class Person {
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    greet(){
        return  `hello, I am ${this.name} , and my age was ${this.age}`
    }
}

//Now we create copy, instance of Person class
let person1 = new Person("Shivam", 23);
let person2 = new Person("sani", 17);
console.log(person1)
console.log(person2)

//Calling the method to a class
console.log(person1.greet())
console.log(person1.greet())

//////////////this keyword
//1. Global context
//console.log(this === window); //output true only in browser run

//2.Function Context
//1.Example
function printThis() {
    console.log(this);
  }
  
  printThis(); // Output: window (in a browser)

//2.Example
const obj = {
    prop: "hello' Shiva",
    method: function(){
        console.log(this.prop)
    }
}
obj.method()

//Method Invocation
const obj1 = {
    prop: "hello' Shiva",
    method: function(){
        console.log(this.prop)
    }
}
obj1.method()

//Contructor Invocation
function Person122(name){
    this.name = name;
}

const person12 = new Person122("Shivam")

//Arrow Function:
  const obj12 = {
    prop: "hello' kinjal",
    method: function (){
        const innerfunc = () => {
            console.log(this.prop)
        }
        innerfunc()
    }
  }

obj12.method()

//in call,apply,bind method first we write the parent function and then we declare method, and then in circle braces we call the (that object name, argument1, arguments 2)
//Bind()
const person32 = {
    first_name: "shivam",
    last_name:"Mishra",
    getFullName: function (){
        return (this.first_name + " " + this.last_name);
    }
};

const greet = function (greetMessage){
    console.log(this.getFullName() +" " + greetMessage);
}

var final = greet.bind(person32, "heelo");
final()

//in bind you can bind object and function by creating new instances

//Call() & apply()
function greet233(message){
    console.log(" " + this.name + message)
}
const Person33 = {name:"shivam"}

greet233.call(Person33,"hello")

//In call we pass argument in array


//apply()
const obj123 = {
    name: "shib",
    age:23,
    message:" unavailable"
}

const grreet = function (message1, message2){
    console.log(message1 + message2 + this.name + " "+ this.age + this.message)
}
//One condition or differences betn call and apply, you can be pass parameter start to the the braces in apply and arguments were pass under the array[]{inside the curly braces}

grreet.apply(obj123, [" Hii, thanks for inviting me ", "Thanks once again "])


//js Prototype==> prototype gives you power to add the method, and properties from outside the class.
//why we need Prototype?
//To accomodate the constant change in user behaviour, new data arrises so, you can accomodate the user experience. 
 class Bottle333 {
    constructor (a,b){
        this.color = a,
        this.capacity = b
    }
    filling(){
        console.log("bottle is filling " + " and the color of the bottle is " + this.color)
    }
    unfilling(){
        console.log("bottle is unfilling")
    }
 }
var a = new Bottle333("blue", "1 ltr");
Bottle333.prototype.shape = "Triangular";
//through prototype if we need to add the propeties, method then we create a method from outside the class, not using bind or any function.
console.log(a.shape)

//Prototype is the keyword which alows to add the properties and methods to objects, which can be inherited by other objects.
//1.prototype chain
//2Prtotype Property
function Personn (name){
     this.name = name;
}
//here i can add the the function from the outside function 
Personn.prototype.grett = function (){
    return (`Hello my name is ${this.name}`)
}

const Personnn = new Personn("shivam")
console.log(Personnn.grett());

//3.Inheritance 

function Animal(){};

Animal.prototype.eat = function (){
    console.log("Animal is eating")
}
//here we create a method i.e. eat and we can inherit wtih it's parent function

function Dog (){};
Dog.prototype = Object.create(Animal.prototype)
//var dog = new Dog();
//dog.eat()
Dog.prototype.bark = function (){
    console.log("animal is barking")
}
const dog = new Dog()//here we create a new instanc of child before print

dog.eat()
dog.bark();

//eat, bark method name and breed are properties

class Animal2 {
    constructor(name){
        this.name = name
    }

    eat(){
        console.log(`${this.name} is eating`)
    }
} 

class Dog2 extends Animal2 {
    constructor(name,breed){
        super(name),
        this.breed = breed
    }
   bark(){
    console.log(`${this.name} is barking.`)
   }
}

const dog2 = new Dog2("Golu","Labrador")

dog2.bark()
dog2.eat()

//Extras

class Job {
    constructor(role, salary, applicationlink, isRemote){
        this.role = role,
        this.salary = salary,
        this.applicationlink = applicationlink,
        this.isRemote = isRemote
    }
    //this are the properties 
}
// now we create a new intances and add the method

let job1 = new Job(
    "software Engineer", 200000,
    "meta.com/careers/SWE-role/apply",
    true
)//under circle braces are parameters

let job2 = new Job(
    "software Engineer", 170000,
    "amazon.com/careers/SWE-role/apply",
    false
)//under circle braces are parameters

console.log(job1);
console.log(job2);

let applyThrough = "applyThroughIndeed";

class Job2 {
    constructor(role, salary, applicationlink, isRemote){
        this.role = role,
        this.salary = salary,
        this.applicationlink = applicationlink,
        this.isRemote = isRemote
    }
    //this are the properties 
    [applyThrough](){
        if(applyThrough ==="applyThroughIndeed"){
            return 'Apply Through indeed'
        }elseif (applyThrough ==="applythroughlinkedin")
    }
}

//
class Client {
    constructor(name,age){
        this._name = name,
        this.age = age
    }
    get name() {
        if (usertype = "Lawyer"){
            return this._name;
        } else {
            return "you are unauthorized to view"
        }
    }
}

let usertype = "law"
const per =  new Client("Shivam Mishra", 23)
console.log(per.name)


//here we can create a OOPs  Rectangle 
class rectangle {
    constructor(width, height){
        this.width = width,
        this.height = height
    }
    getArea(){
        return `${this.width * this.height}`
    }
    getperimeter(){
        return `${(this.width*2)+(this.height*2) }`
    }
}

const Area = new rectangle(5, 10);
console.log(Area.getArea())
console.log(Area.getperimeter())


//OOPs circle 
class Circle {
    constructor(radius){
        this.radius = radius
    }
    getArea(){
        console.log(`${3.14 * (this.radius*2)}`)
    }
    getCircumference(){
        return 2 * Math.PI * this.radius;
    }
}

const circle = new Circle(5)
circle.getArea()
console.log(circle.getCircumference())


const pt1 = {};
const ob1 = Object.create(pt1);
console.log(Object.getPrototypeOf(ob1) === pt1);
function F() {
    // Constructor function definition
  }
  var o = new F();
  console.log(o.constructor === F);

  var x = "hello";
if (x) {
  console.log("Hello");
} else {
  console.log("World");
}

let str = 'hello world';
let arr = str.split('');
console.log(arr);

var x = 0;
function foo() {
x++;
if (x > 3) {
clearTimeout(timerId);
}
}
var timerId = setTimeout(function() {
console.log('Hello');
}, 1000);
setInterval(foo, 1000);

let perso = {
    name: "John",
    age: 30
    };
    let clone = Object.assign({}, perso);
    clone.age = 25;
    console.log(perso.age);

    let yx = "Hello";
if (typeof yx === "string") {
  console.log("yx is a string");
} else if (typeof yx === "number") {
  console.log("yx is a number");
} else {
  console.log("yx is not a string or a number");
}

let b = 10;
function myFunc(y){
y = 12;
}
console.log(myFunc(b));

let person123 = {name: "John", age: 30};
person.salary = 5000;
delete person.salary;
console.log(person.hasOwnProperty("salary"));

function multiplyByTwo(a) {
    return a * 2;
    }
    var result = multiplyByTwo();
    console.log(result);

    let pers = {
        name: "John",
        age: 30,
        greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
        };
        pers.greet.call({name: "Jane", age: 25});



        ////
        const objo = {
            a: 1,
            b: 2
            };
            const arru = [];
            console.log(arru[0] = { ...objo });

            ////
            function myFunc(a, b) {
                console.log(this, a, b);
                }
                var myObject = {
                myMethod: myFunc
                };
                myObject.myMethod.call({x: 1}, 1, 2);
/////
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
    continue;
    }
    console.log(i);
    }


/////
var x = 0;
function foo() {
console.log(x);
}
var timerId = setInterval(function() {
x++;
foo();
if (x >= 5) {
clearInterval(timerId);
}
}, 1000);

//////////
// class Person {
// name: string;
// DOB: string;
// }
// console.log(typeof Person);


////
var x = 5;
if (x === "5") {
console.log("Hello");
} else {
console.log("World");
}

////
var x = 0;
setTimeout(function() {
 console.log(x);
}, 0);
x++;
setTimeout(function() {
 console.log(x);
}, 0);


////
var ai = [1, 2, 3, 4, 5];
for(var i=0; i < ai.length; i++) {
  if(i === 2){
  break;
  }
  console.log(ai[i]);
}


//////
var x = 0;
function foo() {
x++;
console.log(x);
}
var timerId = setInterval(foo, 1000);
setTimeout(function() {
clearInterval(timerId);
}, 5000);