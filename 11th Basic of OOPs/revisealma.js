/* Basic of OOPS
  what is OOPS?
  ==> It stands for Object oriented programming, To represent Real world object in the system so that, programmers used the to generate solution for the real world entiteies or probelm
  Why OOPS?
  ==> In order to get solution for complex real world problem 
  Terminologies Used in OOPs
      class 
      ==> I'ts a Template, scope, also represent real world object, it consist properties, methods
      Object==> instance of a class
      Instance==> it is a replica of class, blueprint
  How ot declare a class?*/
  class Bottle {
    //to declare Property-use Contructor method, it is default method
    constructor (a,b,c){
        this.color  = a
        this.capacity = b
        this.shape = c
    }
    //method
    filling (){
        console.log("Bottle is filling")
    }
    unfilling(){
        console.log("bottle is unfilling")
    }
  }
  var a = new Bottle("blue","1 ltr","Tringular") // object a will have the instance of class Bottle
  a.filling()
  a.unfilling()
 var c = new Bottle("Orange", "2 ltr" ,"square")
 console.log(c)
//2nd Example
  class Box {
    constructor (a,b,c){
        this.size = a
        this.brand = b
        this.color = c
    }
    filled (){
        console.log("filled the component" + "the color of the bottle is " + this.color)
    }
  }

  var b = new Box("42","Samsung","black")
  console.log(b)
  var b = new Box("55", "Vivo", "white")
  b.filled()// here we use this.color i trigger , this keyword access the current object value

    /*constructor 
    ==> It is inbuild method usedto define a property to a class
    ==> this method get triggered or call when instance of a class is created i.e. objects
    ==> some time in few cases the objects may not have property and the programmers tend to ignore the constructor method. IN this case the JS Compiler will add the constructor method during execution.
    method / functions
    ==> this are a small piece of code which get triggerred when we call a function
    class keyword
    ==> this is the inbuild keyword the compiler will understand the given scope is class
    class name ==> Camel case notation
    scope==> An container in which coe  is present
    this keyword ==> Explicity / dynamically telling the class to fetch the current object value.
sample Example - bottle Class.
Bind method ==> bind the two differnt function*/
// var x = 5
// var a = function(y){
//     console.log(5+y)
// }
// var b = a(x)
const x = 5
var a = function(){
    console.log(5+x)
}
var b = a.bind(x)
b() // now b will be the function after using bind method and under the a function  x = 5 is created even without finding the parameter

const ab = {
    named:"shivam",
    age:22,
    skillset:"JS,MERN",
    random: function(){
        console.log("hello")
    },
    permanent_employee:true,
    address:{city:"Mumbai",Country:"India"}
}
//Approach 2 Bind Approach
function onboarding(){
    console.log("we are onboarding Mr. "+ this.named + " with the age "+ this.age)
}
var z = onboarding.bind(ab)
z()
/*now above z is the instance of onbording means we create copy of onboarding() function ==> by the help of bind method we put all data which on class ab to onboarding() function
==>by the help of this key word we can use any data of class in function onboarding() 

//Approach 1 on how to solve above error
function onboarding(named,age){
    console.log("we are onboarding Mr. "+ named + " with the age "+ age)
}
onboarding(ab.named, ab.age)
//here we have pass arguments and parameter


/*call method ==> */
const employee = {name:"Shivam"}
function abb(age,country){
    console.log("hello " + this.name + " your age is " + age + " you are from " + country)
}
//approach to call the function
abb()

//2nd approach
abb.call()
abb.call(employee) 
abb.call(employee,32,"india")
/*the call keyword can be used to implement similiar to binding method.
==> abb.call(employee, 34) here first employee is the function and 
==> 34,"india" is the parameter and age,country is arguments

/*apply method ==> It is same as call method, 
==>difference is that parameter separately for call method but for apply method the parameters are passed in a array.*/
abb.call(employee,[32,"India"])

//Till now we use calss and have abilty to change properties and method inside that class but, user behaviour changes day by day and requirement to fill user also changes so, to overcome this problem we have prototype where, developer add properties and methods outside from class and you can accomadate the user experience 
//JS Prototype
 class Bottle2  { //3 properties and 2 method
     constructor(a,b,c){
        this.color = a,
        this.capacity = b
     }
      filling(){
        console.log("The bottle is filling with water" + "and, the bottle color " + this.color)
      }
      unfilling (){
        console.log("The bottle is unfilling " + " and the bottle capacity was "+ this.capacity)
      }
 }
 var abcd = new Bottle2("Blue", "2 ltr")

 //User trying to access this method and properties of bottle2
 abcd.filling()
 abcd.unfilling()
console.log(abcd.color)
console.log(abcd.capacity)
//But, now user trying to access the some properties which was not defined by developers with the help of prototype keyword we embeded that property
///////Property Prototype
Bottle2.prototype.shape = "Triangular"
console.log(abcd.shape)//Undefined // by adding prototype we get Traingular
//////Method Prototype
              Bottle2.prototype.drinking = function () {
              console.log("The person is drinking water from the Bottle")
              }
              abcd.drinking()


/*What is JS Inheritance
==> The same Logic will be reuasing many time so, we create only once use many time.
==> we created the class Bottle and with the help of object abcd we can access them.
 
types of JS inheritance
     Inheritance Using Protoype for Variables
     Inheritance Using Prototype for methods

     Inheritance Using Class
     ==>It happen b/w class
     ==>This is facilated by 2 important keyword
      a.extends
         class1 - class2
      b. implements
         interface- class*/
     class Bottle3 {
        constructor(a){
            this.color = a
        }
        filling(){
            console.log("The bottle is filling")
        }
     } 
     //I want to inherit the property color from Bottle class and make it available in the mobile class
     //here class Bottle is parent and class Mobile is a child
     class Mobile extends Bottle3{ //with the help of extends keyword we can have all properties and method from Bottle3 in the Mobile class
        phonecolor(){
            console.log("my phone color is "+ this.color)
        }
     }
     var g = new Mobile("red")
     //here we give the arguments for the Mobile but, this arguments is gone on the Bottle3
     g.phonecolor()
     g.filling()
     console.log(g.color)// red
     //above we use extends keyeord for single parents single children but now we use single parent multiple children

//     a. 1-1 Inheritance
     class Book extends Bottle3{
        book_color(){
            console.log("my book color is "+ this.color)
        }
     }
     //Bottle3 is parent will have two cild class 1st Mobile and second Book
 //b. 1-* INheritance
     var h = new Book("blue")
     h.book_color()// with the help of this keyword we get color according to us of current value fetched

            // c. Multilevel 
//==> The child will get the property of both parent and grandparent

class Bottle4 {
    constructor(a){
        this.color = a
    }
    filling(){
        console.log("this is the filling")
    }
}
 class Mobile2 extends Bottle4 {
        
         powerON(){
            console.log("the power were On of the mobile" + " AND the color of mobile "+ this.color)
         }
 } 
 class Book2 extends Mobile2 {
    
      bookcover (){
        console.log("the Book cover was Good and the content " + this.color)
      }
 }
var ah = new Book2("contain Grammer")

ah.bookcover()
 //Book2 have access to all bootle4 and Mobile2
  /* d. Hybrid inhertance
==> Mixture of One to one and one to many and many to many*/

//e. Multiple INheritance (* - one) ==> it is possible only for interface Class.


//Interface Class. ==> when you have unlimited unknown
//Abstract Class.==> When you have limited unknown, use Abtract keyword to ignore that method or properties.
//here we have to use Class keyword
//Abstract filling()
//abstract this.color = a

//Interface Class. ==> when you have unlimited unknown
//there is no use of class keyword
//interface Bottle {"unlimited unknow"}
//multiple inheritance means two parent one child, is possible in Interface Class only