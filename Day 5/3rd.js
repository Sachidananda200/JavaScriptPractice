function createPerson(name) {
   
    let privateName = name;
  
    return {
      getFullName: function () {
        return privateName;
      },
      setFullName: function (newName) {
        privateName = newName;
      },
    };
  }
  
  const person = createPerson("sachi");
  
  console.log(person.getFullName()); 
  person.setFullName("sachi");
  console.log(person.getFullName()); 
  