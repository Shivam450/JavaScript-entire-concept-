// //Arrays is collection of similiar item
// // var a = [1,2,3,4,4,5]
// // console.log(a)
// // for (let x of a){
// //     console.log(x);
// // }
// // var b=['a','b','n','d']
// // console.log(b)
// // for (let x of b){
// //     console.log(x)
// // }
// var e =[
//     [1,2,3,4,4,5],// array e of 0th index
//     [1,2,3,10,4,5],// array e of 1th index
//     [1,2,3,4,4,5]// array e of 2th index
// ]  //Array of array
// console.log(e[1][3])// to acces the particular value in array
// for (let arr of e){
//     console.log(arr[0])// here index of 0th
// }
// var obj = [{name: "shivam", age: 21, salary: 2000},
// {name: "shivam", age: 21, salary: 2000},
// {name: "shivam", age: 21, salary: 2000},
// {name: "shivam", age: 21, salary: 2000}]

// for (let x of obj){
//     console.log(x.name)
//     console.log(x.salary)//here you iterate the value using 
// }
// console.log(e)
// var boo = [true,false]
// console.log(boo)
// for (let x of boo){
//     console.log(x)
// }

// var a = [ 1 , 2 , 3 , 4 , 4 , 5]
//         //0   1   2   3   4   5//left to right
//         //-5  -4  -3  -2  -1  0//right to left


// a.length => length of the array.
console.log()
//push => add the item in the array. add item right side
var f = new Array();
f.push(1)
f.push(2)
f.push(3)
f.push(4)
console.log(f)
console.log(f.length)// start from 1

// unshift => add item at the begining
var r = new Array();
r.unshift(3)
r.unshift(2)
r.unshift(1)
console.log(r)//[1,2,3]

// pop the right hand side item delete
//shift left hand side delete
//indexof() = it accept the character and return the index number of character which it encounter last
f.push(2)
f.push(4)
f.push(2)
console.log(f)
console.log(f.indexOf(2))
//lastindexof()
//reverse = it will simply reverse the item in array
console.log(f.reverse())// reverse the value
//include = it check whether the given item or value present or not if presnt then return true or vice versa

console.log(f.includes(10));
console.log(f.includes(4))

//[map, reduce, filter, forEach [ES6,ES5] //

//Slice = it will cut the array into two parts based on the value provided

console.log(f.slice(0,3)) // here 0 is the index of 'f' start from 0 and 3 is the length of f start from 1

var a = [ 1 , 2 , 3 , 4 ,5]
//        0,  1,  2,  3, 4 index from left to right
//        -5, -4, -3, -2, -1 index from right to left start from -1
//        1,  2,   3,  4, 5 length or position start from 1 left to right

var a = new Array(5);//find out
a.push(2);
a.push(3);
console.log(a)


////What is string //
var a = " hello " // double
var b = 'hiihello' // single
var c = `hello` // b
console.log(a.slice(0,4))// space will also considered as index 0
//b.
var d = new String (5) // static
var e = new String()  // dynamic

//String Properties
//1.Strings are Immutable.
            // you cannot replace an existing character.
//2.Strongs are case sensitive.
           var a ="India"
           var b ="india"
           console.log(a==b);
//3. length
var a ="india"
console.log(a.length)

//4. multiline string
       var a = "I am from india"

       //Approach 1 => using
       var a = "india\
        i am\
        shivam/"
        console.log(a)
        
        // Approach 2 =>
        var a = "I am Shivam"+" my name is Shivam"+"shivam"
        console.log(a);

        var a = new Array(5);
        var a = new Array("india");
        var b = new Array(" ");
        console.log()

        var d = new String(5)
console.log(d)
var e = new String("India")
console.log(e)
console.log(e.length)

let w = "Hello"
w="hello"
console.log(w)

let du = new Array(1,2,3,4,5,6);
console.log(du)

//REVISION//
var a = [1,2,3,4,5] // number 
var b = ['a','b','d']// strings
var c = [true, true, true]
var b = [2%2==0, 2%3==0] // true, false boolean type
console.log(b)

var b = [{name:"shivam", age:18, salary:35000},{name:"Deepesh", age:23, salary:30000},
{name:"kartik", age:18, salary:35000}] // array of object
console.log(b)

var n = [[1,2,3,4,5],
['a','b','d'],
[true, true, true]] // array of arrays

// => position of an array start from 1 
/* => index start from 0
       a. index from left to right start from 0,1,2,3,4......
       b. index from right to left start from -1,-2,-3,-4....*/
var a = [[1,2,3,4,5]]
       /*   0 1 2 3 4 5
        -5 -4 -3 -2 -1  index of item*/ 
console.log(a[0]);// 1
console.log(a[-5]);// 2

/* =>size
memory allocated in bytes to store the given data.
assumption => if OS will store 2bytes per number than for 5 number output will be 10 */
var a = [1,2,3,4,5]
console.log(a.size)

/*=>length number of items available in array
  formula of length == [index + 1] */
var a = [1,2,3,4,5,6];
console.log(a.length) // 6

// Inbuild array method
//1] a.length

//predifened class / array constructor //
class bottle {
        constructor (a,b,c){
         this.size = a;
         this.color = b;
         this.capacity = c;
        }

        /*var new = 2,
        var color = blue
        var shape = conical*/

fill (){
        method1
}
unfill (){
        method2;
}
replace (){
        method3;
}
}

var a = new bottle(2, "blue","2ltr");

console.log(a)

var h = [1,2,3,4,5,6,7,]
for (let x of h){
        console.log(x)// here 1 by 1 item print
}
var ob = [{name:"shivam", age:23, salary:3200},
          {name:"shivam", age:23, salary:3200},
          {name:"shivam", age:23, salary:3200}]
console.log(ob)// for iterate entire object under the [sqaure brces]
for (let x of ob){
        console.log(x);
        console.log(x.name);// for iterate the values
        console.log(x.age);// for iterate the values
        console.log(x.salary);// for iterate the values
}
console.log(ob['name']);

var o = [ 
        [1,2,3,4], // index 0
         [1,2,3,4,5],// index 1
         [1,2,3,4,5,9],// index 2
         [1,2,12,4,5,6,7]// index 3
        ]
// console.log(o)
console.log(o[3][2])// it will acces the value of index 3 under that 3 index will print
for (let x of o){
        console.log(x[3])// output will be index of 3 print all the arrays
}

///inbuild method of ARRAY 
var f =new Array()
console.log(f)
//1 a.length => length of the array
console.log(a.length)
//2. push ==> in push aitem will added on the right side
f.push(1,2,3)
f.push(4)
f.push(5)
console.log(f)

// 3. unshift ==> item will added on the left side of array
f.unshift(10)
console.log(f)

//4.pop ==>deleting item from the right side
f.pop()
//5. shift ==>deleting item from the left side
f.shift()
console.log(f)// 10 delete by using shift and 5 will delete by using pop

//6.indexof() ==>it accept a character and return the index number of that character which it encounter first.
f.push(2,3,4)
console.log(f)
console.log(f.indexOf(3))// here 3 is the value and indexof will print the index number of value 3 i.e. 2

//7.lastindexof()it accept a character and return the index number of that character which it encounter last.
console.log(f.lastIndexOf(4))// it will print if value repeat like in single array if the value 4 will repeat then last indexof will see array from right hand side i.e. so value 4 lastindexof is 6

//8. reverse ==> it simply reverse the item in array
console.log(f.reverse())

//9. includes ==> it check the given input or given item will present or not and if present then ouput will true
console.log(f.includes(4))// true
console.log(f.includes(10))// false

// some more method present in ES5 and ES6 methods like 
//  Map, reduce, filter

//10. slice ==> in slice we it will cut the values in two parts
console.log(f.slice(0,3))// here first will be the index and second will be the lenth
//console.log(f.slice(index,length))

//11. splice operator ==> it has the power, add a item, delete, cut the array
var j = [1,2,3,4,5,6,7]
j.splice(1, 4, "hii")
console.log(j)
// 4 para ==> index,position,item add, number of items want  
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array visit

// What is string //
// ==> collection of characters
var a = "India" // double quotes
var b = 'India' // single quotes
var c = `India` // backticks

//Terminologies //
//Position 
//INdex
var a = "I N D I A"
//       0 1 2 3 4 indices
//       1 2 3 4 5  position
// length of a is 5.
//size ==> as per system OS the 

/* How to create a String
    a.General Way of Declaring / string Literal Approach */
    var a = "India" // double quotes
    var b = 'India' // single quotes
    var c = `India` // backticks
/*  b.Using predefined String class / String Constructor approach
==> The String Class expects the strings itself*/
    var ab = new String(5) // here 5 is the strings
    var ba = new String() // here " " empty strings
/*string Properties
1. Strings are Immutable
     you cannot replace an existing character.
2.Strings are case sensative.*/
     var a ="India";
     var b = "india";
     console.log(a==b)// false
// 3.length
 var a ="india"
 console.log(a.length)// here ouput 5                                                       
// 4.Multiline
var a = "I am from india" // single line
// a. Approch number 1 best approach
var a ="I am\
         from\
         India"
// b. Approach number 2
var a = "I am "+
        "from"+
        "India"





//ACESS THE item/character //
// a. using the index number
var a ="India"
console.log(a[1]);// n
 //b. using method charAt()
 var b="Asia";
 console.log(b.charAt(3))// a //it execution faster as compare to first approach

 //3.convert the  lowercase to uppercase
var c = "abchfhf";
console.log(c.toUpperCase())
//4.convert the uppercase to lowercase
var d ="ANSJNDKNF";
console.log(d.toLowerCase())

//5. slice ==> cut given strings into two sub strings
//2 para index number and position
var namee = "hey I am Shivam"
console.log(namee.slice(9,15)); // 

//6. split ==> it splits the given strings in array
var a = "hey I am Shivam";
console.log(a.split(" "))// here gives the 4 item
console.log(a.split())// here give single item
console.log(a.split(""))// it will gives each alphabet as each items 

//7.replace ==> 

var i ="hey I am Shivam";
console.log(i.replace("Shivam", "sani"))//hey I am sani

//8. concatination ==>
var k ="Delhi"
var t =" India capital is"
console.log(k.concat(t));

//9. trim
var t ="    India capital is   "
console.log(t.trim())// all unnessary spaces delete

// escape character
// \n   ==> it will start from new line
//  \t  ==> tab space
// var a = 'hello how\'s your home ?' // ny 
// \"

var a ="Mahesh \" Hello"
console.log(a)

var n = [[1,2,3,4],[5,6,7,8],[3,7,5,6,7]]
console.log(n[1].indexOf(8)) // it under the n[1] is the index of arrays and indexof(8) is the value 8 indexof 3

console.log(n[2].lastIndexOf(7))// -1 b'cuz the it check from right 

console.log(n.reverse())


/////////////Revision of Array in Alma//////

let myArray = [
        1,"hello",true, [1,2,3],
        {
                name:"shivam",
                age:30
        },
        function (){
                console.log("this is a function inside an array")
        } 
]
// how to access particular item in array
console.log(myArray[5]())// always use () ciecle beaces for get output of function

//how to get a item which array inside an array
console.log(myArray[3][1])// this will print index 3rd under that value 1st index print
//:::::::::Remember Array contain:number,string,boolean,function,object, and also an array

//push => add item from end
let yArray = [1, 2, 3];
yArray.push("shivam")
console.log(yArray)//[ 1, 2, 3, 'shivam' ]

//unshift=> add item from start
yArray.unshift('Apple')
console.log(yArray)//[ 'Apple', 1, 2, 3, 'shivam' ]

//changing array inside array
yArray[1] = "pear"
console.log(yArray)//[ 'Apple', 'pear', 2, 3, 'shivam' ]

//pop() will remove item from end
yArray.pop()
console.log(yArray)//[ 'Apple', 'pear', 2, 3 ]


//shift() will remove item from start
yArray.shift()
console.log(yArray)//[ 'pear', 2, 3 ]

//length will gives output in number of itms prsnt
console.log(yArray.length)//[ 'pear', 2, 3 ] output 3

//Practice 
const fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear'];
fruits.push('grape')
fruits.pop()
fruits.shift()
console.log(fruits)

//multidimensional array
let x = [
        ['Jack', 24],
        ['Sara', 25],
        ['Peter', 26]
        ];
console.log(x[2][0])// peter
console.log(x[2][1])// 26
//add in multidimensional array
x.push(["jackie", 28])
//inner array add
x[3].push(['sani',19])
console.log(x)

//using index
x[2][1]="hello"
console.log(x)
//splice 
x.splice(0, 1,)
console.log(x)

//using pop
x.pop()
console.log(x)

// inner elemnt remove
x[0].pop()
console.log(x)

// splice 
x.splice(1,1)
console.log(x)
//push
x.push(['shivam', 19])
console.log(x)
for (y of x){
        for(j of y){
                console.log(j)
        }
}

//1st prblm
let strng = "my name is Shivam"
let arrg = strng.split(" ")// split method conver array into string
console.log(typeof arrg)
let rvrse = arrg.reverse()
let final = rvrse.join(" ")
console.log(final)

//2nd prblm
let str ="hello"
let pure = str.replace(/[^a-zA-Z]/g,'');
let lower = pure.toLowerCase()
let main = lower.split('').reverse().join('')
if (main.toLowerCase() === lower){
        console.log(true)
}else {
        console.log(false)
}

//How
var arr = [1, 2, 3, 4, 5];
var result = arr.reduce(function(acc, curr) {
  return acc + curr;
}, 0);
console.log(result);


var g = [1, 2, 3, 4, 5];
var newArray = g.slice(2, 4);
console.log(newArray);