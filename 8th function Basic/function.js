/*Function in JS -Basics 
     What is function?
     ==>function is a collection of statement. 
     ==>It scope Function is used to save time
     why we need function?
     ==>It scope Function is used to save time
     ==> It is used to write a repetative code, when we call it triggered
     syntax/Structure/Declaration of a function
     ==>*/
// function abc(/*parameters - It Accepts the data from outside the function*/){
// //Statement
// }
// //triggerd the function
// abc()//1st way
// ['abc']()//2nd way
     /*Terminologies utilised in a function?
         Parameter
         ==>The variable which is defined in the function, and which you can pass the data to thre function.
         a.User past parameter.
         whenever the user pass the data.
         b.Pre defined Parameter
         ==> whenever you set the data.
         Argument
         =>From outside the function, if we pass any data through a variable to function then such passed variable are called as arguments.
         return keyword
         =>It return the flow to the called level or where ever it got triggered
         function scope
         =>the scope in which the function defination is present.
         function keyword
==> function which help the JS compiler to understand this is the function keyword
     trigger/Call a function
     
     Helper Function
     ==>
     Where all it could be used and how does it helps us?*/


var x = 100;
var y = 100;
function abc (a,b)/*a,b are parameters*/{
let c =a+b;
console.log(c)
}
abc(x,y) // Line of trigger / Calling point
//x stored in a and y stored in b are called arguments
//['abc']()

var x = 100;
var y = 100;
function /*function keyword is used to define function */ abc/*abc is a function name */ (a,b)/*a,b are parameters*/{
return a+b // when use of return add var 
}
var baf = abc(x,y)// when use of return add variable to stored a data // Line of trigger / Calling point
//x stored in a and y stored in b are called arguments
//['abc']()
console.log(baf)


var t = 100;
var n = 200
function abg ( a,b =200)/*this is predifened parameters*/{
console.log(a+b)
}
abg(t)

function abg ( a=200,b =200)/*this is predifened parameters*/{
    console.log(a+b)
    }
abg()// here value a,b taken
abg(t)// here t=100, and b = 200 taken
    
//Helper Function
//compuond wall for 30+40 Dimension sites =>30+40+30+40 => 140
function mycompundlength(a,b){
    let z = a+b
    return 2*z
}
//mycompundlength is a helper function
//per sqft I am charging 100 rupess
var moneyspentoncompund = mycompundlength(30,40) * 100
console.log(moneyspentoncompund)

//Where all it could be used and how does it helps us?*/
// a.code structure becomes clean and crisp = modularize coding approach.
//b.Saving resources
/////////////////////////////////////////////////////////////////////////////////////
// Input:
// [1, 2, 3, 4, 5]  //  [5,1,2,3,4] // [4,5,1,2,3]
// 2
// Output:
// [4, 5, 1, 2, 3]
//Note: The value of k can be greater than the length of the array, so multiple rotations might be needed.
var a = [1, 2, 3, 4, 5]
var b = 12
function rotateArray(myarray,k){    //k is based on positions
    if(k > myarray.length)          // 7 > 5
    {
        k %= myarray.length         // k %= myarray.length  |  k = k%myarray.length | k = 7%5 | k = 2
    }
    for(let i = myarray.length - 1; i> k; i--)  // i = 4, 4 > 2; 4--    // 3-- 
    {
        // i = 4                    // i = 3        // i = 2 ~ 2>2
        var a = myarray.pop()
        myarray.unshift(a) 
    }  
    console.log(myarray)
}
rotateArray(a,b)
