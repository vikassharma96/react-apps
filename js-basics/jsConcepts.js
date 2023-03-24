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
// ask("Do you agree?", showOk, showCancel);

// Function Declaration and Function Expression
console.log(sum1(1, 2)); // works
// console.log(sum2(1, 2)); // throw error sum2 is not a function

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

// Named function expression (NFE)
let sayHiThere = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest"); // use func to re-call itself
  }
};
sayHiThere(); // Hello, Guest
// But this won't work:
// func(); // Error, func is not defined (not visible outside of the function)

// hoisting - we can access varibales and function even before initializing
// Execution context Gloabl this
/*
Everything in javascript happends inside an execution context
              |  memory  |  code  |
JS is synchronous single threaded language
Execution context created in 2 phases 
1. creation or memory creation phase
2. code execution phase
To manage execution context js uses call stack.
hoisting - we can access varibales and function even before initializing
Execution context Globle this
To avoid hoisting, we can run javascript in strict mode by using “use strict” on top
of the code
*/
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

// There are three types of scopes in JS:
// 1.Global Scope 2. Local or Function Scope 3.Block Scope
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
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}
let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
// a nested function can be returned: either as a property of a new object or as a result by
// itself. It can then be used somewhere else. No matter where, it still has access to the same
// outer variables.

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

/* 
call() method allows an object to use the method (function) of another object.
There’s a special built-in function method func.call(context, …args) that allows to call a function explicitly setting this.
As an example, in the code below we call sayHi in the context of different objects: sayHi.call(user) runs sayHi providing this=user, and the next line sets this=admin
function sayHi(phrase) {
  alert(this.name + phrase);
}
let user = { name: "John" };
let admin = { name: "Admin" };
// use call to pass different objects as "this"
sayHi.call(user, "hello"); // John
sayHi.call(admin); // Admin

The only syntax difference between call and apply is that call expects a list of arguments, while apply takes an array-like object with them.
apply will probably be faster, because most JavaScript engines internally optimize it better.
Passing all arguments along with the context to another function is called call forwarding
*/
function sayHello() {
  return "Hello " + this.name;
}
var obj = { name: "Vikas" };

sayHello.call(obj);

let MyName = {
  firstName: "Vikas",
  lastName: "Sharma",
  getFullName: function (arg1, arg2) {
    // each function in js has this keyword here this refers to name object
    console.log(this.firstName + " " + this.lastName + " " + arg1, arg2);
  },
};

let getFullName2 = function (pokemon) {
  console.log(this.firstName + " " + this.lastName + " " + pokemon);
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

/* 
Currying in js
Currying is an advanced technique to transform a function of arguments n, to n functions of one or less arguments.
For Example, if we have a function f(a,b) , then the function after currying, will be transformed to f(a)(b).
Advanced curry implementation
In case you’d like to get in to the details, here’s the “advanced” curry implementation for multi-argument
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}
let curriedSum = curry(sum);
alert( curriedSum(1, 2, 3) ); // 6, still callable normally
alert( curriedSum(1)(2,3) ); // 6, currying of 1st arg
alert( curriedSum(1)(2)(3) ); // 6, full currying
*/
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

function add(a) {
  return function (b) {
    return a + b;
  };
}
add(3)(4);

// Prototype, Prototypal Inheritance
// All javascript objects inherit properties from a prototype.
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

// Rest parameters (...)
// Using the rest parameter syntax, we can create functions that can take a variable number of arguments.
// Any number of arguments will be converted into an array using the rest parameter.
function extractingArgs(...args) {
  return args[1];
}
extractingArgs(8, 9, 1); // Returns 9

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
let userObj1 = new Object(); // "object constructor" syntax
let userObj2 = {}; // "object literal" syntax
const userName = {
  firstName: "Vikas",
  secondName: "Sharma",
};
const address = {
  country: "India",
};
const person = { ...userName, ...address };
console.log(JSON.stringify(person));

/* lexical and this keyword
 this keyword always refers to the object that is calling the function
 In the arrow functions, there is no binding of the this keyword.
 The this keyword inside an arrow function, does not refer to the object calling it. 
 It rather inherits its value from the parent scope which is the window object in this below case
 */

var obj1 = {
  valueOfThis: function () {
    return this;
  },
};
var obj2 = {
  valueOfThis: () => {
    return this;
  },
};

obj1.valueOfThis(); // Will return the object obj1
obj2.valueOfThis(); // Will return window/global object

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

// Object references and copying
let userObj = { name: "Vikas Sharma" };
let admin = userObj;
admin.name = "Vikas"; // changed by the "admin" reference
console.log(userObj.name); // 'Vikas', changes are seen from the "user" reference
console.log(admin == userObj); // true
console.log(admin === userObj); // true
// copying
let newUserObj = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// copies all properties from permissions1 and permissions2 object into newUserObj
Object.assign(newUserObj, permissions1, permissions2);
// now newUserObj = { name: "John", canView: true, canEdit: true }
newUserObj = { ...newUserObj, ...permissions1, ...permissions2 }; // clone using spread operator

// Property existence test, “in” operator
let userObject = { name: "vikas", age: 25 };

console.log("age" in userObject); // true, userObject.age exists
console.log("blabla" in userObject); // false, userObject.blabla doesn't exist

for (let key in userObject) {
  // keys
  console.log(key); // name, age, isAdmin
  // values for the keys
  console.log(userObject[key]); // John, 30, true
  /*
  Are objects ordered? In other words, if we loop over an object, do we get all properties in 
  the same order they were added? Can we rely on this? 
  The short answer is: “ordered in a special fashion”: integer properties are sorted, others 
  appear in creation order.
  */
}

// Computed properties
let fruit = "apple";
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};
console.log(bag.apple); // 5 if fruit="apple"

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

// Array
/*
1. pop - Extracts the last element of the array and returns it:
2. push - Append the element to the end of the array:
3. shift - Extracts the first element of the array and returns it:
4. unshift - Add the element to the beginning of the array:
5. splice - How to delete an element from the array? The arrays are objects, so we can try to use delete
let arr = ["I", "go", "home"];
delete arr[1]; // remove "go"
alert( arr[1] ); // undefined
// now arr = ["I",  , "home"];
alert( arr.length ); // 3
The element was removed, but the array still has 3 elements, we can see that arr.length == 3.
That’s natural, because delete obj.key removes a value by the key. It’s all it does. Fine for 
objects. But for arrays we usually want the rest of elements to shift and occupy the freed place. We expect to have a shorter array now.
So, special methods should be used.
The arr.splice method can do everything: insert, remove and replace elements.
The syntax is: arr.splice(start[, deleteCount, elem1, ..., elemN])
It modifies arr starting from the index start: removes deleteCount elements and then inserts 
elem1, ..., elemN at their place. Returns the array of removed elements.
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1, "study more"); // from index 1 remove 1 element
alert( arr ); // ["I", "study more", "JavaScript"]
negative indixes allowed
let arr = [1, 2, 5];
// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);
alert( arr ); // 1,2,3,4,5

6. slice - It returns a new array copying to it all items from index start to end (not including end). 
Both start and end can be negative, in that case position from array end is assumed.
let arr = ["t", "e", "s", "t"];
alert(arr.slice(1, 3)); // e,s (copy from 1 to 3)
alert(arr.slice(-2)); // s,t (copy from -2 till the end)

7. Searching in array
indexOf/lastIndexOf
let arr = [1, 0, false];
alert(arr.indexOf(0)); // 1
alert(arr.indexOf(false)); // 2
alert(arr.indexOf(null)); // -1
alert(arr.includes(1)); // true
arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
arr.lastIndexOf(item, from) – same, but looks for from right to left.
arr.includes(item, from) – looks for item starting from index from, returns true if found.
8. find - ind an object with the specific condition
let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});
9. filter - The find method looks for a single (first) element that makes the function return true.
If there may be many, we can use arr.filter(fn).
The syntax is similar to find, but filter returns an array of all matching elements:
let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});

10 - Transform an array
Map - The arr.map method is one of the most useful and often used.
It calls the function for each element of the array and returns the array of results.
let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});
Sort - 
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
let arr = [ 1, 2, 15 ];
arr.sort(compareNumeric);
alert(arr);  // 1, 2, 15
Reduce - reduce is used to calculate a single value based on the array
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15
*/

/*
Map - Map is a collection of keyed data items, just like an Object. But the main difference is 
that Map allows keys of any type.
Methods and properties are:
new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
unlike objects, keys are not converted to strings in map.
*/

// Array destructuring
const names = ["taylor", "katherin", "scarlett"];
// const taylor = names[0];
// const katherin = names[1];
// const scarlet = names[2];
const [taylor, katherin, scarlett] = names;
console.log(`${taylor} ${katherin} ${scarlett}`);
// Object destructuring
// Object destructuring is a new way to extract elements from an object or an array.
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
be available now, in future, or never.
Promises states - 
1. Pending - initial state, not Fulfilled or rejected.
2. Fulfilled - meaning the operation completed successfully. - then() method for fulfilled
3. Rejected - meaning the operation rejected. - catch() method for rejected

Promises are used to handle asynchronous operations in JS. Before promises, callbacks were 
used to handle asynchronous operations. But due to limited functionality of callback, 
using multiple callbacks to handle asynchronous code can lead to unmanageable code.
Promise object has four states - 1.Pending 2.Fullfilled 3.Rejected 4.Settled

A promise is created using the Promise constructor which takes in a callback function with 
two parameters, resolve and reject respectively.

                            resolve(value)     state: "fullfilled"
new Promise(Executor)      |------------------ result: value
state: "pending" --------- |reject(error)      state: "rejected"
result: undefined          |------------------ result: error 

Consuming functions can be registered (subscribed) using methods .then, .catch and .finally                                      
*/
const promise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("data back from server");
  }, 2000);
  setTimeout(function () {
    reject("no data from server, there was an error");
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

// dealy with a promise
function delayWithPromise(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
delayWithPromise(3000).then(() => console.log("runs after 3 seconds"));

//Promise chanining
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 2
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 4
    return result * 2;
  });

/* 
Microtasks - Microtasks queue
Promise handlers .then/.catch/.finally are always asynchronous.
Even when a Promise is immediately resolved, the code on the lines below .then/.catch/.finally will still execute before these handlers.
let promise = Promise.resolve();
promise.then(() => alert("promise done!"));
alert("code finished"); // this alert shows first
*/

/* 
Async/await
The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.
async function f() {
  return 1;
}
f().then(alert); // 1

We could explicitly return a promise, which would be the same:
async function f() {
  return Promise.resolve(1);
}
f().then(alert); // 1

The keyword await makes JavaScript wait until that promise settles and returns its result.
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });
  let result = await promise; // wait until the promise resolves (*)
  alert(result); // "done!"
}
f();

Can’t use await in regular functions
If we try to use await in a non-async function, there would be a syntax error:
function f() {
  let promise = Promise.resolve(1);
  let result = await promise; // Syntax error
}
*/

/* 
Generators - function that can be pause
Introduced in ES6 version, generator functions are a special class of functions they can 
be stopped midway and then continue from where it had stopped.
Syntax - 
function* numbersGen() {
  const value = yield value;
  const numOne = yield 1;
}
const gen = numbersGen();
gen.next()
gen.next().value
gen.next().done

Regular functions return only one, single value (or nothing).
Generators can return (“yield”) multiple values, one after another, on-demand. They work great with iterables, allowing to create data streams with ease.

Generators are iterable
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

for(let value of generator) {
  alert(value); // 1, then 2
}
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

// Immediately Invoked Function(IIFE) in JavaScript
// function that runs as soon as it is defined
(function () {
  console.log("run as soon as defined");
});

// Higher Order Functions
// Functions that operate on other functions, either by taking them as arguments or by
// returning them, are called higher-order functions.
function higherOrder(fn) {
  fn();
}
higherOrder(function () {
  console.log("Hello world");
});

function higherOrder2() {
  return function () {
    return "Do something";
  };
}
var x = higherOrder2();
x(); // Returns "Do something"

// This Keyword
// The “this” keyword refers to the object that the function is a property of.
// The value of “this” keyword will always depend on the object that is invoking the function.
function doSomething() {
  console.log(this); // since the function is invoked in a global context, the function
  // is the property of global object
  // in strict mode it gives undefined
}
doSomething();

// Constructor Function in JS
// Constructor functions are used to create objects in javascript.
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
var person1 = new Person("Vikas", 25, "male");
console.log(person1);

// Callback Function in JS
// Functions that are used as an argument to another function are called callback functions

// DOM (Document object model)
// DOM is a programming interface for HTML and XML documents. When the browser tries to
// render a HTML document, it creates an object based on the HTML document called DOM. Using
// this DOM, we can manipulate or change various elements inside the HTML document.

// Optional chaining
// The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.
// ?. for value or ?.() for function that may not exist
let userAdmin = {
  admin() {
    console.log("I am admin");
  },
};
let userGuest = {};
userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing (no such method)

// Tricky JS Questions
console.log(2 + "2"); // 22
console.log(2 - "2"); // 0

console.log(5 < 6 < 7); // true
console.log(7 > 6 > 5); // false

let nums = [1, 2, 2, 3]; // remove duplicates
console.log([...new Set(nums)]);

let func = function () {
  {
    let l = "vikas";
    var v = "sharma";
  }
  console.log(l); // will throw error
  console.log(v); // it print as var has function scope
};
// now to avoid accesing var outside we can use IIFE(immediately invoked function expression)
let func2 = function () {
  {
    (function () {
      let l = "vikas";
      var v = "sharma";
    })();
  }
  console.log(l); // will throw error
  console.log(v); // will throw error
};

let aFunc = function () {
  return arguments; // give all the arguments
};

let bFunc = () => arguments; // don't use arguments with arrow function
console.log(aFunc("hi")); // will not print argument 'hi'
// as arrow function doesn't bind very well with arguments
// can be used like this
let bAnotherFunc = (...n) => {
  return n;
};

// Arrow functions have no “this”
// Arrow functions are special: they don’t have their “own” this. If we reference this from such
// a function, it’s taken from the outer “normal” function. For instance, here arrow() uses this
// from the outer user.sayHi() method:
let userr = {
  firstName: "Sharma",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  },
};
userr.sayHi(); // Sharma
function makeUser() {
  return {
    name: "John",
    ref: this, // it's undefined as called as function
  };
}
let usereNew = makeUser();
console.log(usereNew.ref.name); // Here the value of this inside makeUser() is undefined, because it is called as a function, not as a method with “dot” syntax.
let profile = {
  name: "vikas",
};

// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     }
//   };
// }
// let user = makeUser();
// alert( user.ref().name ); // John

// Constructor, operator "new"
/*
The regular {...} syntax allows to create one object. But often we need to create many similar 
objects, like multiple users or menu items and so on.
That can be done using constructor functions and the "new" operator.
Constructor function
Constructor functions technically are regular functions. There are two conventions though:
They are named with capital letter first.
They should be executed only with "new" operator.
When a function is executed with new, it does the following steps:
1.A new empty object is created and assigned to this.
2.The function body executes. Usually it modifies this, adds new properties to it.
3.The value of this is returned.
In other words, new User(...) does something like:
function User(name) {
  // this = {};  (implicitly)
  // add properties to this
  this.name = name;
  this.isAdmin = false;
  // return this;  (implicitly)
}
*/
function User(name) {
  this.name = name;
  this.isAdmin = false;
}
let userrr = new User("Jack");
console.log(userrr.name); // Jack
console.log(userrr.isAdmin); // false

Object.freeze(profile); // to make profile object read only now we can't change object
// property and not able to add new propery.
profile.age = "25"; // will do nothing

let profile2 = {
  name: "vikas",
};
Object.seal(profile2); // with seal we can change property to object but can't add it
profile2.age = "25"; // will do nothing
profile2.name = "vikas sharma"; // will change

let profile3 = {
  name: "vikas",
};
Object.defineProperty(profile3, "age", {
  // now we can't change age but can change name
  value: "20",
  writable: false,
});
profile3.name = "vikas sharma"; // will change
profile3.age = "25"; // will do nothing

let newArray = [5, 4, 2, 1, 10, 20];
newArray.sort(); // [1,10,2,20,4,5]
// it will not sort as expected as js consider it as string so to sort we have to pass a callback func
newArray.sort((a, b) => (a > b ? 1 : -1)); // both are same
newArray.sort((a, b) => a - b); // both are same

let xa = [1, 2, 3] + [4, 5, 6];
console.log(xa); // "1,2,34,5,6"
let xaa = [...[1, 2, 3], ...[4, 5, 6]];
console.log(xaa); // [1,2,3,4,5,6]

// debounce function
const debounce = (fun, delay) => {
  let timeout;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fun(...args);
    }, delay);
  };
};

const onClick = debounce(() => {
  console.log("cliked");
}, 2000);

/*
Scheduling: setTimeout and setInterval - 
We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.
There are two methods for it:
1.setTimeout allows us to run a function once after the interval of time.
2.setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
*/
function timeOutFunc(phrase, who) {
  console.log(phrase + ", " + who);
}
setTimeout(timeOutFunc, 1000, "Hello", "Vikas"); // Hello, Vikas
// A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.
let timerId = setTimeout(() => console.log("hi there will not print"), 300);
clearTimeout(timerId);

function intervalFunc() {
  clearInterval(timerId);
  console.log("called after a particular interval");
}
timerId = setInterval(intervalFunc, 500);

// Nested SetTimeout
let ctr = 0;
let newTimerId = setTimeout(function tick() {
  console.log("tick tick...");
  ctr++;
  newTimerId = setTimeout(tick, 1000); // (*)
  if (ctr === 5) {
    clearTimeout(newTimerId);
  }
}, 1000);
/* Nested setTimeout allows to set the delay between the executions more precisely than setInterval.
let i = 1;
setInterval(function() {
  func(i++);
}, 100);
The real delay between func calls for setInterval is less than in the code!
That’s normal, because the time taken by func's execution “consumes” a part of the interval.
It is possible that func's execution turns out to be longer than we expected and takes more than 100ms.
In this case the engine waits for func to complete, then checks the scheduler and if the time is up, runs it again immediately.
In the edge case, if the function always executes longer than delay ms, then the calls will happen without a pause at all.
let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
}, 100);
The nested setTimeout guarantees the fixed delay (here 100ms).
Any setTimeout will run only after the current code has finished.
*/

/*
cached function
*/
function slow(x) {
  // there can be a heavy CPU-intensive job here
  console.log(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      // if there's such key in cache
      return cache.get(x); // read the result from it
    }
    let result = func(x); // otherwise call func // in case of object we use func.call(this,x)
    cache.set(x, result); // and cache (remember) the result
    return result;
  };
}

slow = cachingDecorator(slow);

console.log(slow(1)); // slow(1) is cached and the result returned
console.log("Again: " + slow(1)); // slow(1) result returned from cache

console.log(slow(2)); // slow(2) is cached and the result returned
console.log("Again: " + slow(2)); // slow(2) result returned from cache

function myDebounceFunc(func, delay) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => func.apply(this, arguments), delay);
  };
}

const onInputChange = myDebounceFunc(() => {
  console.log("myDebounceFunc called");
}, 1000);

/* 
debounce runs the function once after the “cooldown” period. Good for processing the final result.
throttle runs it not more often than given ms time. Good for regular updates that shouldn’t be very often.
1.For the first mouse movement the decorated variant immediately passes the call to update. That’s important, the user 
sees our reaction to their move immediately.
2.Then as the mouse moves on, until 100ms nothing happens. The decorated variant ignores calls.
3.At the end of 100ms – one more update happens with the last coordinates.
4.Then, finally, the mouse stops somewhere. The decorated variant waits until 100ms expire and then runs 
update with last coordinates. So, quite important, the final mouse coordinates are processed.

Arrow functions:
Do not have this
Do not have arguments

function defer(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}
function sayHi(who) {
  alert('Hello, ' + who);
}
let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // Hello, John after 2 seconds

The same without an arrow function would look like:
function defer(f, ms) {
  return function(...args) {
    let ctx = this;
    setTimeout(function() {
      return f.apply(ctx, args);
    }, ms);
  };
}
*/
function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;
  function wrapper() {
    if (isThrottled) {
      // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    isThrottled = true;
    func.apply(this, arguments); // (1)
    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }
  return wrapper;
}

var checkCounter = 0;
setInterval(() => {
  checkCounter += 1;
});
const onButtonClick = throttle(() => {
  console.log("called on button click with throttle", this.checkCounter);
}, 2000);

/*
Property flags and descriptors
Until now, a property was a simple “key-value” pair to us. But an object property is actually a more flexible and powerful thing.
Property flags - 
Object properties, besides a value, have three special attributes (so-called “flags”):
writable – if true, the value can be changed, otherwise it’s read-only.
enumerable – if true, then listed in loops, otherwise not listed.
configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.

let user = {
  name: "John"
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor, null, 2));
property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/

let userObjjj = {};
Object.defineProperty(userObjjj, "name", {
  value: "John",
});
let descriptor = Object.getOwnPropertyDescriptor(userObjjj, "name");
console.log(JSON.stringify(descriptor, null, 2));
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/
Object.defineProperty(userObjjj, "name", {
  writable: false,
});

// Property getters and setters
let userObjecttt = {
  name: "Sharma",
  surname: "Vikas",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

// set fullName is executed with the given value.
userObjecttt.fullName = "Vikas Sharma";
console.log(userObjecttt.name); // Vikas // if getter is not there it shows error
console.log(userObjecttt.surname); // Sharma

// Prototypal Inheritance
// In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”
// When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”.
// The value of __proto__ can be either an object or null
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};
rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
// we can find both properties in rabbit now:
console.log(rabbit.eats); // true
console.log(rabbit.jumps); // true

// The prototype is only used for reading properties.
// Write/delete operations work directly with the object.
let arrrrray = [1, 2, 3];
// it inherits from Array.prototype?
console.log(arrrrray.__proto__ === Array.prototype); // true
// then from Object.prototype?
console.log(arrrrray.__proto__.__proto__ === Object.prototype); // true
// and null on the top.
console.log(arrrrray.__proto__.__proto__.__proto__); // null

// Own reduce, filter and map method
const arrayConst = [1, 2, 4, 5, 8, 3];

// const mapFunc = arrayConst.map((item) => item * 2);
Array.prototype.myMap = function (callback) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr[i] = callback(this[i]);
  }
  return newArr;
};
const mapFunc = arrayConst.myMap((item) => item * 2);
console.log("myMap", mapFunc);

// const filterFunc = arrayConst.filter((item) => item % 2 === 0);
Array.prototype.myFilter = function (callback) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};
const filterFunc = arrayConst.myFilter((item) => item % 2 === 0);
console.log("myFilter", filterFunc);

// const reduceFunc = arrayConst.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
Array.prototype.myReduce = function (callback) {
  let result = 0;
  for (let i = 0; i < this.length; i++) {
    callback((result = result + this[i]));
  }
  return result;
};
const reduceFunc = arrayConst.myReduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("myReduce", reduceFunc);

// deepClone

const obj = {
  name: {
    first_name: "Vikas",
    last_name: "Sharma",
  },
  age: 27,
};

function deepClone(obj) {
  if (!obj) return obj;
  let value;
  const newObj = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    value = obj[key];
    newObj[key] = typeof value === "object" ? deepClone(value) : value;
  }
  return newObj;
}

const flattenObject = (obj, prefix = '') =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});
console.log(flattenObject({ a: { b: { c: 1 } }, d: 1 }));
