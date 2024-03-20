/* JS Arrays */

/* order in a list: [0,1,2,3,4] */
const list = ["apples", "banana", false, 42, 23, [1, 2, 3]]; // 5 Elemente

/* Adding elements in the back of the list */
console.log(list);
list.push("pineapple"); // +1 Element = 6 Elemente im Array
console.log(list);

let lastIndex = list.length - 1;
let lastElement = list[lastIndex];
console.log(lastElement);

console.log(list.at(-1));

/*  Adding elements in the front of the list */
/* 
console.clear();
console.log(list);
list.unshift("orange", "kiwis");
console.log(list); */

/* Removing elements */
/* console.clear();
console.log(list);
list.pop(); //removes the last element
console.log(list); */

/* console.clear();
console.log(list);
list.shift(); //removes the first element
console.log(list); */

/* console.clear();
console.log(list);
list.splice(2, 1);
console.log(list); */

/* Create copy of an array */
const copiedList = list.slice(); //shallow copy
copiedList.push("kiwi");

//lists are different
console.log(list);
console.log(copiedList);

/* You can mix objects and arrays */
console.clear();
const person = { name: "Max", age: 45, favoriteMovies: ["hulk", "deadpool"] };
console.log(person);

const arrayOfObjects = [{ name: "Max", age: 22 }, { name: "Petra" }];
console.log(arrayOfObjects[0].name);
