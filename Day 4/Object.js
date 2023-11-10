//objects in javascript


const jsUser = {
    name: 'sachi',
    age: 21,
    city: 'Home Less'
};

const jsUser2 = {
    nama: 'John Doe',
    bayasa: 30,
    address: 'New York'
};

const allUser = Object.assign({}, jsUser, jsUser2);

console.log(allUser);
// console.log(jsUser.name);

// console.log(jsUser['age']);