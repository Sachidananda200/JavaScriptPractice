//  const value= function (a,b){
//     var y = 10;
//     return (a+b)*5;
// }
// console.log(y);

// console.log(value(10,20));
// console.log(x)

// let x =10;
// console.log(x)

const x = [10,12,13,15,20]

const y = x.map((num)=>{
    return num*num
}  ).filter((nums)=>{
    return nums <150
})
console.log(y);

// const z = x.filter( (num) =>{
//     if(num%5 === 0){
//         return num
//     }
// })
// console.log(z);


let obj1 = {
    1:"apple",
    "x":"orange",
}
console.log(obj1[`x`]);