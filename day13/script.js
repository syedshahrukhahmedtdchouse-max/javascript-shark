// callback?

// function greet(name,callback){
//     console.log("hello,"+name);
//     callback()
// }
// function sayGoodbye(){
//     console.log("goodbye!")
// }
// greet("alice",sayGoodbye)

// Callbacks with Asynchronous Operations>>>>>>>>>>>>>>>

// function fetchstudentData(studentId,callback){
//     console.log("fetching data for student ID:",studentId)
//     setTimeout(()=>{
//         let studentData={
//             id:studentId,
//             name:"rahul sharma",
//             course:"computer science"
//         };
//         console.log("data fetch succesful!")
//         callback(studentData);
//     },2000)
// }
// function displaystudent(data){
//     console.log("Dispalying student");
//     console.log("name:",data.name);
//     console.log("course:",data.course);
// }
// fetchstudentData(101,displaystudent)

// function serviceVehicle(carModel, phoneNumber) {
//   console.log("received", carModel, "for service");
//   console.log("customer can leave now");
//   setTimeout(() => {
//     console.log("service complete!");
//     phoneNumber();
//   }, 3000);
// }
// function customerCallback() {
//   console.log("📞 Ring ring! Your car is ready!");
//   console.log("Customer returns to pick up car");
// }
// serviceVehicle("Honda City", customerCallback);


// 6. Callback Hell (The Pyramid of Doom)>>>>>>>>>>>>>>>
