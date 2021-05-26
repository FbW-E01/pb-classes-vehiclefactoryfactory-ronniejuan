// # Vehicle Factory Factory

// Create "factory factory" function that returns a constructor function.

// The factory factory takes in one parameter, "type".
function  factoryFactory (type){

// Each created factory needs to create objects with this given type.
    return function Factory (make,model){ 
            this.type=type;
            this.make=make;
            this.model=model;

        }
      }  

// Each created factory needs to take in three parameters and save them to the created objects:
// - make
// - model

// Use your factory factory to create at least five factories, such as
// - bicycle factory
// - car factory
// - boat factory
// - blimp factory
// - train factory

let Bike = factoryFactory("Bicycle")
let myBike1 = new Bike("Cannondale", "Cujo");
 //console.log(myBike1);


  let Car = factoryFactory("Auto")
  let myCar1= new Car("Fiat",19)
  //console.log(myCar1);


  let boat = factoryFactory("Boats")
  let myBoat =  new boat("Siren","green")
  //console.log(myBoat);

  let blimp = factoryFactory("Baloons")
  let myBlimp= new blimp("Led","Zepellin")
  //console.log(myBlimp)

  let train = factoryFactory("Train")
  let myTrain = new train("crazy","Rail")
//console.log(myTrain)


// const Bycicle = factoryFactory("bike")
// const Car = factoryFactory("car")
// const Blimp = factoryFactory("blimp")





// Lastly, use those factories to create some vehicles.

// Store all your created vehicles inside one array, loop over that array and print out each vehicle.

const stock=[
    myTrain ,myBlimp,myBoat,myCar1,myBike1,new Car("Dodge",19)
]


stock.forEach(element => console.log(element))
console.log(typeof(factoryFactory), typeof(myBlimp),typeof(stock[1]))


// Question: Check the *type* of your factories and of the objects that your factories create - what is the type of a factory and what is the type of a created object? Add your answer as comments into into your solution file.



//SECOND LOOP
for (let i = 0; i < stock.length; i++) {
    console.log("Stock-" + i + "- ",stock)
    
}