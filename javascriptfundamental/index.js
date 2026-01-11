// //Rest Operator
// function sum(...number) {
//   console.log(`Proforming of addition ${number}`);
// }
// console.log("sum of 3 number", sum(1, 2, 3));

// function createTeam(teamName, captain, ...members) {
//   return {
//     TeamName: teamName,
//     CaptainName: captain,
//     OtherMember: members,
//   };
// }

// const teams = createTeam("Avengers", "Iron Man", "Thor", "Hulk", "Black Windo");
// console.log(teams);
// // Array Destructor
// const colors = ["red", "green", "yellow", "blue", "purple"];
// const [primaryColor, SecondoryColor, ...otherColor] = colors;
// console.log("PrimaryColor", primaryColor);
// console.log("Secondory", SecondoryColor);
// console.log("OtherColor", otherColor);
// const person = {
//   name: "Jhon",
//   age: 23,
//   city: "Goa",
//   job: "Developer",
//   hobbi: ["criket", "bick riding"],
// };
// const { name, age, ...other } = person;
// console.log("Name", name);
// console.log("age", age);
// console.log("Other", other);

//----------------Spered Operator------------------

//1. Expanding Array
const number = [1, 2, 3];
//console.log(...number);
//2. combining array
const furits = ["apple", "orange"];
const vegitable = ["carrot", "patato"];
const prodece = [...furits, ...vegitable];
//console.log(prodece);
//3. Copying array
const numberArray = [...number];
//console.log(numberArray);
//4. copying object
const person = { name: "Jhon", age: 23 };
const personCopy = { ...person };
//console.log(personCopy);

//5. Adding propertory while coping
const personCopyAndAdd = { ...person, hobby: "reading", age: 31 };
console.log(personCopyAndAdd);
