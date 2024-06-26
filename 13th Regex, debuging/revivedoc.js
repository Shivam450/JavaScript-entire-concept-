//Regex and Debugging
const Strng = "cat are Cat meow";
let nume = 123456
const matchregex = /cat/gi;
const match = Strng.match(matchregex)
console.log(match)// here we match string

// Sample text containing digits
let text = "The price of the product is $99.99.";

// Define a regex pattern to match any digit
let pattern = /\d/g;

//Define regex pattern to match a digit and print only alphabet
let not_digit = /\D/g;
let text_matches = text.match(not_digit)
console.log(text_matches)

// Use match() to find all occurrences of the pattern in the text
let matches = text.match(pattern);

// Print the matches
console.log("Matches found:", matches);


let gmailmath = /@\w+\.\w{2,3}(\.\w{2,3})/
let gmail = "mishra.shivam1234.upendra@gmail.com"
let final_patter = gmail.match(gmailmath)
console.log(final_patter)


//test== is used to give output as true or false
const regex1 = /dog/;
const strr = 'I have a dog.';
const hasDog = regex1.test(strr)
console.log(hasDog) // true

//2nd == match or exec()
const hasDOg2 = regex1.exec(strr)
console.log(hasDOg2);
//same match also

//3rd == replace()
const replace1 = strr.replace(regex1, "cat")
console.log(replace1)

//1st Search Split
const search2 = strr.search(regex1);
console.log(search2) // output was index number

//4th == Split
const regex5 = /\s+/;
const splt = strr.split(regex5)
console.log(splt)


//problems


////
var str = "123 456 789";
var result = str.split(/\s+/);
console.log(result);

//
const regex = /[amn]/;
const string = "abcd";
console.log(regex.test(string));

//
var text1 = "testing: 1, 2, 3"
var pattern2 = /d+/g;


//
let myString = "hello world";
let [a, b, c, d, e, f, g, h, i, j, k] = myString;
console.log(k);