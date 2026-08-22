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

function table(table) {
  for (let i = 1; i <= 10; i++) {
    const result = i * table;
    console.log(result);
  }
}



table();
