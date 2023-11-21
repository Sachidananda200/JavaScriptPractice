

function Car(model) {
    this.model = model;
   }
   
   Car.prototype.getModel = function() {
    return this.model;
   }
   
   var myCar = new Car("Toyota");
   
   
   console.log(myCar.getModel());
   
   var anotherCar = new Car("Honda");
   
   
   console.log(anotherCar.getModel());
   
   
   var model = Car.prototype.getModel.call(anotherCar);
   
   console.log(model);