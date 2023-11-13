function outerFunction(outerVariable) {
    
    function innerFunction(innerVariable) {
      console.log(`Outer Variable: ${outerVariable}`);
      console.log(`Inner Variable: ${innerVariable}`);
    }
  
  
    return innerFunction;
  }
  
 
  const closure = outerFunction("Outer Value");
  
 
  closure("Inner Value");
  