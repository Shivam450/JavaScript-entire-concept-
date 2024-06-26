/*Lesson - ES5 & ES6
 Why ECMA Script?
 ==>This is a standard script that is accecpted widely by different browser, or different machine.
 E.G:-JavaScript,TypesScript,ActionScript,JScript is follow ecmaScript standard
 
 why ECMA Script?
 ==>To create a common script based on which the browsers can support.

 version of ECMAScript are also called as EScript,ECMA,ES,ECMAScript, etc
 Version of ECMAScript
 ES1
 ES2 (2001)
 ES3 (2005)
 ES4 (2009)
 ES6 (2015)minimum knowledge till 2024
 --------ES14 (2023)

 ES5
    What is ES5?
    Features Introduced in ES5
       Multi line string */
       var a = "hello\
       I\
       am\
       From\
       India"
       console.log(a)
       /*use 'Strict'*/
       'use strict' 
        c = 10
        console.log(c)
       //methods of string
       //Trim method
       var a = "I am in India"
       //post receiving
       a = "  I am in India  "
       console.log(a.trim())//it delete the white spaces
       //methods of array
       //indexof
       var a = [1,2,3,4,5,6,7,8,9,3,2,1]
       console.log(a)
       console.log(a.indexOf(5))//4

       //lastindexof
       //console.log(a.lastindexof(3))
       //From end to start it will searching 3 
       //(indexof faster)
       //every 
       
       mychecker = (item) => item > 0
       //it check all item that item is greater than 0 exist or not 
       console.log(a.every(mychecker))
       
       //some
       mychecker2 = item => item > 2
       console.log(a.some(mychecker2))
       
       //map
       //==>Iteration/ same as your for loop / everything is fixed, start
       myiterate = item => item*2
       console.log(a.map(myiterate))// it will print the value which value is qualified the function of myiterate and return an array
      
       //forEach
       myforeach = item => console.log(item)
       console.log(a.forEach(myforeach))//in forEach you'll access the item one by one but not in array
       
       //isArray
       console.log(Array.isArray(a))// is checking whether the given array is ARRAY or not

       //filter
       myfilter = item => item > 2
       console.log(a.filter(myfilter))// it check filter the array from myfilter function condition

       //reduce
       //x is a variable which will have total value of the numbers 
       myfilter = (item,x) => x + item
       console.log(a.reduce(myfilter)) // 51
       //JSON Methods
          // Stringfy 
          //Parse
/*ES6
   What is ES6
   ==>This version is where the JS become a pure object oriented programming language
   Features Introduced in ES6
      Let & const keywords
      Arrow Function
      Template Literals
      ==>We use ${} */
      var a = "India"
      var b = "New Delhi"
      console.log("hey the Capital is"+ a + "is" + b)// inside in single string you can access the variable
      console.log(`Hey the Capital of ${a} is ${b}`)//Template literal under backticks:- inside in single string you can access the variable
      //methods of strings
          //endswith
          var a = " India is in planet Earth"
          console.log(a.endsWith("rth"))//it check whether it is end with rth if yes true
          //startwith:-Vice verca of endswith
          //includes:-This will check entire strings
          //console.log(a.startWith("In"))
          console.log(a.includes("in"))
      //method of Array
      var a = [1,4,8,12,16,20]
          
    //find
           //==>you will pass a condition, which ever satisfy that condition first will be given it output

            //myfinder = (item, index, entire_array)
            myfinder = item  => item > 8 //arrow cannot be hoisted
          var x =  a.find(myfinder)
           console.log(x);
    //keys ==> Index number
        var keyss = a.keys()
        for (let x of keyss){
            console.log(x)
        }//you'l access the key of an array i.e. index is the key of array

          //from
        var o = "India"
        console.log(Array.from(o))//[ 'I', 'n', 'd', 'i', 'a' ] from string z you create array
      
        //spread operators
        //==> it is denoted by .....
        // It is similiar to your map operator
        //1. .....Used for iterator 
        var a = [4,8,12,16]
        console.log(Math.max(...a))
        console.log(Math.min(...a))


        //2  ....used for concatination
        var b = [20,24,28,32,36] 
        var c =[...a,...b]
        console.log(c)//concatination


      //Destructuring Assignment
      var a = {name:"Shivam", age:34, salary:2000}

      //literal approach
      var x = a.name
      var y = a.age
      var z = a.salary

      console.log(`${x} ${y} ${z}`)
      
      //Destructing Assignment Approach
      var {name,age,salary} = a
      console.log(`${name} ${age} ${salary}`)

//Modules 
     //What is modules
     // ==> A module can be a function/Package/a peice of code which is separate or independent/library/and so on.

    //why module 
    //==>For Reusability

    //Import and export of a module 
       //import- you can imprt the module into the existing js file.
       //export - you can preparing the module for export.

       //Different syntax of module i.e. ES5 and ES6