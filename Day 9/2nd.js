
// function printValues(callback) {
//        let values = [1, 2, 3, 4, 5];
    
   
//     for (let i = 0; i < values.length; i++) {
   
//       callback(values[i]);
//     }
//   }
  
  
//   printValues(function(value) {
  
//     console.log(value);
//   });
  
// const arr = [1, 2, 3, 4, 5];

// const arr1 = arr.map((num) => {
//   return num * 10;
// });

// console.log(arr1);

// const arr = [1, 2, 3, 4, 5];

// const arr1 = arr.map((num) => num * 10);

// console.log(arr1);

// function example() {
//     if (true) {
//       var x = 5;
//     }
//     console.log(x); 
//   }
  


// function sayHello(message) {
//     console.log(message + ' ' + this.name);
//   }
  
//   const person = { name: 'sachi' };
  
//   sayHello.call(person, 'Hello'); 


// function sayHello(message) {
//     console.log(message + ' ' + this.name);
//   }
  
//   const person = { name: 'sachi' };
  
//   sayHello.apply(person, ['Hello']); 


//   function sayHello(message) {
//     console.log(message + ' ' + this.name);
//   }
  
//   const person = { name: 'sachi' };
  
//   const sayHelloToJohn = sayHello.bind(person);
//   sayHelloToJohn('Hello'); 
  
  

//   const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); 



// function outerFunction() {
//     let outerVariable = 'out side';
  
    
//     function innerFunction() {
//             console.log(outerVariable);
//     }
  
   
//     return innerFunction;
//   }
  
  
//   const closure = outerFunction();
  
  
//   closure();  




// function printAll() {
//     const a = [1, 2, 3, 4, 5];
  
//     function printValues() {
//       for (let i = 0; i < a.length; i++) {
        
//         console.log(`${a[i]}`);
//       }
//     }
  
    
//     printValues();
//   }
  
//   printAll();
  
  

// function printAll() {
//     const a = [1, 2, 3, 4, 5];
  
//     function printValues() {
//       for (let i = 0; i < a.length; i++) {
//         console.log(`${a[i]}`);
//       }
//     }
  
//     return printValues;
//   }
  

//   const exm = printAll();
  

//   exm();
// console.log(x);
// var x = 10 ;



// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
//   let myString = JSON.stringify(person);

//   console.log(myString);

