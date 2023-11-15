const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  const person2 = {
    firstName: "John",
    lastName: "Doe"
  };
  
  // Use call to invoke the method of person1 on person2
  const result = person1.fullName.call(person2);
  console.log(result); // Output: John Doe
  