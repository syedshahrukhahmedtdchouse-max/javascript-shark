// identifer rules>>
// characters allowed letters (A-B),a-z)digits (0-9)underscores(_) and dollar signs ($)
// no space:identifier cannot contain spaces
// starting character: must begain with letter
// case sensitivty:userAge or userage are different variable
// reserved words:cannot use javascript keywords like let,const,var



// valid example>>> problem1
// let username123 = "beinshark"
// let _privatevariable = "beinshark"
// let $specialvalue = "beingshark"
// let total_AMOUNT= "BEINGBEING"
// // case sensitivty>>problem2
// let userAge=25
// let userage=30
// let UserAge=35
// let USERAGE=40
// console.log(userAge)
// console.log(userage)
// console.log(UserAge)
// console.log(USERAGE)



// RESERVED WORDS >>> PROBLEM3
// let letvariable = 10
// let ifcondition = 20
// let functionName = 30




// common mistake to avoid>>>>>>>>>>>>>>>>>>
// 1problem hypens and underscore
// let user_name = "alice"
// let username = "alice"


// starting with Number>> problem2
// let 1stplace="gold" error

// let firstplace = "gold"
// let place1st = "gold"
// let ballons99 = 99

// special chararcter problem3??
// let my$variable=10 


// camelCase>>>>>>>>>
// let userName="alice"

// snake case>>>>>>>>>
// let user_name = "alice"

// pascalcase>>>>>
// skip

// screaming snake_case>>>>>>>?
// const MAX_LOGIN_ATTEMPTS = 3



// BOOLEANS AND DYNAMIC TYPING>>>>>>>>>
// let isloggedin=true
// let isover18=false

// boolean condition>>>
// let isStudent = true

// if(isStudent){
//     console.log("student discount applied")
// } else {
//     console.log("regular")
// }



// Boolean Expressions>>>>>
// skip

// Common Boolean Use Cases>>>

// let isloggedin = true;
// let isadmin = false;
// let isverified = true;

// if(isloggedin){
//   console.log("student discount applied")
// }
// if(isadmin){
//   console.log("student discount applied")
// }


// Dynamic Typing: JavaScript vs TypeScript>>>>>>
// let x=5
// console.log(typeof x)

// x=true;
// console.log(typeof x)

// x=[1, 2, 3];
// console.log(typeof x);

// // example>>>>
// function addNumbers(a, b) {
// return a + b;
// }
// console.log(addNumbers(5, 10)); // 15 ✓
// console.log(addNumbers("5", 10)); // "510" ⚠️ Unexpected string concatenation!
// console.log(addNumbers(5, "10")); // "510" ⚠️




// // single quotes>>>>>>
// let firstName = 'Alice';
// let greeting = 'Hello, World!';
// let message = 'It\'s a beautiful day';
// console.log(message)

// // double quotes>>>
// let message = "She said, \"Hello!\"";
// console.log(message)

// bacxkticks>>>>>
// let message = `It's a "beautiful" day`;
// let tick = `she said me  "love you"`
// console.log(tick)

// String Properties and Methods>>>>>>>
// lenth 

// let name = "alice";
// console.log(name.length)

// String Indexing>>>>>>>>

// let city = "london"
// console.log(city[0])
// console.log(city[1])
// console.log(city[3])




// Practical Examples
// let email = "alice@example.com";
// if (email[0] =='@') {
// console.log("Email cannot start with @");
// }
//  else {
// console.log("Email format might be valid");
// }

// Example 2: Getting Initials>>>>>>>>>
// let firstName = "alice";
// let lastname = "smith"
// let initials = firstName [0]+ lastname[0]
// console.log(initials)

// let formal = "firstname"[0]+"."+"lastname"[0]+".";
// console.log(formal)



// Example 3: Character Validation?
// skip



// Strings are Immutable:

