console.log("hello how are you");
//hey I am fine

////////////////Variable- var, let, const.///////////
var a = 100 //(Declaration= coming with a variable name) a is having the adderss of location where 100 is present.
a = 110; // defining here means reassigned
function abc() {
    let a = 120;
    console.log(a);// 200
}
abc();
console.log(a);// 110
console.log(typeof a);// number

let o = 200;
b = "India" // we can also change the data type or value can also changed in variable 
console.log(b);

const p = 300;// it is global & local scope; it is not used to changed value and data type
console.log(c);

////////////////Data Types//////////////////////
var a = "India";
console.log(typeof a);
var a = 100 //Number
console.log(typeof(a))

var b = "India" //String
console.log(typeof(b))

var c = true //Boolean
console.log(typeof(c))

var d //undefined
console.log(typeof(d))

var e = "" //String
console.log(typeof(e))

var f = " " //String
console.log(typeof(f))

var g = '' //String
console.log(typeof(g))

var h = ' ' //String
console.log(typeof(h))

var i = "a" //String
console.log(typeof(i))

var j = "null" //String
console.log(typeof(j))


////////////TYpe Conversion /////////////////////


var a = "5";
console.log(typeof a);// string
var c = Number(a);// string to number
console.log(typeof c);// number

var c = String(a);// number to string
console.log(typeof c);// string

/////////number to boolean///////////////
var x = 0;
console.log(typeof x);
var y = Boolean(x); // number to boolean
console.log(typeof y);// boolean
console.log(y); // false b'cuz 0 is false in boolean

var m = "india";
var n = Boolean (m);
console.log(n); // 
console.log(typeof n);