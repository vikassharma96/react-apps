function myFilter(callbackFunc) {
  console.log(this);
  //   let newArray = [];
  //   array.forEach((element) => {
  //     if (element > 2) newArray.push(element);
  //   });
  callbackFunc();
}

myFilter((args) => {
  console.log(args);
});

Array.prototype = myFilter;

var arr = [2, 5, 1, 5, 7, 8, 10];
console.log(arr.filter((i) => i > 2));
// Array.prototype.myFilter()
console.log(Array.prototype.myFilter());
