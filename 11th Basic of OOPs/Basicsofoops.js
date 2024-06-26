/* 20/02/2024
Lesson - Basic of OOPs
     What is oops?
     ==>In Loops, you can represent real world entities inthe system so that, the programmer can use 
     ==> it stands for Object oriented programming
     ==>
     why OOPS?
     ==>In order to gets solution for complex real world Problems
     Terminologies used in OOPs
         class-It is template which represent real world object, it consist properties and method
         object-
         instance
     How to declare a class ?
        constructor 
        ==> it is inbuild method.
        ==>It is used to define the properties for a class.
        ==>This method gets triggerred/called when an instance of class is created i.e. Objects.

        method / Function
        ==> This are small peice of code which get triggerred when we call the function.
        class keyword
        ==>this is inbuild keyword based on which , hte compiler will understand that the given scope is a class.
        class name
        ==> Camel case notation to be follwed*/
        class Bottle {
            constructor(){
                capacity
                color

            }
            filling(){
                console.log("Bottle is filling")
            }
            unfilling(){
                console.log("Bottle is UNfilling")
            }
        }
        
        /*scope 
        this keywordthe inbuild 
        ==> this is 
     sample Example - Bottle Class.
     Bind method
     call Method
     Apply Method
     JS Prototype
         a.Variable prototype
         b.Method Prototype
     JS Inheritance
     types of JS Inheritance
         Inheritance using Prototype for variables
         Inheritance using Prototype for methods
             types of inheritance while using Class
              a.1-1 INheritance 
              b.1-* Inheritance
              c.Multilevel inheritance
              d.Hybrid inheritance
              => Mixture of 1 to 1, 1 to many, multilevel inheritance
                  Interface Class
                  ==>multilevel inheritance will implement on interface 
                  Abstract Class
                      e.Multiple Inheritance (*-1) => It is possible only for Interface Class.
*/
const x = 5;
var a = function (){
    console.log(5+x)
}

var b = a.bind(x)
b()

