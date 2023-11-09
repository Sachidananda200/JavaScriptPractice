let person = {
  firstName: "John",
  lastName: "Bhai",
  age: 30,
  greet: function() {
    return "Hello, " + this.firstName + " " + this.lastName + "!";
  }
};

console.log(person.greet()); 
