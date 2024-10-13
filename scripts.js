// // Task: Build Your Own Virtual Pet! 

// // Start by creating a pet object. 
// // It should have the following properties:
// // Properties: name, type, age, happiness and hunger

// let myPet = {
//   // properties
//   name : "cato",
//   type : 'cat',
//   age : "", // months
//   hunger : 70,
//   happiness : 60,
  
//   // methods
//   // feed()
//   feed : function () {
//     this.hunger = this.hunger - 20;
//     if (this.hunger < 0) {
//       console.log("Hunger level can't go below 0");
//     }
//     else {
//       console.log(`Your hunger happiness is ${this.happiness}`);
//     }
//   },

//   // play()
//   play : function () {
//     this.happiness = this.happiness + 20;
//     if(this.happiness > 100) {
//       console.log("Happiness level can't go above 100");
//     }
//     else {
//       console.log(`Your happiness level is ${this.happiness}`);
//     }
//   },

//   // agePet():
//   agePet : function () {
//     this.age = this.age + 1;
//     this.happiness = this.happiness + 5;
//     this.hunger = this.hunger - 10;
//   }, 

// }

// var displyInfo = prompt(`Know you can get my pet details: \n(1): Age \n(2): Happiness \n(3): Hunger`);

// // for age
// if(displyInfo.toLowerCase() === 'age' || displyInfo.toLowerCase() === 'happiness' || displyInfo().toLowerCase() === 'hunger') {
//   if(myPet.age === ""){
//     myPet.age = prompt("Enter the age");
//     alert(`My pet age is ${myPet.age}`);
//     displyInfo = prompt(`Know you can get my pet details: \n(1): Age \n(2): Happiness \n(3): Hunger`);

   

  

//   }




// }


//    // for happiness
//    if(displyInfo.toLowerCase() === 'happiness') {
//     alert(`My happiness level is ${myPet.happiness}`)
//     displyInfo = prompt(`Know you can get my pet details: \n(1): Age \n(2): Happiness \n(3): Hunger`);
  
//   }


//  // for hunger 
//  if(displyInfo.toLowerCase() === 'hunger') {
//   alert(`My hunger level is ${myPet.hunger}`)
//   displyInfo = prompt(`Know you can get my pet details: \n(1): Age \n(2): Happiness \n(3): Hunger`);

//   }






let myPet = {
  // properties
  name: "Cato",
  type: 'cat',
  age: "", // months
  hunger: 70,
  happiness: 60,

  // methods
  // feed()
  feed: function () {
    this.hunger = this.hunger - 20;
    if (this.hunger < 0) {
      this.hunger = 0; // Hunger level can't go below 0
      console.log("Hunger level can't go below 0");
    } else {
      console.log(`Your hunger level is now ${this.hunger}`);
    }
  },

  // play()
  play: function () {
    this.happiness = this.happiness + 20;
    if (this.happiness > 100) {
      this.happiness = 100; // Happiness level can't go above 100
      console.log("Happiness level can't go above 100");
    } else {
      console.log(`Your happiness level is now ${this.happiness}`);
    }
  },

  // agePet()
  agePet: function () {
    this.age = this.age + 1;
    this.happiness = this.happiness + 5;
    this.hunger = this.hunger - 10;
  },
};

// Main logic to get pet details
while (true) {
  let displayInfo = prompt(`Know you can get my pet details: \n(1): Age \n(2): Happiness \n(3): Hunger \nType 'exit' to stop`);

  if (displayInfo.toLowerCase() === 'exit') {
    break; // Exit the loop when user types 'exit'
  }

  // Handle Age
  if (displayInfo.toLowerCase() === 'age') {
    if (myPet.age === "") {
      myPet.age = prompt("Enter the age of your pet:");
    }
    alert(`My pet's age is ${myPet.age}`);
  }

  // Handle Happiness
  else if (displayInfo.toLowerCase() === 'happiness') {
    alert(`My pet's happiness level is ${myPet.happiness}`);
  }

  // Handle Hunger
  else if (displayInfo.toLowerCase() === 'hunger') {
    alert(`My pet's hunger level is ${myPet.hunger}`);
  }

  // Invalid input handling
  else {
    alert("Please enter a valid option (Age, Happiness, Hunger, or 'exit' to stop).");
  }
}


