// 1. Introduction to Modern Array Methods

// Real-World Analogy

// Example 1: Print all numbers

// let numbers = [10,20,30,40];
// numbers.forEach((num)=>{
//     console.log(num);
// });

// 2example>>>>>>>>>>>>>>>>>add price symbol

// let prices = [99,149,299];
// prices.forEach((price)=>{
//     console.log(`$ ${price}`);
// });

// Example 3: Print with index>>>>>>>>>>>>>>>>>>>>>>>>>..>>>>

// let fruits = ["apple","banana","mango"];
// fruits.forEach((fruit,index)=>{
//     console.log(`${index + 1}.${fruit}`)
// });

//4example>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>calculate total in foreach

// let scores = [85,90,78,92];
// let total = 0;
// scores.forEach((score)=>{
//     total+=score;
// });
// console.log(`total:${total}`);

// 5example>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let names = ["alice","bob","charlie"];
// let capitalizedName=[];
// names.forEach((name)=>{
//     capitalizedName.push(name.toUpperCase());
// });
// console.log(capitalizedName);




// 3. The map Method
// Example 1: Double all numbers?>>>>>>>>>>>>>>>>>>>>>>>>

// let nums = [1,2,3,4];
// let doubled = nums.map((num)=>num*2);
// console.log(doubled);
// console.log(nums);

// Example 2: Convert to uppercase>>>>>>>>>>>>>>>>>>>>>

// let names = ["alice","bob","charlie"];
// let upperName = names.map((name)=>name.toUpperCase());
// console.log(upperName)


// Example 3: Extract properties from objects>>>>>>>>>>>>>>>>>>>>>


// let students = [
// { name: "John", age: 20 },
// { name: "Sarah", age: 22 },
// { name: "Mike", age: 21 }
// ];
// let studentNames = students.map((student) => student.name);
// console.log(studentNames);


// Example 4: Add sales tax

// let prices = [100, 200, 150];
// let pricesWithTax = prices.map((price) => price * 1.18);
// console.log(pricesWithTax);

// Example 5: Create HTML elements

// let items = ["Home", "About", "Contact"];
// let menuItems = items.map((item) => `<li>${item}</li>`);
// console.log(menuItems);

// 4. The filter Method

// Example 1: Get even numbers>>>>>>>>>>>>

// let numbers = [1,2,3,4,5,6,7,8,];
// let evens = numbers.filter((num)=>num%2===0);
// console.log(evens);


// Example 2: Get passing grades>>>>

// let grades = [45, 78, 89, 34, 92, 56];
// let passing = grades.filter((grade) => grade >= 50);
// console.log(passing);

// Example 3: Filter by string length>>>>>>>>>>>>


// let words = ["hi", "hello", "bye", "goodbye"];
// let longWords = words.filter((word) => word.length > 5);
// console.log(longWords);
// in this we founc that i gives lenght 

// Example 4: Filter adults>>>>>>>>>>>>>>>>

// let people = [
// { name: "John", age: 17 },
// { name: "Sarah", age: 22 },
// { name: "Mike", age: 15 },
// { name: "Emma", age: 25 }
// ];
// let adults = people.filter((person) => person.age >= 18);
// console.log(adults);

// Example 5: Remove specific items

// let cart = ["apple", "banana", "apple", "mango", "apple"];
// let withoutApples = cart.filter((item) => item !== "apple");
// console.log(withoutApples);


// 5. some and every Methods>?>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Example 1: Check if all are adults


// let ages = [20, 25, 18, 30];
// let allAdults = ages.every((age) => age >= 18);
// console.log(allAdults);

// Example 2: Check if any teenager exists

// let ages = [20, 25, 17, 30];
// let hasTeenager = ages.some((age) => age < 18);
// console.log(hasTeenager);

// Example 3: Validate form fields>>>>>>>>>>>>

// let formFields = ["John", "john@email.com", "password123"];
// let allFilled = formFields.every((field) => field.length > 0);
// console.log(allFilled);

// Example 4: Check if any negative number>>>
// let numbers = [5,10,-3,20];
// let hasnegative=numbers.some((num)=>num<0);
// console.log(hasnegative)
