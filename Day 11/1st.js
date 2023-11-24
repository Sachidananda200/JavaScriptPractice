// // promoises have 3 state 
// // 1. pending, fullfill, reject


// const promiseOne = new Promise( function(resolve,reject){
//      // do an ssync task
//      //db calls
//      //cryptography, networkcall
//      setTimeout(function(){
//         console.log("Db connected");
//         resolve('Connected');
//     },2000);
// })

// promiseOne.then(function(){
//     console.log("Promise one is resolved");
// })


// new Promise(function(res,rej){
//     setTimeout(function(){
//         console.log("connected");
//         res()
//     },2000)
//     }).then(function(){
//         console.log("promise one is resolved");
//     })

// const promiseThree = new Promise(function(res,rej){
//     setTimeout(function(){
//         console.log("connected");
//         res()
//     },2000)
// } ).then(function(){
//     console.log("promise one is resolved");
// })


// const promise3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//        resolve({username:"sachi",
//     email:"hello@gmail.com"})
//     },2000)
// })
// promise3.then(function(user){
// console.log(user);
// })


// const promise4 = new Promise(function(res,rej){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             res({username:"sachi",
//                  email:"hello@gmail.com"})
//         }else{
//             rej('error')
//         }
//     },1000)
// })

//   promise4
//   .then((user)=>{
// console.log(user);
// return user.username
// })
// .then((username)=>{
// console.log(username);
// })
// .catch(function(){
//     console.log('there was an error');
// })
// .finally(function(){
//     console.log("this is run finally");
// })



// const promise5 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         let error = false
//         if(!error){
//             res({username:"sachi",
//             email:"hello@gmail.com"})
//         }else{
//             rej('error occer')
//         }
//     },1000)
// })


// async function consumepromise5(){
//    try {
//     const resposone= await promise5
//    console.log(resposone);
//    } catch (error) {
//     console.log(error);
//    }
// }
// consumepromise5()



// async function getAlluser(){
//    try {
//     const resposone = await fetch('https://jsonplaceholder.typicode.com/users')
//     //console.log(resposone);
//     const data =  await resposone.json()
//     console.log(data);
//    } catch (error) {
//     console.log(error);
//    }
// }
//getAlluser()


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((Response)=>{
//     return Response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=> console.log(error))
 


// setInterval(() => {
//     console.log("hello javascript");
// }, 5000);


// function x(y){
//     console.log("x");
//     y()
// }
// x(function y(){
//     console.log("y");
// })



// function step1(callback) {
//     console.log('Step 1 completed');
//     callback();
//   }
  
//   function step2(callback) {
//     console.log('Step 2 completed');
//     callback();
//   }
  
//   function step3(callback) {
//     console.log('Step 3 completed');
//     callback();
//   }
  
//   function start() {
//     console.log('Starting the process...');
//     step1(function(){
//         step2(function(){
//             step3(function(){
//                 console.log("process completed");
//             })
//         })
//     })
//   }
  
  
//   start();
  

//ajax?
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         var data = JSON.parse(xhr.responseText);
//         console.log(data);
//     }
// };
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
// xhr.send();



// new Promise(function(res,rej){
//         setTimeout(function(){
//              console.log("connected");
//              res()
//          },2000)
//          }).then(function(){
//              console.log("promise one is resolved");
//          })


//  new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res('Hello World!');
//     },5000)
// })
// .then((response)=>{
//     console.log(response);
//     console.log("promise resolve");
    
// })





// function hello(){
//     let x = 10;
//     var c = 10;
//     console.log(x);
//     console.log(c);
// }
// // console.log(x);
// console.log(c);
// hello()


// let obj1 = {
//     name:"Hello",
//     print:function(gender,place){
//         return this.name +" "+ gender+" "+ place
//     }
// }

// let obj2 = {
//     name:"hey",
// }
//   console.log(obj1.print.apply(obj1,["male","jsp"]));

