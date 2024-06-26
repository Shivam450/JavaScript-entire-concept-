/*JSON, short for JavaScript Object Notation, is a lightweight format for exchanging data that is both human-readable and machine-readable*/
/*Focus: JavaScript Objects, Methods, Set, Map, and JSON
Prerequisites: VS Code IDE with Node.js installed, JavaScript Basics*/
/*JSON allowed him to easily serialize his JavaScript objects into a string that could be transmitted over the network, and then deserialize them back into objects on the other end.*/

/* js Objects
It is a objects data type that can be used to store collection of key:value pair or more complex entities. where, key also called properties of an objects*/
//e.g.///
let person = {
    name:"SHIVAM",// here nmae and age is a key
    age:19// "shivam" and 19 it's value
}
// Object
const persom = {
    firstname:"John",
    lastname:"Doe",
    age:30
};

//Object declaration
//1st method object literal method (most commom method)
const person1 = {
    firstname:"John",
    lastname:"Doe",
    age:30
};

console.log(person1.firstname);
console.log(person.age);// here we get specific value of the object
//2nd Method Constructor method 
let person2 = new Object();// here we assigned perspon2 is a object

//now we assign it's value
person2.firstname = "Sani";
person2.lastname = "mishra";
person2.age = 21;

console.log(person2.firstname)// Sani
console.log(person2.age)//21

//How to access the property of an object
// two method 1]dot.  2]square[]
let person3 = {
    name:"ronak",
    age:34,
    occupation:"Developoer"
};

console.log(person.name)//dot notation
console.log(person['age'])// sqare braces notation

//JS Nested objects
let person4 = {name:{first_name:"shivam",last_name:"Mishra"},
               age:{age_in_years:18, monts:3, days:13},
               address:{state:"Maharashtra",district:"Palghar",Area:"Tulinj Road"},
}
 
// How to access the nested object value
console.log(person4.name.last_name);//Mishra
console.log(person4['address']['district'])//Palghar

//How to modify existing property
person4.address.state = 'UttarPradesh' // using dot notation
person4['address']['district'] ='Mumbai'//using braces

//How to add a new property
person4.address.country = 'India';
person4['address']['phone'] = 9345637918;

//How to delete any property of an objct
delete person4.age;
delete person4['address']['Area'];

console.log(person4)/*{
    name: { first_name: 'shivam', last_name: 'Mishra' },
    address: {
      state: 'UttarPradesh',
      district: 'Mumbai',
      country: 'India',
      phone: 9345637918
    }
  }after all modifation*/

//JavaScript Object Methods ///
//basically objects method are pre-defined function that attached with object

//1) objects.keys()
const myobj = {name:"shiva", age:17};
const keys = Object.keys(myobj)//
console.log(keys)// here only keys of an objects priint

//2) Object.values()
const myobj2 = {name:"kartik", age:20};
const values = Object.values(myobj2);
console.log(values)// this can access only the values

//3) Entries
const entries = Object.entries(myobj2);
console.log(entries);//This method returns an array of arrays, where each sub-array contains a key-value pair of the object.
console.log(Object.entries(myobj2))// this will also correct way

//4)Objects.assign() concat the objects
const targetobj = {name:"dravid"};
const sourceobj = {age:44};

Object.assign(targetobj, sourceobj)
console.log(targetobj)// concat the two object but wrte the the first value only

//5th object.freeze()
const myobj3 = {name:"kartik", age:20}
Object.freeze(myobj3)
myobj3.age = 44;
console.log(myobj3)//{ name: 'kartik', age: 20 } here value can't be changed when freeze apply
//Custom method: An object can contain a function as one of its properties. These functions are called methods when they are attached to an object.

const car = {
    make:"Toyota",
    model:"corolla",
    year:2022,
    startEngine:function(){
        console.log("Engine started")
    },
    greet: function() {
      console.log(`Hello, my name is ${this.model} and I am ${this.year} years old.`)  
    }
}
car.startEngine();// here we call the function whose are method, which we are attached in objects

//Accessing the Object property
console.log(car.model);//corolla

//Accessing the method
car.greet();//thank for inviting

// and when we use 
console.log(car.greet)// output full function


//How to Add object and property by after you assigning
let student = {}

//Adding the property
student.name ="Shivam"

//Adding the object
student.greet = function(){
    console.log('hello');
}

//access a method
student.greet()

// using "this" keyword, and this keyword will not work outside person5
let person5 = {
    name:"Shivam",
    age:19,
    sayHello: function(){
        console.log("hello, my name is "+this.name+" and my age was "+this.age)
    }
}
person5.sayHello()//hello, my name is Shivam and my age was 19

//JS Sets===> it can eliminate the duplicate value and print only once if duplicate value was there
//Three approach to decalre set
//1st approach constructor approach for using set()
const mySet = new Set();// 
//adding and removing
mySet.add('apple');
mySet.add('Protien')
mySet.add('apple')
mySet.add("banana")
mySet.delete("Protien")
console.log(mySet)//Set(2) { 'apple', 'banana' }
//2nd approach intialize the value 
const FruitsArray = ['apple','banana','orange'];
const fruitset = new Set(FruitsArray)
//Checking if element in the set output either true or false
console.log(fruitset.has('orange'));

//3rd approach using literal approach(Available from ECMAScript 6) 

const mySet3 = new Set(['a','b','c','d'])
//checking whether size of set 
console.log(mySet3.size);//4


//Set Operations

//1st add or remove
const myset4 = new Set();// 
//adding and removing
myset4.add('apple');
myset4.add('Protien')
myset4.add('apple')
myset4.add("banana")
myset4.delete("Protien")
console.log(myset4)//Set(2) { 'apple', 'banana' }

//2nd check whether elemnt present or not using 'has' keyword
const fruitsarr = ['apple','banana','orange'];
const fruitset2 = new Set(fruitsarr)
//Checking if element in the set output either true or false
console.log(fruitset2.has('orange'));

//3rd size of set
const mySet4 = new Set(['a','b','c','d'])
//checking whether size of set 
console.log(mySet4.size);//4

//4 iterating
const myset5 = new Set(["apple","banana","orange"]);
//using forEach
myset5.forEach((value)=>{
    console.log(value)
})

//using for...of loop
for(let fruit of myset5){
    console.log(fruit)
}

//5. converting Set to array:
const myset6 = new Set(['apple','banana','grapes']);
const fruitsArray = Array.from(myset6)
console.log(fruitsArray)


//////////////////////////Maps////////////////
// how to create map, Map can be created using constructor method
//In Map you can used key value pair as elemnts
//JavaScript Maps allow any data type to be used as keys, including arrays, objects, and even functions.
const myMAp = new Map();

//2nd Adding and removing entries
myMAp.set('name','John'); 
myMAp.set('age',19);
console.log(myMAp)
myMAp.delete('age');// this delete age
console.log(myMAp);

myMAp.clear();//this can clear entire data inside myMap
console.log(myMAp);

//getting size of map and literal approach

const mymap = new Map([['name','john'],['age',19]])

console.log(mymap.size);

//4. checking if key was present or not
 console.log(mymap.has('name'))// true
 console.log(mymap.has('gender'))// false

 //5.getting the value of key
console.log(mymap.get('name'))// "john"
console.log(mymap.get('age'))//19

//6.iterating through a Map, means apply loop getting key value pairs

for (let [key,value] of mymap){
    console.log(`${key}:${value}`)
}//name:john
///age:19

//7.Converting Map to Array:
const entriesmap = Array.from(mymap);
console.log(entriesmap)

///JSON//
let person7 = {name:{first_name:"shivam",last_name:"Mishra"},
               age:{age_in_years:18, monts:3, days:13},
               address:{state:"Maharashtra",district:"Palghar",Area:"Tulinj Road"},
}

const strings = JSON.stringify(person7)
console.log(strings)
/*{"name":{"first_name":"shivam","last_name":"Mishra"},"age":{"age_in_years":18,"monts":3,"days":13},"address":{"state":"Maharashtra","district":"Palghar","Area":"Tulinj Road"}}*/

const arrays = JSON.parse(strings)
console.log(arrays)
/*{
    name: { first_name: 'shivam', last_name: 'Mishra' },
    age: { age_in_years: 18, monts: 3, days: 13 },
    address: { state: 'Maharashtra', district: 'Palghar', Area: 'Tulinj Road' }
  }*/

  var materials = ['Table', 'Chair', 'Boxes', 'Press'];
  console.log(materials.map(material => material.length));

  const object1 = {};
a = Symbol('a');
b = Symbol.for('b');
object1[a] = 'harry';
object1[b] = 'derry';
const objectSymbols = Object.getOwnPropertySymbols(object1);
console.log(objectSymbols.length);

const object12 = {
  property1: 20
};
const object22 = {
  property1: 20
};
console.log(Object.is(object12, object22));

let am = { "name": "John", "age": 30 }

let bn = { "isStudent": true, "age": 25 }

Object.assign(am,bn)
console.log(am)

/////////////////////////Enhance Your Knowledge///////////////////////////////////
/*Serializing Objects in JSON
==>it is the process where object state converted to string which it can later restored */
/*ECMAScript 5 provide native function to JSON.stringify() and JSON.parse() to serailize and restore JS objects. */
//e.g.
let o = {x:1, y:{z:[false,null,""]}};//here two elements 1st x:1, and y:{z:[]} in which z is the the nested object of y and value of z are in array
let s = JSON.stringify(o);
console.log(s)//s is '{"x":1,"y":{"z":[false,null,""]}}' This is process called serializing Objects where object state convert into strings. here, both key:value pair are convert into string

let p = JSON.parse(s)// it is the copy of s variable
/*JSON syntax is a subset of JavaScript syntax, and it cannot represent all JavaScript values. Objects, arrays, strings, finite numbers, true, false, and null are supported and can be serialized and restored. NaN, Infinity, and -Infinity are serialized to null.*/

var a = 123
console.log(a+1);