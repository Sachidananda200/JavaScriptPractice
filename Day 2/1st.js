// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Object
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet: function () {
    return "Hello, " + this.firstName + " " + this.lastName + "!";
  }
};

console.log(greet("Alice"));           
console.log(person.greet());           
