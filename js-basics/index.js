console.log("Hello World");
let name = "vikas";
console.log(name);
const interestRate = 0.3; // can't be reassigned
// interestRate = 1;
console.log(interestRate);
let age = 24;
age = null; // null used to explicitely cleared value of variables
console.log(typeof name);
name = 1;
console.log(typeof name);
let firstName = undefined;
console.log(typeof firstName);
let selectedColor = null;
console.log(typeof selectedColor);

let person = {
  // {} represents object literal
  name: "vikas",
  age: "24",
};
person.name = "vikas sharma";
console.log(person);

// two access object property we have 2 ways
// 1.Dot notation
console.log(person.name);
// 2.Bracket notation
console.log(person["name"]);

let selection = "name";
person[selection]; //dynamic property using bracket notation

// Arrays
let selectedColors = ["red", "blue"]; // object in the array and size are dynamic array is object in javascript
selectedColors[2] = 1;
console.log(selectedColors.length);
console.log(selectedColors);
console.log(selectedColors[0]);

//Functions
function greet(name) {
  // parameter of greet func
  console.log("Hi" + name);
}

greet("vikas"); // argument of greet func

let x = 1;
console.log(x !== 1);
// Strict equality operator (Type + Value)
console.log(x === 1); // true
console.log("1" === 1); // false
// Loose equality operator  (Value)
console.log(x == 1); // true
console.log("1" == 1); // true so it look at left side and auto convert to right side
console.log(true == 1); // true

// Read, Write, Execute
// 00000100, 00000010, 00000001
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);
let message = myPermission & 4 ? "yes" : "no";

let role;
switch (role) {
  case "guest":
    console.log("guest");
    break;
  case "moderator":
    console.log("moderator");
    break;
  default:
    console.log("unknown user");
}

// to create object we have factory functions and constructor functions

// factory functions produces objects camel casing
function createCircle(radius, location) {
  return {
    radius, // radius : radius equal to radius
    location,
    isVisible: true,
    draw() {
      console.log("draw");
    },
    // draw : function() {
    //     console.log('draw');
    // }
  };
}

const circle1 = createCircle(1, {
  x: 1,
  y: 2,
});
console.log(circle1);

// constructor function pascal casing
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1); // new first create empty object {} then set this to point object then return
console.log(circle);

Circle.call({}, 1);
Circle.apply({}, []);

circle.color = "red";
delete circle.color;
// Function are objects internally java engine uses constructor property

// for in loop
for (let key in circle) {
  console.log(key, circle[key]);
}

// for of loop only used with iterables
// for(let key of circle){ // gives error
//     console.log(key)
// }

for (let key of Object.keys(circle)) {
  console.log(key, circle[key]);
}

if ("radius" in circle) console.log("yes");

// clone an object
const another = Object.assign({}, circle);
// spread operator
const another1 = { ...circle };
const s = "1"; // primitive type
const s1 = new String("1"); // object type

// map
const numbers = [1, -2, 2, -1];
const filtered = numbers.filter((n) => n >= 0);
const items = filtered.map((n) => "<li>" + n + "</li>");
const html = "<ul>" + items.join("") + "</ul>";
console.log(html);

// var and let
// var create function-scoped
// let const create block-scoped

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this, tag);
    }, this);
  },
};

video.showTags();
