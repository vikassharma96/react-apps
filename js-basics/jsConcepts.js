/*
There are 8 basic data types in JavaScript.
1.number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
2.bigint is for integer numbers of arbitrary length.
3.string for strings. A string may have zero or more characters, there’s no separate single-character type.
4.boolean for true/false.
5.null for unknown values – a standalone type that has a single value null.
6.undefined for unassigned values – a standalone type that has a single value undefined.
7.object for more complex data structures.
8.symbol for unique identifiers.
*/

// Nullish coalescing operator '??'
// The result of a ?? b is: if a is defined, then a, if a isn’t defined, then b

function showMessage(name) {
  // parameter name default value in undefined
  // function always gets a copy of the value
  name = "*" + name + "*";
  console.log(name); // *vikas*
}

let nam = "vikas";
showMessage(nam);
console.log(nam); // vikas

console.log(0 || "vikas"); // vikas
console.log(0 ?? "vikas"); // 0

// Callback functions
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  console.log("You agreed.");
}

function showCancel() {
  console.log("You canceled the execution.");
}

// functions showOk, showCancel are passed as arguments which are callback functions to ask
ask("Do you agree?", showOk, showCancel);

// Function Declaration and Function Expression
console.log(sum1(1, 2)); // works
console.log(sum2(1, 2)); // throw error sum2 is not a function

// Function Declaration
// A Function Declaration can be called earlier than it is defined.
function sum1(a, b) {
  return a + b;
}

// Function Expression
// A Function Expression is created when the execution reaches it and is usable only from that moment.
let sum2 = function (a, b) {
  return a + b;
};

// hoisting - we can access varibales and function even before initializing
// Execution context Gloabl this
console.log(x);
console.log(demo);
console.log(getAge);
var x = 10;
var a1 = 10;
var getAge = () => {
  console.log("age");
};
function demo() {
  var a1 = 20;
}
demo();
// console.log(window.a); // only work in window host browser
console.log(this.a);
const a = 5; // const need to be initialized
var a2 = 10;
let b = 20;
function abcd() {
  var a2 = 20;
  // b = 30;
  console.log(b);
}
abcd();
console.log(a2);
console.log(b);

// Block scope
var name = {
  name: "vikas",
  age: "25",
};
if (true) {
  var a3 = 10; // global scope
  let b2 = 20; // block scope
  console.log(a3, b2);
}

// Closure - Function along with it's lexical environment forms Closures
function abc() {
  var x = 10;
  function b() {
    let a = 20;
    console.log(x, a);
  }
  return b;
}
const z = abc();
z();

function closure() {
  for (var i = 1; i <= 5; i++) {
    function close() {
      var x = i;
      // setTimeout(() => {
      //   console.log(x);
      // }, x * 1000);
    }
    close();
  }
}
closure();

// First class function - we can pass function as argument ability to use function as value
// Anonymous function, function argument, function declaration
console.log(fun);
var fun = function () {
  console.log("called...");
};
console.log(fun);
fun();

function main(paramter) {
  // setTimeout(function () {
  //   paramter();
  // }, 2000);
}

const argument = () => {
  console.log("function passed");
};
main(argument);

let MyName = {
  firstName: "Vikas",
  lastName: "Sharma",
  getFullName: function (arg1, arg2) {
    // each function in js has this keyword here this refers to name object
    console.log(this.firstName + " " + this.lastName + " " + arg1, arg2);
  },
};

let getFullName2 = function (pockemon) {
  console.log(this.firstName + " " + this.lastName + " " + pockemon);
};

getFullName2.call(MyName, "pikachu");

// MyName.getFullName();

let MyName2 = {
  firstName: "Vikku",
  lastName: "Sharma",
};

// function borrowing
MyName.getFullName.call(MyName2, "doremon", "nobita");

// Only difference in call and apply is the way we pass argument
MyName.getFullName.apply(MyName2, ["doremon", "nobita"]);

// bind method it return copy of the function and bind to the object and return for
// later call
var printMyName = getFullName2.bind(MyName2, "nobita");
printMyName();

// currying in js
let multiply = function (x, y) {
  console.log(x + y);
};
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiply2 = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyByTwo2 = multiply2(2);
multiplyByTwo2(5);

// Prototype, Prototypal Inheritance
// hidden properties attach to function, array, object, e.t.c through prototypes
// It an object that is attach to each and every method,object,array,function or whatever we create
// arr.__proto__.flat
// Array.prototype
// arr.__proto__.__proto__ which is object proptotype

// we can change code on html page using javascript
// document.getElementById('someId').innerHTML = 'Hey Vikas'

// Map, Filter, Reduce Functions
var array = [1, 2, 3, 2, 5, 6];
var map = array.map(function (n) {
  return n * 2; // return anything
});
console.log(array, "map", map);

var filter = array.filter(function (n) {
  return n % 2 == 0; // return boolean
});
console.log(array, "filter", filter);

// var reduce = array.reduce(function (accumulator, current) {
//   return accumulator + current; // reduce all the values inside of an array into 1
// });
const sumReducer = (initialValue, currentValue) => {
  console.log(initialValue, currentValue);
  return initialValue + currentValue;
};
var reduce = array.reduce(sumReducer, 0);
console.log(array, "reduce", reduce);

// Spread operator
console.log("....spread operator");
const arrayOne = [4, 3, 2, 1];
const arrayTwo = [5, 6, 7, 8];
const concatArray = [...arrayOne, ...arrayTwo];
concatArray.forEach((num, index) => {
  console.log(index, num);
});
const myName = "vikas";
const nameArray = [...myName];
console.log(nameArray);

// Spread operator with objects
const userName = {
  firstName: "Vikas",
  secondName: "Sharma",
};
const address = {
  country: "India",
};
const person = { ...userName, ...address };
console.log(JSON.stringify(person));

// lexical and this keyword
const newPerson = {
  myName: "Vikas",
  cars: ["ferari", "lambo"],
  toString: function () {
    // console.log(`${this.myName} has ${this.cars}`);
    this.cars.forEach(
      function (car) {
        console.log(`${this.myName} has ${car}`);
      }.bind(this)
    );
    // if we use arrow function then this bind to object itself
    this.cars.forEach((car) => {
      console.log(`${this.myName} has ${car}`);
    });
  },
};
newPerson.toString();

// Enhanced object property
const pricePropertyName = "PRICE";
const calculator = (name) => {
  return {
    name,
    add: function (n1, n2) {
      return n1 + n2;
    },
    enhancedAdd(n1, n2) {
      return n1 + n2;
    },
    [pricePropertyName.toLocaleLowerCase()]: "10$",
  };
};
const calc = calculator("casio");
console.log(calc.name, calc.add(10, 20), calc.enhancedAdd(10, 20), calc.price);

// Array destructuring
const names = ["taylor", "katherin", "scarlet"];
// const taylor = names[0];
// const katherin = names[1];
// const scarlet = names[2];
const [taylor, katherin, scarlett] = names;
console.log(`${taylor} ${katherin} ${scarlett}`);
// Object destructuring
const { firstName, secondName: lastName } = person;
console.log(firstName, lastName);
const userAddress = {
  country: "United States",
  city: "California",
  postCode: "CA",
  fullAddress: {
    doorNumber: 22,
    street: "LA st",
  },
  age: 21,
};
const {
  fullAddress: { doorNumber: MyDoorNumber },
} = userAddress;
console.log(MyDoorNumber);

// Function default parameters
const calculatePay = (
  yearlySalary,
  bonus = {
    teamBonus: 10,
    employeeBonus: 5,
  },
  extra = 0
) => {
  return yearlySalary + bonus.teamBonus + bonus.employeeBonus + extra;
};
console.log(`$${calculatePay(1000, { teamBonus: 100, employeeBonus: 10 })}`);

// Classes - blueprints with properties and behaviours
class Animal {
  // invoke everytime we create instance of animal class
  constructor(name, age) {
    console.log(`${name} animal was created`);
    this.name = name;
    this.age = age;
  }
  static aStaticMethod() {
    console.log("static method");
  }

  eat() {
    console.log(`${this.name} is eating...`);
  }
  age() {
    console.log(this.age);
  }
}

const animalObject = new Animal("elephant", 2);
animalObject.eat();
Animal.aStaticMethod();

// Inheritance
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  breedName() {
    console.log(this.breed);
  }
  dogAge() {
    super.age();
  }
}

const dogObject = new Dog("human", 2, "Bulldog");
dogObject.eat();
dogObject.breedName();
dogObject.dogAge();

/* 
Promises - The promise object is used for asynchronous computations. Represents a value
be avilable now, in future, or never.
Promises states - 
1. Pending - initial state, not Fulfilled or rejected.
2. Fulfilled - meaning the operation completed successfully. - then() method for fulfilled
3. Rejected - meaning the operation rejected. - catch() method for rejected
*/
const promise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("data back from server");
  }, 2000);
  setTimeout(function () {
    resolve("no data from server, there was an error");
  }, 1000);
});
promise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
// Prommise.All - all promise need to fulfilled otherwise we encountered error
const namesPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(["kathrine", "drake", "maroon5", "katy"]);
  }, 3000);
  setTimeout(function () {
    reject("no data from server, there was an error one of request failed");
  }, 5000);
});
const surnamesPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(["langford", "drake", "maroon5", "perry"]);
  }, 3000);
  setTimeout(function () {
    reject("no data from server, there was an error one of request failed");
  }, 5000);
});
Promise.all([namesPromise, surnamesPromise])
  .then((data) => {
    const [names, surnames] = data;
    for (let idx = 0; idx < names.length; idx++) {
      const name = names[idx];
      const surname = surnames[idx];
      console.log(`${name} ${surname}`);
    }
    // console.log(data);
  })
  .catch((error) => console.log(error));

// Promise and fetch api
const getRandomUsers = (n) => {
  // fetch({
  //   url: `https://randomuser.me/api/?results=${n}`,
  //   method: "get",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  // })
  fetch(`https://randomuser.me/api/?results=${n}`)
    .then((response) => {
      response.json().then((randomUsers) => {
        // console.log(JSON.stringify(randomUsers));
        console.log(randomUsers.results.length);
        randomUsers.results.forEach((user) => {
          const { gender, email } = user;
          console.log(gender, email);
        });
      });
    })
    .catch((error) => console.log(error));
};
getRandomUsers(2);

/* 
Generators - function that can be pause
Syntax - 
function* numbersGen() {
  const value = yield value;
  const numOne = yield 1;
}
const gen = numbersGen();
gen.next()
gen.next().value
gen.next().done
*/
const getValues = function* () {
  yield 1;
  yield "hello";
  yield true;
  yield { name: "vikas" };
};
const valueGen = getValues();
console.log(valueGen.next()); // object { value : 1, done : false }
console.log(valueGen.next().value); // "hello"

const getNumbers = function* (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    yield numbers[i];
  }
};
const getNumbersGen = getNumbers([1, 2, 3, 4, 5]);
const interval = setInterval(() => {
  const next = getNumbersGen.next();
  if (next.done) {
    console.log("generator done");
    clearInterval(interval);
  } else {
    const number = next.value;
    console.log(number);
  }
}, 1000);

// Async Await
async function logName(name) {
  console.log(name);
  // 1.we can yield promises using await
  const transformName = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name.toUpperCase());
    }, 6000);
  });
  const result = await transformName;
  console.log(result);

  // 2.return a promise
  return name;
}
logName("vikas").then((res) => {
  console.log("result from async", res);
});

const getUpdatedRandomUser = async (n) => {
  try {
    const fetchUsers = await fetch(`https://randomuser.me/api/?results=${n}`);
    const data = await fetchUsers.json();
    data.results.forEach((user) => {
      const { name, email } = user;
      console.log(name, email);
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
getUpdatedRandomUser(4);
