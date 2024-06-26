///////////////25th Jan ////////////////////////
// what is JS OPerators
//=> it is special type of symbol which perform ssome action or a particular


// Arithmatic OPerator //////////////
var a = 5;
var b = 10;

console.log(a+b);//15
console.log(a-b);//-5
console.log(a*b)//50
console.log(a/b)//0.5
console.log(2**2) // exponent 2 sqaure of 2
console.log(5%3)//2
console.log(a++) // increment is the value increased by one
console.log(a--)// decrement is the value decreased by one
console.log(a++); // post increment
console.log(++a); //pre increment

// Bitwise OPerator ////////////

var a =3 // binary number of 3 is  011 
var b = 5 // binary number of 5 is 101
                    //ootupt ===// 001
console.log(3&5)// ootput 1 b'cuz binary 1=001

console.log(3 | 5);  //3=011
                     //5=101
        //OR operator o/p=111=7
console.log(3^5);  // o/p XOR operator = 110=6

//lesft shift 
console.log(a<<2);//3=011 from left shift and two digit are droped
// we use 64-bit OS
//00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000011 == represent 3 in 64-bit OS
//  000000 00000000 00000000 00000000 00000000 00000000 00000000 00000011                                  here left shift two digit are droped
//  000000 00000000 00000000 00000000 00000000 00000000 00000000 00000011 00                  here right hand side that droped digit were added
//00000000 00000000 00000000 00000000 00000000 00000000 00000000 00001100 == here we adjust that 2 digit and 1100=12 so, ans was 12
console.log(b<<2);// 5==101 
//10100==20   16    8     4    2     1(power)  
//            1     0     1    0     0
//            16    +     4           = 20 (consider only 1 binary number power and add them) 
//(<<) this means left shift and digit are droped
// (>>) this means right shift zeros aer added
 
console.log(6<<3);// here we wanna take 6==110 and 3 is the shift
/* 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000110
      00000 00000000 00000000 00000000 00000000 00000000 00000000 00000110
   00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000110 000 (b'cuz of 3 shift we shift)
   00000000 00000000 00000000 00000000 00000000 00000000 00000000 00110000*/
   
// so, 110000 == 48 
//Comparison  operator
//  < ,> ,<= ,>= ,== ,!= ,=== ,!==
console.log(4<7) // true
console.log(4>7) // false
console.log(4<=7)// flase
console.log(7<7) // false
console.log(4>=7)// false
console.log(5=="5")// true
console.log(5==="5")// false data type different
console.log(3!=4)// true
console.log(4!=="4")// true,     value and data type checked.. watched 25 min

/// Logical operators

// &&   ||    ! 

console.log(4<5 && 6<7)  // 1 && 1 // 1 // ture.   both condition true

console.log(4<5 || 6>7) //  true || false  // ture
console.log(!(4<5 && 6<7)) // here o/p = !(true)= o/p=false

// concatenation //
console.log("age is" + " 18")// concate

// unary operator 
console.log(typeof true)

// binary operators 
console.log(true && false)//  false

// ternary operator 
console.log(true)

console.log(4^3);

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}