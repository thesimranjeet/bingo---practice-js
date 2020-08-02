// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>> console.log('hello');</h1>`;

// console.log('hello');

// console.log('>>>>>>>>>>>>>>>>>>>');

// let camelize = function ( str ) {
//   return str.split('-').map((word,index) => index == 0 ? word: word[0].toUpperCase() + word.slice(1)).join('');
// }

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// console.log('>>>>>>>>>>>>>>>>>>>');

// let filterRange = function ( ar , a , b) {
//   return ar.filter( (x) => x>=a && x<=b)
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // 3,1 (matching values)

// console.log( arr ); // 5,3,8,1 (not modified)

// console.log('>>>>>>>>>>>>>>>>>>>');

// let filterRangeInPlace = function(ar , a , b ) {
//   ar.map( function(x , i , ar) {
//     if(!(a<=x && x<=b)){
//       ar.splice(i,1);
//     }
//     }
//   );
// }

// let arr = [5, 3, 8, 1];

// (filterRangeInPlace(arr, 1, 4)); // removed the numbers except from 1 to 4

// console.log( arr ); // [3, 1]

// console.log('>>>>>>>>>>>>>>>>>>>');

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a,b) => b-a);// ... your code to sort it in decreasing order

// console.log( arr ); // 8, 5, 2, 1, -10

// console.log('>>>>>>>>>>>>>>>>>>>');

// let copySorted = function(ar) {
//   return ar.filter((a)=>a).sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (no changes)

// console.log(">>>>>>>>>>>>>>>>>>>");

// function Calculator() {

//   this.methods = {
//     '+' : (a, b) => a + b,
//     '-' : (a, b) => a - b,
//   };
  
//   this.calculate = function(str) {
//     let a = str.split(" ");
//     let x = +a[0];
//     let y = +a[2];
//     return this.methods[a[1]](x,y);
//   };

//   this.addMethod = function(s,str) {
//     this.methods[s]=str;
//   };
// }

// let calc = new Calculator();

// console.log(calc.calculate("3 + 7")); // 10

// let powerCalc = new Calculator();
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// console.log(result); // 8

// console.log(">>>>>>>>>>>>>>>>>>>");

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(i=>(i.name));

// console.log( names ); // John, Pete, Mary

// console.log(">>>>>>>>>>>>>>>>>>>");

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(
//   function(i) {
//     let o = {
//       fullName : i.name + ' ' + i.surname,
//       id : i.id,
//     }
//     return o;
//   }
// )

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith

// console.log(">>>>>>>>>>>>>>>>>>>");

// let sortByAge = function(arr) {
//   arr.sort( (a,b) =>a.age - b.age);
// }


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete


// console.log(">>>>>>>>>>>>>>>>>>>");

// let shuffle= function(arr) {
//   arr.sort((a,b)=> Math.random()-0.5);
// }

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// console.log(arr);

// shuffle(arr);
// // arr = [2, 1, 3]

// console.log(arr);

// shuffle(arr);
// // arr = [3, 1, 2]

// console.log(arr);
// // ...

// console.log(">>>>>>>>>>>>>>>>>>>");

// let getAverageAge =function(arr) {
//   return arr.reduce((a,i)=> a+i.age , 0) / arr.length;
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// console.log(">>>>>>>>>>>>>>>>>>>");

// function unique(arr) {
//   /* your code */
//   return arr.reduce(
//     function(a,i) {
//       if(!a.includes(i)) {
//        a.push(i);
//       }
//       return a;
//     },
//     []
//   )
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log( unique(strings) ); // Hare, Krishna, :-O

console.log(">>>>>>>>>>>>>>>>>>>");

let groupById = function(arr) {
  return arr.reduce(
    function(a,i) {
      a[i.id]=i;
      return a;
    } ,
    {}
  )
}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

console.log(usersById);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/