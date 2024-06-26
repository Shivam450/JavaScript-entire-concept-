// var table = 2;
// for (let i = 1; i <=10; i++){
//   console.log(table *= i);
//   table
// }
/*Continue Statement => it skip the rest of the loop in current iteration and directs it to end of the loop.We use this statement to restart a while, do..while,a for or labelled statement.  */
var numbers = [65, 5, 34, 1, 10, 77];
for (num of numbers){
  if (num % 3 === 0){
    console.log(num + " divisible by 5")
  }else{
    continue;// it will not execute if condition false b'cuz of 'continue' it again iterate the condition
    console.log("num is not divisible by 5")
    console.log("hii")
  }
}

/*break statement */
for (var num = 10; num >=0 ; num--){ //loop to print 10 to 0
  if (num == 4)/*here from goes 10 to 5, after check the condition that 4 == 4 if execute*/{
    break; //break out of the loop 
  }else{
    console.log(num);// here this execute until value reaches from  10 to 5 after that goes to if condition and loop sudden break
  }
}
/* */
var wdays = 0; //weekdays are zero initially
weekday: //label
  for(var day = 1; day <= 31; day++) //condition for 31 days
  {
    if (day % 7 == 0) //checking for Sunday
      continue weekday; //continue to the top of the loop
    else
      wdays++; // increment weekdays by 1
  }
  console.log(wdays + " weekdays this month.");

  var students = ["Aman", "Khush", "Reena", "Ram", "Ankita", "Anamika"]; //student names in an array
      checkName: //label
        for(var std = 0; std < students.length; std++) //checking each student in the list
        {
          if (students[std] == "Ram"){ //if student is Ram
            console.log("Ram is a student of DataFlair's JavaScript tutorials.");
            break checkName;
          }else{ //if student is not Ram
            console.log(students[std] + "</br>");
          }
        }

var arr = [1,2,3,4,5,6,7,8]
var target = 9;
var sum = [];
for (let num of arr){
  sumOne = num.length;
  sumTwo = num.length;
  if (sumOne + sumTwo === target){
    console.log(sum.push([sumOne, sumTwo]))
  }else {
    console.log("false")
  }
  }

  ///FOR OFF ///// to get the value of object, array
const myName = "Shivam";
for (let name of myName){
    console.log("my characters " + name)
}

const myNumber = [1,2,3,4,5,6,7];
for (let num of myNumber){
  console.log(num);
}

// For in /// to access the keys of the object 
var nummm = {name: "shivam", age:18, maritualStatus:"Unmarried"}
for (let key in nummm){
  console.log(key)
}// here name, age, maritualStatus is the key of object

var numer = [12,4,3,4,5,6,6,54,3,]
for (let index in numer){
  let output = index
  console.log([output]);
}

var nun = [1,2,3,4,5,7]
var target = []
for (let arr of nun){
  for (let arry of nun){
    if (arr + arry === target){
      console.log(target[numOne, arry])
    }
  }
}

// for (var a = 1; a<=100; a+=10){
//   console.log(a)/*1
//                   11
//                   21
//                   31
//                   41
//                   51
//                   61
//                   71
//                   81
//                   91 */
// for (var b = a; b < a+10; b++){
//   console.log(b)
// }                
// }

// for (let i=1;i <= 5; i++){
//   let rowOut = " ";
//   for (let j=1; j <= i; j++){
//     console.log(rowOut += j + " ")
//   }  
// }

for (let i = 1; i <= 5; i++)/*outer loop, rows*/{
  let ro = " ";
  for (let j=1; j<= 6; j++)/*inner loop, innner loop*/{
    ro += '* ';
  }
  console.log(ro)
}

//2// hollow rectangle
let m=4;
let n=5;
for (let i=1; i<=n; i++){
  let ro = " ";
  for (let j=1; j<=m; j++){
    if(i==1 || j==1 || i==n || j==m){
      ro += "* "
    }else{
      ro +="  "
    }
  }
  console.log(ro);
}

//3rd ///
let y = 4;
for (let i=1; i<=y; i++){
  let ros = " ";
  for (let j=1; j<=i; j++){
    // if (i==j){
    //   ros +="* "
    // }else{
    //   ros +=" "
    ros += "* "
    }
    console.log(ros)
  }
let p=5;
for (let i=p; i >= 1; i--){
  let rs = " ";
  for (let j=1 ;j<=i;j++){
    rs +="* "
  }
  console.log(rs);
}
let nus = 4;
for (let i = 1; i <= nus; i++) {
  let b = " ";
  for (let j = 1; j <= nus - i; j++) {
    b += " ";
  }
  for (let o = 1; o <= i; o++) {
    b += "*";
  }
  console.log(b);
}

n=5;
for (let i=1; i<=n; i++){
  let nb = " ";
  for (let j=1; j<=i; j++){
    nb += j;
  }
  console.log(nb)
}

o=5;
for (let i=1; i<=o; i++){
  let obj = " "
  for(let j=1; j<=n-i+1; j++){
    obj +=j;
  }
  console.log(obj);
}

let nui = 5;
let numberss = 1;
for (let i=1; i<=nui; i++){
  let ouj = " ";
  for (let j=1; j<=i; j++){
    ouj += numberss + " ";
    numberss++;
  }
  console.log(ouj);
}
//
let nn = 5;
for (let i=1; i<=nn; i++){
  let kl = " ";
  for (let j=1; j<=i; j++){
    let summ = i+j;
    if (summ % 2==0){
      kl += "1 ";
    }else {
      kl +="0 ";
    }
  }
  console.log(kl)
}
//Butterfly//
n = 8;
for (let i=1; i<=n; i++){
  let bom = " ";
  for (let j=1; j<=i; j++){
    bom += "* "
  }
  for (let d=1; d<=2*(n-i); d++){
    bom +="  "
  }for(let d=1; d<=i; d++){
    bom +="* "
  }
  console.log(bom)
}for (let i=n; i>=1; i--){
  let bom = " ";
  for (let j=1; j<=i; j++){
    bom += "* "
  }
  for (let d=1; d<=2*(n-i); d++){
    bom +="  "
  }for(let d=1; d<=i; d++){
    bom +="* "
  }
  console.log(bom)
}
//SOLID RHOMBUS?//
n=7;
for (let i=1; i<=n; i++){
  let rum = " ";
  for (let j=1; j<=n-i; j++){
    rum +="  "
  }for(let d=1; d<=n; d++){
    rum +="* "
  }
  console.log(rum)
}
//NUMber Pyramid//
n=5;
for (let i=1; i<=n; i++){
  let nuo = " ";
  for (let j=1; j<=n-i; j++){
    nuo += " "
  }for (let d=1; d<=i; d++){
    nuo += i + " ";
  }
  console.log(nuo)
}
// Palindrome pattern // those pattern look similair from back and front e.g. BOB, 121
n=9;
for (let i=1; i<=n; i++){
  let nuo = " ";
  for (let j=1; j<=n-i; j++){
    nuo += "  "
  }
  for (let d=i; d>=1;d--){
    nuo +=d + " "
  }for (let j=2; j<=i; j++){
    nuo +=j + " "
  }
  console.log(nuo)
}

n = 5;
for (let i=1; i<=n; i++){
  let on = " ";
  for (let j=1; j<=n-i; j++){
    on +=" ";
  }for(let j=1; j<=2*i-1; j++){
    on +="*"
  }
  console.log(on)
}
for (let i=n; i>=1; i--){
  let on = " ";
  for (let j=1; j<=n-i; j++){
    on +=" ";
  }for(let j=1; j<=2*i-1; j++){
    on +="*"
  }
  console.log(on)
}

//Hollow butterfly //
n = 5;

for (let i = 1; i <= n; i++) {
  let bom = "";
  for (let j = 1; j <= i; j++) {
    if (i === j || j === 1) {
      bom += "* ";
    } else {
      bom += "  ";
    }
  }
  for (let d = 1; d <= 2 * (n - i); d++) {
    bom += "  ";
  }
  for (let d = 1; d <= i; d++) {
    if (i === d || d === 1) {
      bom += "* ";
    } else {
      bom += "  ";
    }
  }
  console.log(bom);
}

for (let i = n; i >= 1; i--) {
  let bom = "";
  for (let j = 1; j <= i; j++) {
   if (i === j || j === 1) {
      bom += "* ";
    } else {
      bom += "  ";
    }
  }
  for (let d = 1; d <= 2 * (n - i); d++) {
    bom += "  ";
  }
  for (let d = 1; d <= i; d++) {
   if (i === d || d === 1) {
      bom += "* ";
    } else {
      bom += "  ";
    }
  }
  console.log(bom);
}
//hollow Rhombus //
n=7;
for (let i=1; i<=n; i++){
  let rum = " ";
  for (let j=1; j<=n-i; j++){
    rum +="  ";
  }
  for(let d=1; d<=n; d++){
    if (i===1 || d===1 || d===n || i==n){
      rum +="* ";
    }else {
      rum +="  ";
    }
  }
  console.log(rum);
}

n=5;
for (let i=1; i<=n; i++){
  let rosb = " ";
  for (let j=1; j<=i; j++){
    rosb +="* "
  }
  for (let j=n-1; j>=i; j--){
    rosb +="? ";
  }
  for (let j=n-1; j>=i; j--){
    rosb +="? "
  }

  console.log(rosb)
}

n=5; 
for (let i=1; i<=n; i++){
  let rsb = " ";
  for (let j=1; j<=i; j++){
    if (j==1 || i===j){
      rsb +="* "
    }else {
      rsb +="  "
    }
  }for(let j=n-1; j>=i; j--){
    rsb +="  "
  }for(let j=n-1; j>=i; j--){
    rsb +="  "
  }
  for (let j=1; j<=n; j++){
    if (j==1 || i===j){
      rsb +="* "
    }else {
      rsb +="  "
    }
  }
  console.log(rsb)
}
for (let i=n; i>=1; i--){
  let rsb = " ";
  for (let j=1; j<=i; j++){
    if (j==1 || i===j){
      rsb +="* "
    }else {
      rsb +="  "
    }
  }for(let j=n-1; j>=i; j--){
    rsb +="  "
  }for(let j=n-1; j>=i; j--){
    rsb +="  "
  }
  for (let j=1; j<=n; j++){
    if (j==1 || i===j){
      rsb +="* "
    }else {
      rsb +="  "
    }
  }
  console.log(rsb)
}

//PASCAL PYRAMID//
n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += binomialCoefficient(i, j) + " ";
  }
  console.log(" ".repeat(n - i - 1) + row);
}

function binomialCoefficient(n, k) {
  if (k === 0 || k === n) {
    return 1;
  } else {
    return binomialCoefficient(n - 1, k - 1) + binomialCoefficient(n - 1, k);
  }
}

n=8;
for (let i=1; i<=n; i++){
  let rob = " ";
  for (let j=1; j<=n; j++){
    rob +="  "
  }
  for (let j=n; j>=i; j--){
    rob +=" "
  }
  for (let j=1; j<=i; j++){
    rob +="* "
  }
  console.log(rob)
}
for (let i=1; i<=n; i++){
  yi = " ";
  for (let j=1; j<=i-1; j++){
    yi +="  "
  }
  for (let j=n; j>=i; j--){
    yi +="* ";
  }
  for (let j=1; j<= n; j++){
    yi +="* "
  }
  for (let j=5; j>=i; j--){
    yi +="* ";
  }
  console.log(yi)
}
for (let i=1; i<=n; i++){
  let nm = " ";
  for (let j=1; j<= n; j++){
    nm +=" "
  }
  for (let j=n; j>=i; j--){
    nm +=" "
  }
  for (let j=n; j>=i; j--){
    nm +="* "
  }
  for (let j=n; j>=i; j--){
    nm +=""
  }
  for (let j=1; j<=i-1; j++){
    nm +="  "
  }
  // for (let j=i; j>=n; j--){
  //   nm +="* ";
  // }
  console.log(nm)
}

n=5
for (let i=1; i<=n; i++){
  let ron =" ";
  for (let j=i;j<=n-1; j++){
    ron +="  "
  }
  for (let j=i;j<=n; j++){
    if ((i+j)%2!==0){
      ron +="* "
    }
  }
 // console.log(ron)
}

n=5
for(let i=1; i<=n; i++){

}