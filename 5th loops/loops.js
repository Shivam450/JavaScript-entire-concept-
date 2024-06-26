for (let i = 1; i!==11; i++){
    console.log("i am walking and I ahvewalked step no: " +i)
}
for (let i = 10; i !==0; i--){
    console.log("i am walking and I ahvewalked step no: " +i);//reverse order
}
for (let i = 1; i <= 10; i += 2)/* i += 2, for two step*/{
    console.log("i am walking and I ahvewalked step no: " +i)
}

var a = [1,2,3,4,5,6,7]
var alpha = ['a','b'];
var boolean = [true, false, true]

console.log(a[2]);// 
for (let i =0; i < a.length; i++){
    console.log(a[i]);// 
}

///  for off  using array,string,map, sets, Nested arrays, etc/////
for (let y of a)/* here x is variable declared for array a*/{
    console.log(y)
}

////object ////
var ap = {name: "shivam", age: 21, salary: 2000};
console.log(a.name);// here you execute
console.log(a['name']);// here you execute

////// FOR IN LOOP used to iterate object //////
for (let j in ap){
    console.log(j)
    console.log(j.ab)
}

// while Loop => it will execute if condition is true
var i =0
while(i<3){
    console.log("hello hru");// i=1<3, i=2<3, i=3<3
    i++
}

// do while => it will execute atleat once while contion is false
var j = 0;
do {
    console.log("hello hru i am do while")/*to save time we use do while b'cuz it always execute 1 lesser time then while loop*/
    j++;
} while (j<4)// false condition

while (1) {
    console.log("hey");
    break; /*by using break the loop executed inly once */
}
var a = 0
while (1) {
    if(a>1){
        console.log("hello")
        break; 
    }
    else {
        console.log('123');
        continue; // infinte loop
    }
}

///FOR OFF /////
const myName = "Shivam";
for (let name of myName){
    console.log("my characters " + name)
}