
// async function fetchData() {
    
//     return new Promise(resolve => {
//       setTimeout(() => resolve("Data fetched!"), 5000);
//     });
//   }
  

//   async function processData() {
//     console.log("Start processing...");
//     const result = await fetchData();
//     console.log(result);
//     console.log("Processing complete!");
//   }
  

//   processData();


// function myDisplayer(some) {
//   console.log(some);
// }

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// let result = myCalculator(5, 5);
//  myDisplayer(result);
  

// function print() {
//   console.log("hello");
// }

// setInterval(print,5000)

// async function myAsyncFunction() {
//   console.log('Start');

//   // Simulate an asynchronous operation with a Promise
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   console.log('End');
// }

// myAsyncFunction();

// async function exampleAsyncFunction() {
//   return 'Hello, Async!';
// }

// exampleAsyncFunction().then(result => {
//   console.log(result);
// });

// async function exampleAsyncFunction() {
//   try {
//     const result = await someAsyncOperation();
//     console.log(result);
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// }


// function delayedFunction() {
//   console.log("This function was delayed by 2000 milliseconds.");
// }

// console.log("Start");
// setTimeout(delayedFunction, 2000);
// console.log("End");


let count = 0;

function intervalFunction() {
  count++;
  console.log(`This function runs every 1000 milliseconds. Count: ${count}`);
}

console.log("Start");
setInterval(intervalFunction, 5000);



