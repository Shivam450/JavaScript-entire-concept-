// lesson 4 = Javascript Decision statement
/* if satement
 ==> it is used to check a single contion/ option.
      if the condition is the true than take it, if it false then just skip*/
    //   if (condition) {
    //     //statement if the condiotion is true than it is executed , or it is false then skipped
    //   }
      if(3>2)/* ture condition*/{
        console.log("i just got executed")
      }
      if (2>3)/*False condition*/{
        console.log("It not executed")
      }
/* if else
 it is use dto check a single condition,
 option available.
 if the condition is true then take it, IF it is false then else condition will executed*/
//  if (condition) {
//     // condition true then print 
//  } else {
//     // condition false this executed
//  }

if (10!=9) {
    console.log("hey i am true")
} else {
    console.log("hey I am false")
}
// if else ladder statemnet / nested if else statement
if (10 == 9){
console.log("line 31 ture")
} else if (10!=9){
    console.log("line 33")// executed
}else{
    console.log("line 35")
}

var a = -4;
if (a <= 0){
    console.log("it is numer out of scope")
}else if (a%2!=0){
    console.log("it is odd")
}else {
    console.log("it is even")
}
/* switcted statment
you can select the particular case and condition mathces case then executed scope = case*/
/*switch(n) {
    case 1: //statements
    break
    case 2:// statements
    break
    case 3:// statements
    break
    case 4:// statements
    break
    default:
        console.log()
}   */
var a = 4;
switch (a)/* here name of var should write*/  {
    case 4:
        console.log("i am from case 1")
        break;
    case 3:
        console.log("i am case 2")
    default:
        console.log("plase enter a valid number")
        break;
}

/*Control statement 
 */
/* nested statement 
NESTed IF
 => IF statement within a if statement and so on.
 => The NESTED IF acts like && operator both condition true then and only {
    */ if (6>5)/*true then */{
        if(3>2){
            console.log("hello")
        }
    }
// we use && operator instead of nested if-else
if (6>5 && 9>8 && 6>5 && 8>6 && 9>8){
    console.log("it is true")
}
// example of NESTED IF-ELSE is Filter in amazon(we've made an filter)
// example of switch is ATM (fixed case or fixed value) 

//Nested SWitch
switch (a) {
    case 'Withdraw':
        var b = "what you enter an atm machine"
        switch (b) {
            case '1000':
            case '2000':
            case '3000':
            case '4000':
            case 'custom':
                var a = p
                
                break;
        
            default:
                break;
        }
        break;

    default:
        break;
}
var a = "banglore"
switch (a) {
    case 'banglore':
        case 'mumbai':
            console.log("I am present in Banglore and mumbai")
            break;
    case 'chennai':
    case 'Delhi':
        console.log('I am present in both chennai and delhi')
    default: 'entered city does not exist'
        break;
}