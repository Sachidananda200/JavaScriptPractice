const numbers = [1, 2, 3, 4, 5];

const sum = Array.prototype.reduce.apply(numbers, [(acc, val) => acc + val]);
console.log(sum); 
