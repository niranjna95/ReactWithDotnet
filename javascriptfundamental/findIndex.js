const numbers = [5, 12, 34, 45, 78];
const findNumber1 = numbers.find((e) => e === 5);
const findNumber2 = numbers.find((e) => e !== 5);
const findNumber3 = numbers.find((e) => e === 15);
//console.log(findNumber3);
const findIndex12 = numbers.findIndex((e) => e === 12);
//console.log(findIndex12);
const students = [
  { id: 1, name: "Rohit", grade: 67 },
  { id: 2, name: "Amir", grade: 89 },
  { id: 3, name: "Ajit", grade: 78 },
];

const findStudnet = students.find((student) => student.grade > 80);
console.log(findStudnet);
