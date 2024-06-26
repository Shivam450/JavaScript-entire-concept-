 //Extra-addons
//Promises
const promise = new Promise(function (resolve, reject){
    resolve('I am a resolved promise!');

});

promise.then(result => console.log(result));

//Promise is work here like in real life it resolved, reject

let p = new Promise((resolve, reject) => {
    let a = 1+2;
    if (a==2){
        resolve('Success')
    }else{
        reject ('Failed')
    }
})

p.then((message) => {
    console.log("This is in the the then " + message)
}).catch((message) => {
    console.log('This is in the catch ' +message)
})

/*promises is constructor method, where it have two possibilities promise succed === resolve, or promise failed === reject, and then we pass the function to it and when resolve will execute it goes to then() inbuild method and if reject then catch() method and we can also pass the function to then and catch.*/
//promises is used for if you can download the file

//CallBack
// var move = function (moveplayer){
// moveplayer(100, 'left', function (){
//     moveplayer(400, 'Left', function() {
//         moveplayer(10, 'Right', function (){
//             moveplayer(330, 'left', function(){
//            })
//         })
//     })
// })}

// console.log(move())
//callBack is type of function that exectute after parent function execute, and then 

//This call back function in promises will look like this

/*moveplayer(100, 'Left')
  .then(()=> moveplayer(400, "right"))
  .then(()=> moveplayer(10, "right"))
  .then(()=> moveplayer(330, "right"))*/

const promises = new Promise((resolve, reject) => {
    if(true){
    resolve('Stuff Worked')
    } else {
        reject('Error, it broke')
    }
})
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 100, "Hii")
})

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, "cookie")
})
const promise4 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, "Is it me you are looking for")
})
Promise.all([promise,promise2,promise3,promise4])
       .then(value => {
        console.log(value)
       })






promises
      .then(result => result + "!")//first print
      .then(shivam => shivam + "Shivam")//second print
      .catch(()=> console.log('error!'))//this can use if above code have error, this will not worked if error found below 
      .then(result2 => {
        //throw Error;
        console.log(result2)
      })// we use then here and our code will work line by line and print
      .catch(() => console.log('error!'))//this will catch the error if found and print error, in then keyword if error found then  use catch keyowrd to found error



      //Final Example in real world

      const urls = [
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/comments',
        'https://jsonplaceholder.typicode.com/albums'
      ]
Promise.all(urls.map(url => {
    return fetch(url).then(resp=> resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
})
.catch(()=> console.log('error'))