const fruits = ["Banana", "Orange", "apple", "Mango"];
fruits.sort();
//console.log(fruits);
fruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(fruits);
