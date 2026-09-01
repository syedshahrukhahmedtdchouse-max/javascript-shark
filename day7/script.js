// function sayhello(){
//     console.log("hello world!")
// }
// //function calling
// sayhello();
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function intro(){
//     console.log("my name is shahrukh");
//     console.log("and my age is 21");
//     console.log("i live in hyderabad");
//     console.log("thank you");
// }
// intro();
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function greet(){
//     console.log("welcome to javascript!")
// }
// greet();
// greet();

// // example2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function showmsg(){
//     console.log("learning functions is fun!")
// }
// showmsg();

// example3>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function introduction() {
// console.log("My name is JavaScript");
// console.log("I was created in 1995");
// console.log("I run in browsers");
// }
// introduction();

// 2functions with arguments>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function functionName(parameter1, parameter2) {
// // code that uses the parameters
// }

// function greetUser(name){
//     console.log("hello,"+ name + "!");
// }
// greetUser("SAAD");
// greetUser("burhan");
// greetUser("shahrukh");
// greetUser("alice");
// greetUser("bob");
// greetUser("charlie");

// 2example>>>>>>>>>>>>>>>>>>>>>>>>
// function addnumber(a,b){
//     let sum = a+b;
//     console.log("sum is:"+sum)
// }
// addnumber(5,3);
// addnumber(10,20);

// 3example>>>>>>>>>>>>>>>>>>>>>>>>>
// function calcaverage(a,b,c){
//     let avg = (a+b+c)
//     console.log(avg);

// }
// calcaverage(10,20,30);
// calcaverage(9,90,1);

// 4example>>>>>>>>>>>>>>>>>>>>
// function createmsg(name,age){
//     console.log(name + "is" + "years old")
// }
// createmsg("sarah,25")
// createmsg("shark,20")

// 5example>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function calculatearea(length,width){
//     let area = length * width;
//     console.log("area is:"+ area);
// }
// calculatearea(5,10);
// calculatearea(7,3)

// the return keyword>>>>>>>>>>>>>>>>>>>>>
// function sum(a,b){
//     return a + b
// }
// let result = sum(10,5);
// console.log(result)
// let total = sum(100,200);
// console.log(total);

// exaple2>>>>>>>>>>>>>>>>>
// function multiply(x,y){
//     return x*y;
// }
// let answer = multiply(4,5);
// console.log(answer);
 
// console.log(multiply(3,7))

// 3exmple>>>>>>>>>>>>>>>>>>>>
// function test(){
//     return 10;
//     console.log("this will never print");
// }
// let value = test();
// console.log(value);
// 4example>>>>>>>>>>>>>>>>>>>
// function getprice(){
//     return 50;
// }
// let price = getprice()
// let tax = price*0.1;
// let total = price + tax;
// console.log(total)
// 5eaxmple>>>>>>>>>>>>>>>>>>>>>>>>
// function getgreeting(name){
//     return "hello,"+ name;
// }
// let message = getgreeting("burhan");
// console.log(message);
// console.log(getgreeting("bob"));


// undertanding scope>>>>>>>>>>>>>>>>>>>>>>>>
// basic function scope>>>>>>>>>>>>>>>>>>>>>
// function showscore(){
//     let score = 100;
//     console.log(score)
// }
// showscore();
// // console.log(score)

// 2example>>>>>>>>>>>>>

// function func1() {
// let x = 10;
// console.log(x); // 10
// }
// function func2() {
// let x = 20;
// console.log(x); // 20
// }
// func1(); // Output: 10
// func2(); // Output: 20


// example 4>>>>>>>>>>>>>>>>>>>>>>>>>>


// if (true) {
// let temp = 42;
// console.log(temp); // Works: 42
// }
// console.log(temp); // Error: temp is not defined



// 5example>>>>>>>>>>>>>>>>>>>>>


// {
// let secret = "Hidden";
// console.log(secret); // Works: Hidden
// }
// console.log(secret); // Error: secret is not defined



// function outer() {
// let x = 5;
// function inner() {
// console.log(x); // Inner can see 'x'
// }
// inner();
// }
// outer(); // Output: 5

