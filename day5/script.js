// for(i=0;i<100;i++){
//     console.log("hello")
// }

// for(let i=1;i<=5;i++){
//     console.log(i)
// }

// for (let i = 1; i <= 15; i += 3) {
//   console.log(i);
// }

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`5*${i}=${5 * i}`);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// console.log("blast off!");

// missing updation>>>>>>>>>>>>

// for (let i = 1; i <= 5;) {
//   console.log(i);
// }

// wrong updating direction>>>>>>>>>>>>

// for (let i = 1; i >= 1; i++) {
//   console.log(i);
// }

// omitting the condition>>>>>>

// for (let i = 1; ; i++) {
//   console.log(i);
// }

// proper updation>>>>>>

// for(let i=1;i<=5;i++){
//     console.log(i);
// }

// correct direction>>>>>>

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// nested>>>>>>>>>>>>>>>>>
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 6; j++) {
//     console.log([i], [j]);
//   }
// }

// basic>>>>>>>>>>>>>>>>>>>>>
// for (let i = 1; i <= 3; ) {
//   console.log("outer loop:${i}");
//   for (let j = 1; j <= 3; j++) {
//     console.log("inner loop:${j}");
//   }
// }

// multiplication table>>>>>>>>>>>>>>>>>>>>>>
// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= 5; j++) {
//     row += i * j + "\t";
//   }
//   console.log(row);
// }

// pattern prting>>>>>>>>>>>>>>>>>>>>??

// for (let i = 1; i <= 10; i++) {
//   let pattern = "";

//   for (let j = 1; j <= i; j++) {
//     pattern += "* ";
//   }
//   console.log(pattern);
// }

// for (let i = 1; i < 5; i++) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars = stars + "1";
//   }
//   console.log(stars);
// }

// console.log("*");
// console.log("**");
// console.log("***");
// console.log("****");
// console.log("*****");
// console.log("******");

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// infinite loop with while>>>>>>>>>>>

// let count = 0;
// while (count < 5) {
//   console.log(count);
// }

// fixed while loop

// let count=0;
// while(count<5){
//     console.log(count);
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//for(let row =1;row<=4;row++){
//let line="";
//for(col=1;col<=4;col++){
//	line+= `(${row},${col})`;
//}
//console.log(line);
//}//
//inverted triangle pattern>>>>>>>>>>>>>
//for (let i=5;i>=1;1--){
//	let pattern ="";
//	for (let j=1;j<=i;j++){
//	pattern+="* ";
//	}
//	console.log(pattern);
//}

//let i=1;
//while(i<=6){
//	console.log(i);
//	i++;
//}//

//sum numbers until target reached>>>>>>>>>>>>>
//let sum=0;
//let num=1;
//while(sum<50){
//sum+=num;
//console.log(`added${num},sum is now${sum}`);
//num++
//}//
//console.log(`final sum:${sum}`)

//password validation>>>>>>>>>>>>>>>
//let password="";
// let attempts=0;
// while(password !=="secret123"&&attempts<3){
//	 attempts++;

//	 if (password ==="secret123"){
//		 console.log("access granted");
//	 }else if (attempts<3){
//		 console.log(`wrong password.${3-attempts}attempts remaining.`);
//	 }else {
//		 console.log("access denied.too many attempts")
//	 }
// }

//Halving Until Below Threshold>>>>>>>>>>

//let number=1000;
//while(number>1){
//number=number/2
//	console.log(number)
//}
//Finding First Power of 2 Greater Than Value>>>>>>>>>>>>>>>>
//let target=1000;
//let power=1;
//let exponent=0;

//while(power<=target){
//exponent++;
//power=2**exponent;
//}
//console.log(`2^${exponent} = ${power} is the first power of 2 greater than ${target}`);

//let choice;
//do {
//console.log("Menu:");
//console.log("1. Play");
//console.log("2. Settings");
//console.log("3. Exit");
//choice = prompt("Enter your choice:");
//if (choice === "1") {
//console.log("Starting game...");
//} else if (choice === "2") {
//console.log("Opening settings...");
//}
//} while (choice !== "3");
//console.log("Goodbye!");

//Dice Roll Until Six>?>>>>>>>>>>

//let roll;
//let attempts = 0;
//do {
//roll = Math.floor(Math.random() * 6) + 1; // Random 1-6
//attempts++;
//console.log(`Roll ${attempts}: ${roll}`);
//} while (roll !== 6);
//console.log(`Got a 6 after ${attempts} attempts!`);

//Input Validation - Must Be Positive>>>>>>>>>>>>>>>>>>>>>>>

// let number;
// do {
//   number = prompt("Enter a positive number:");
//   number = Number(number);
//   if (number <= 0 || isNaN(number)) {
//     console.log("Invalid input. Please enter a positive number.");
//   }
// } while (number <= 0 || isNaN(number));
// console.log(`You entered: ${number}`);
// let teams = [["burhan", "saad"], ["shark"], "bunny"];
//for (let i=0;i<teams.length;i++){
//let colours = ["red","blue","green"];
//for (let colour of colours){
//	console.log(colour);
//}
// let language ="javascript";
// for(let char of language){
// //	console.log(char);
// }
// for(let j-0;j<teams[i].length;j++){
// 	console,log(teams[i][j]);
// 	}

