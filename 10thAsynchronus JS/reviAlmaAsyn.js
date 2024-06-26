/*Asyn programming in JS allows you to run multiple tasks simultaneously without blocking the main thread and ensures fast and efficient execution of code.

focus:=JS loops and various methods such as - setTimeout()

Primary goals 
:-understand setTimeout() and setInterval() for handling asynchronous tasks in JS
:-Learn how the event loop works and it's role in managing asynch code execution, ensuring smooth performance and responsiveness in Javascript applications.

 :==JS was used to writing code that executed linearly, from top to bottom. But with asynchronous programming, she had to deal with code that was executed out of order and callbacks that fired at unpredictable times.*/


//JavaScript Event Loop
//Javascript single-threaded model
//B'cuz it is single threaded language it run top to bottom and line by line, due to this if function was take time like below function
//1st Example
function task(message) {
    // emulate time consuming task
    let n = 1000000;
    while (n > 0){
        n--;
    }
    console.log(message);
}

console.log('Start script...');
task('Call an API');
console.log('Done!');

//due to upper function take time to load, it block all interaction on the webpage, including mouse click.
//An illustration of a blocking function is when a function calls an API from a remote server, which may introduce delays in the script's execution.

//CallBack:-Callbacks in JavaScript refer to functions that are passed as arguments to another function and are executed after the completion of that function.
// Function with a callback 
//2nd example
function fetchCallBack (callback){
    setTimeout(function (){
        const data = {
            name:"shivam",
            age:22
        }
        callback(data)
    },1000)
    }
    function fetch_Data_from_SetTimeout (data){
        console.log(`Name:${data.name}, age:${data.age}`)
}
fetchCallBack(fetch_Data_from_SetTimeout)
  // Output
 // "Name: John, Age: 30"


 //3rd example
function task(message){
    let n = 1000000;
    while (n > 0){
        n--;
    }
    console.log(message)
}

console.log("Script...")
setTimeout(function () {
    task("Execute the funciton")
},3000)

console.log("I am Shivam")
/*Script...  ===> this will print before the second example, rather than it was in 61 line and second example was 47
I am Shivam  ===> this will also same as Script....
Name:shivam, age:22 ===> this will print after 3 second b'cuz setTimeout function
Execute the funciton ===> this will also print 3 second later b,cuz setTimeout,
//By using setTime out function we can fix 1st example, so, this was asynchronus behaviour of JS */

//4th example
console.log("hii");

setTimeout(function (){
    console.log("execute immediately")
},0)

console.log("bye")
 /*hii
   bye
   execute immediately
   execute immmediately print last b'cuz the function is setTimeout in callstack automatically it was execute last*/

//setTimeout with (function delay,parameter1,parameter2 )

//5th Example
function Hello(name, message){
    console.log(`Hii i am ${name}, ${message}`)
}

setTimeout(Hello, 1000, "Shivam","I am son of Upendra Mishra")

//setInterval(function, interval);
//it is loop which print function and some given interval time and can't stop

function hello(){
    for (let i=1; i < 5 ; i++){
        console.log(i++)
    }
}

//setInterval(hello, 1000)

//6th Example 
function time(){
    var currenttime = new Date();// this is the constructor function
    var hours = currenttime.getHours() // this we add in a constructor function
    var minute = currenttime.getMinutes()
    var second = currenttime.getSeconds()
    var combine = hours +":" + minute +":"+ second;
    console.log(combine)
}

//setInterval(time, 1000)// it wiil fetch time exactly same 

//Clear Timeout

function  clrtime(){
    console.log("Anaconda")
} 

var clr = setTimeout(clrtime, 2000)

clearTimeout(clr)// this will can;t execute the function clrtime()

//7th example
function sayHello() {
    console.log("Hello, World!");
  }
  
  const timerId = setTimeout(sayHello, 1000); // Schedule sayHello function to run after 1000 milliseconds (1 second)
  
  // Now, if you want to cancel the execution of the sayHello function before it runs:
  clearTimeout(timerId);


  //8th Example

  let count = 0;
  function setin(){
    count++;
    console.log(count);
    if (count === 5){
        clearInterval(intervalID);// it will stopped the execution of setInterval
        console.log("interval Stopped")
    }
  }
   
  let intervalID = setInterval(setin, 1000)

 
