import { iteratee } from "lodash";
import { compose, pipe } from "lodash/fp";

// Functions -

function sayHello() {
  return "hello vikas";
}

function greet(fnMessage) {
  console.log(fnMessage());
}

greet(sayHello);

function anonymousHello() {
  return function () {
    return "hello vikas";
  };
}

let fn = anonymousHello();
let message = fn();
console.log(message);

// Higher order functions -
// Higher order functions is a function which takes function as an argument or return
// it or both

function greet(fn) {
  console.log(fn());
}

function sayHello() {
  return function () {
    console.log("Hello vikas");
  };
}

let numbers = [1, 2, 3];
numbers.map((number) => number * 2);

setTimeout(() => console.log("timeout"), 1000);

// Function composition -

let input = "     JavaScript    ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;

const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

const result = wrapInDiv(toLowerCase(trim(input))); // function composition
console.log(result);

const toLowerCase = (str) => str.toLowerCase();

// composing and piping -

const transform = compose(wrapInDiv, toLowerCase, trim); // order is problem here
transform(input);

const transform = pipe(trim, toLowerCase, wrapInDiv);
console.log(transform(input));

// currying -
// trechnique to convert N argument => 1

function add(a) {
  return function (b) {
    return a + b;
  };
}

const addResult = (a) => (b) => a + b;

add(1)(5);

const transform = pipe(trim, toLowerCase, wrap("span"));
console.log(transform);

// Pure functions
// same arguemnts => same result

// no random value, no current data/time, no global state(dom, files, db e.t.c)

function isEligible(age, minAge) {
  // everything this function need should pass in parameters so it's a
  // pure function
  return age > minAge;
}

// Immutability -
// in js objects and array are not immutable js is not pure functional lang
// In pure functional lang we cannot mutate data

// if we building app with redux we don't mutate data as this is fundamental principal
// but outside redux do what needed

const person = { name: "vikas" };
const updatedPerson = Object.assign({}, person, { name: "vik", age: "24" });
console.log(updatedPerson);

updatedPerson = { ...person, name: "vikas" };
console.log(updatedPerson);

// shallow copy
const person = {
  name: "Vikas Sharma",
  address: {
    country: "USA",
    city: "San Fransico",
  },
};

const updated = { ...person, name: "Vikas" };
updated.address.city = "New York";
console.log(person); // address.city will become new york as it is a reference
// to avoid this we have
// deep copy
const updated = {
  ...person,
  address: {
    ...person.address,
  },
  name: "Vikas",
};

// Updating arrays -
const numbers = [1, 2, 3];
const index = numbers.indexOf(2);
// Adding
const updatedNumers = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log(updatedNumers);
// Removing
const remove = numbers.filter((n) => n !== 2);
// Updating
const updated = numbers.map((n) => (n === 2 ? 20 : n));
console.log(updated);

// Enforcing immutability -
// Libraries - immutable, immer

let book = { title: "Rich Dad And Poor Dad" };
function publish(book) {
  book.isPublished = true; // mutating object
}
publish(book);
console.log(book);

// to avoid mutating we use immutable object
import { Map } from "immutable";

let book = Map({ title: "Rich Dad And Poor Dad" });
console.log(book.get("title"));
function publish(book) {
  return book.set("isPublished", true); // immutatable object
}
book = publish(book);
console.log(book.toJS());

// Immer - better than immutable
import { produce } from "immer";

let book = { title: "Rich Dad And Poor Dad" };

function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true; // here we write like mutating object
  }); // immutatable object
}

let updateBook = publish(book);
console.log(updateBook);
