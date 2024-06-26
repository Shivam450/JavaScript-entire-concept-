/* Javascript objects 
*what is JS Object? 
==> Non- primitive It is user defined 
  ==>Objects consist Collection of key values pairs 
  ==> It can be both primitive & non-primitive
  ==> objects used flower braces and key value pairs are defined used of (:) colon and separated by (,)
*why do we need?

2 approaches that can be used to declare an object.
   a.Literal approach*/
   

   var a ={name:"shivam", age:26, salary:3600}// here name:"shivam" key value pairs
   console.log(a)


  // b.constructor approach  //
  var b = new Object()
  b.country = "India"
  b.state = "Maharashtra"
  b.city = "Banglore"
  b.languages = ["English", "hindi", "marathi"]
  console.log(b)
/*2 approaches that can be used to access th value present inside the objects
   a.Dot operator */

   console.log(a.name)
   console.log(b.country)

   //b.sqaure braces notation
   console.log(a['salary'])
   console.log(b['city'])
/*Nested objects 
==> objects within object / objects inside another objects and objects and objects....
==> objects of objects */

var bb = {name: {first_name:"Shivam", last_name:"Mishra"},
          age: {n_of_years: 33, no_of_months: 11, no_of_days:27},
          salary: {gross_income:1000, net_income:600},
          address: {country:"INdia", state:"Maharashtra", city:"MUmbai", area:"Tulinj Road", pincode:401209, landmark:"Near Mahesh Park"},
          add: function(){
            console.log("Hello")
          }
}
console.log(bb.add())// hello
//How to access the value from nested objects?
//Access my net income
console.log(bb.salary.net_income) // acces the salary and net income
console.log(bb.name.first_name)
console.log(bb.address.state)
console.log(bb.age)
console.log(bb.address.pincode)// 401209
console.log(bb.age.no_of_days)// 27
console.log(bb.name.last_name)// MIshra
/*Inbuild method that can implemented for objects*/
//a.Keys => collection of all the keys are given as output
console.log(Object.keys(bb)) // give the arrays of key
console.log(bb.address.pincode)// 400001
//and if i want to freeze
Object.freeze(bb.address.pincode)// it can't changed
bb.address.pincode = 200001
console.log(bb.address.pincode)
console.log(bb)
//b.values => A collection of all the key value pairs are given as output
console.log(Object.values(bb))// value treated as object and then item
//how to cahnge a value
bb.address.pincode = 400001


/*c. entries => A collection of key value pairs are given output
=>Each key value PAirs is treated as item.
=> the key and the value are separately treated as items.
=>The output is multi dimensional array */
console.log(Object.entries(bb))


//d.Feeeze ==>Its like once freeze value cannot change
console.log(bb.address.pincode)// 400001
//and if i want to freeze
Object.freeze(bb.address.pincode)// it can't changed
bb.address.pincode = 200001
console.log(bb.address.pincode)
console.log(bb)

/*what is JS Sets ?
  inbuild method that can be implemented for sets
==> collection of unique
  */
// two method
var a = new Set([1,2,3,4,1,2])
console.log(a)
// 
var b = [1,2,3,4,3,4]
var n = new Set(b)
console.log(n)

// how ot add the item in set
var m = new Set()
m.add(1)
m.add(2)
m.add(1)
m.add(2)
console.log(m)

// present or not value in set
console.log(m.has(2))// true
console.log(m.has(3))// false
console.log(m.size)// count the number of items
console.log(m.delete(1))// since value 1 is present it will deleted and getting true
console.log(m.delete(4))//  since value 4 is not present it will not deleted and getting false
m.clear()// it will clear the all value in set
console.log(m)
/*what is JS Maps ?
 => In build methods that can be implemented for maps
 => Also an object or similair to object*/
 var a = new Map()// using set method you add and modify the data
 a.set('name',"shivam")
 a.set('age', 34)
 console.log(a)
 a.set('age',44)// here add the data
 console.log(a)
 console.log(a.keys)// here key will print
 console.log(a.size)// how many items
 console.log(a.has('name')) // it is not dealing with value only for key it is working
 a.delete('name')
 console.log(a)
 a.clear()
 console.log(a)

// how to approach map
var x = new Map([[name => "shivam",age => 18]])
console.log(x.name)
/*What is JSON?
=>similair as JS objects (95%)
=>hardly 1 or 2 differences are there.
why we need them?
=> for communating between front end and back end, a data format was introduced.
=>data formats is used to exchange the data between


2 inbuild method that are 
=> parse 
=> stringfy
*/
var a = {
    name: {first_name: "Raghu", last_name: "Aand"}, 
    age: {no_of_years: 33, no_of_months: 11, no_of_days: 27},
    salary: {gross_income: 1000, net_income: 600},
    languages: ["Tamil", "Telugu", "Kannada"]
}


console.log(a)
var b = JSON.stringify(a)// every key and value converted into string
console.log(b)
console.log(JSON.parse(b))// again it convert string key into normal one

