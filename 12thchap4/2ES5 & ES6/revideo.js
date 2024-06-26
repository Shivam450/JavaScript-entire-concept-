/* ES5 & ES6 Concepts
ECMA = European computer Manufacturing Association.
what is ECMAScript ?
==> This is a standard Script i.e. accepted widely by different browser or machine.
1)JavaScript, TypeScript, ActionScript Follows ECMAScript Standard.
JavaScript is executed in any of the browser 

//Browser Will Support JavaScript compiler

Why ECMAScript?
==> To create a common script based on which the browser can support.

ECMAScript are also called as EScript,ECMA,ES,ECMAScript, etc....

Version of ECMAScript
ES1 ==
ES2 ==
ES3 ==
ES4 ==(2005)
ES5 ==(2009)
ES6 ==(2015)
ES14 (2023)


ES5 
   What is ES5
   Features introduced in ES5*/
       //Multi Line String
var a = "hello \
I \
am \
from \
India"
console.log(a)
       //use 'strict'
//we don't use 'strict' when not using variable
//if we get warning and we use strict then it throws error
'use strict'
c = 10
console.log(c)
       //methods of Strings
            //Trim method
var d = "     The sivam bieng added, trim method delete the extra white spaces, begening and end spaces only deleted    "
console.log(d.trim())
       //method of array
            //indeof
var a = [1,2,3,4,5,4,3,3,2,1]
console.log(a.indexOf(3)) // 4
            //LastIndexof==> enitire array will be iterate, last value print index if value will same
console.log(a.lastIndexOf(3)) //
            //every==all items from array will checked, here we passed a function that compare with array a. and array will be matched function condition then return true, else false, and it will iterate every element. 
function mychecker(item){
   return item > 4;
}
console.log(a.every(mychecker))

            //some
console.log(a.some(mychecker)) // whether some item greater than 4 so, get true.

            //map ==> this is nothing but, iteration same as for loops, but everything is fixed start from 0 ends at length -1 index, and increments by 1.
myiterate = item => item*2
console.log(a.map(myiterate))
//you are fetching each and every item and mutiply by 2 and it is returning in array format

            //forEach
myforEach = item => console.log(item)
a.forEach(myforEach)
//here You're accessing the item one by one

            //isArray
console.log(Array.isArray(a))
//it check whether the item is array or not

            //filter
myfilter = item => item > 2
console.log(a.filter(myfilter))
//it is used to filter the data based on some condition provided by certain condition

            //reduce
//x is the variable which will have total value of the number from the array.
//item is the value from the array
myreduce = (item,x) => x + item
console.log(a.reduce(myreduce))

       //JSON Methods
//Stringfy
//parse

/*ES6
    What is ES6 ?
    ==> This version is where a JS become a pure object oriented programming language.
    ==> In 2015, this version was launched.

    Featured Introduced in ES6?
        Let & Const keyword
        Arrow Function*/
        //Template Literals==> where we use ${}
    var a = "India"
    var b = "new Delhi"
    console.log(`The capital of ${a} is ${b}`)
        // methods of String
             //endswith
var strng = "India is in planet earth"
console.log(strng.endsWith("rth"))
//it will checck whether the substring endwith given string or not if it's end with given substring then true, it is case sensetive

             //startwith
console.log(strng.startsWith("ind"))
// it is case sensetive

             //includes
console.log(strng.includes("planet"))// whether it particular include or not, it will check the entire string or not

        // methods of Array
             //find==> you will pass the condition whichever item satify the condition that item will print.
var arr = [0,4,8,12,16,20]

//myfinder = (item, index, entirearry)
myfinder = item => item > 8
var x = arr.find(myfinder)
console.log(x)// 12

             //keys => index Number we get
var mykeys = arr.keys();
for (let i of mykeys){
    console.log(i)
}

             //from ==> each item will be trated as array

var z = "India"
console.log(Array.from(z))


        //Spread OPerator
//==> it denoted by ... 
//==> it is similair to map

//Two cases 
 //1st case ... Used as a iterator
 var ap = [4,8,12,16]
 console.log(Math.max(...ap))//...it will traeted as itarator and it goes to the max
 console.log(Math.min(...ap))


 //2nd ... used for concatination ==> here we add the two different array
 var b = [2,24,28,32]
 var c = [...ap,...b]
console.log(c)

        //Destructuring Assignments
var a = {name:"shivam", age:34, salary:2000} 

var x = a.name
var y =a.age
var z =a.salary

console.log(`${x} ${y} ${z}`)
//till above is the literal approach

//Destructure Assignment approach
var {name,age,salary} = a
console.log(` ${name}, ${age}, ${salary}`)

/*Modules
     What is a modules?
     ==> Module can be a function/package/a piece of code which is separate or independent/ library / and so on.

     why module?
     ==> For Reusability

     Import and Export of Module
     ==> Import - You can import the module into the existing js file.
     Export-you can preapare the module into the existing js file.

     Different Syntax of module i.e. ES5 and ES6 */
// import {add} from './almadoc.js'

// add(5,6)