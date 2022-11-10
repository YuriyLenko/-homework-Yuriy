const myArray = [
  41, 33, 22, 33, 32, 36, 36, 17, 6, 27, 1, 3, 1, 27, 14, 24, 28, 19, 17, 2, 15,
  42, 5, 25, 49, 44, 49, 37, 29, 7, 37, 4, 0, 2, 0, 12, 15, 11, 34, 7, 41, 28,
  7, 20, 16, 10, 28, 21, 35, 30,
];

let theBiggestEl = myArray[0];
for (i = 0; i < myArray.length; i = i + 1) {
  if (theBiggestEl < myArray[i]) {
    theBiggestEl = myArray[i];
  }
}
console.log(theBiggestEl);

let theSmallestEl = myArray[0];
for (i = 0; i < myArray.length; i = i + 1) {
  if (theSmallestEl > myArray[i]) {
    theSmallestEl = myArray[i];
  }
}
console.log(theSmallestEl);

myArray.unshift(theBiggestEl);
console.log(myArray[0]);

myArray.push(theSmallestEl);
console.log(myArray[myArray.length - 1]);
