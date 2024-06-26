//Focus: ES5, ES6 concepts and intro to ES Modules
//Learn about the new fatures such as arrow functions, let and const keyowrds, template literals, spread operators and rest operators, destructuring assignment

//ES5 Concepts
//1) "use strict"==> It is use for strict programming where no mistake were done.
//'use strict'
 abc = 100;// and when we use strict than it throws error 
 console.log(abc)//we don't define variable for abc thus it can execute

 //2) Multiline strings==> In multiline string we use back slash "\" for write the multiline strings.
 var country = 'India\
 is my\
 country\
 and, i am live\
 in mumbai'
 console.log(country)

 //3) String trim()==> This is the method where we delete extra white spaces from start and the end, but in the between of sentence not be deleted
 var str = "    I am from India, Mumbai    ";
 console.log(str.trim())

 //4) JSON.parse and JSON.stringfy

 //example of JSON data
 let obj = '{"name": "John", "age": 30, "isStudent": true}';
//it is in string format
var pars = JSON.parse(obj);
//{ name: 'John', age: 30, isStudent: true }
console.log(pars)

//similiar JSON stringfy
var strng = JSON.stringify(pars)
console.log(strng)
//{"name":"John","age":30,"isStudent":true}

//Getters and Setters
//Getter is method where we get value from object, function, or class.
const person = {
    first_name:"shivam",
    last_name:"mishra",
    get fullName(){
        return `${this.first_name} ${this.last_name}`
    }
}

console.log(person.fullName)

//setter is the method where we apply condition 

const second_person = {
    first_name:"Sani",
    second_name:"mishra",
    _age:23,
    set age(newAge){
        if(newAge >= 0 && newAge <=120){
            this._age = newAge;
        } else {
            console.log("invalid age value")
        }
    }
};

second_person.age = 29;
console.log(second_person._age)

second_person.age = 129;
console.log(second_person._age)


//ES6 Concepts
//1.Arrow Function
//2.spread Operator==> it is a iterator which iterate all the item inside the arr,object
const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];

const mergedArray = [...arr1,...arr2];
//above the code of concatination
console.log(mergedArray)
//down is the example of iterator
console.log(Math.max(...arr1));
console.log(Math.min(...arr2))

//Create a shallow copy of an array
const originalArray = [10,20,30];
const copiedArray = [...originalArray];
console.log(copiedArray)

//2. Object Spreading
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };

// Merge objects
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject);

//Template Literals
const variable = "value";
const templateLiteral = `This is a template literal with ${variable}.`;
console.log(templateLiteral);

//Destructuring Assignment
//1.Array Destructure

const numbers = [1,2,3,4,5];

//Destructure array
const[first,second,...restNumber] = numbers;

console.log(first);1
console.log(second);2
console.log(restNumber);[3,4,5]

//Object Destructure
const person3 = {
    first_name:"Shivam",
    last_name:"mishra",
    age:21,
    country:"India"
};

//Destructure
const {first_name,last_name,...restinfo} = person3

console.log(first_name);//Shivam
console.log(last_name);//mishra
console.log(restinfo);
//{ age: 21, country: 'India' }

// export function add(a,b){
//     console.log(a+b)
// }