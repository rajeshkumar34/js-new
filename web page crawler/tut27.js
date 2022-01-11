console.log("welcome to tutoial number 27");

// Object Literal for  creating objects
let car = {
  name: "maruti 800 ",
  topsheep: 80,
  run: function () {
    console.log("car is running");
  },
};

// we have already seen constructors like these
new Date();

// creating a construetor for cars

function generalcar(givenName, givenspeed) {
  this.name = givenName;
  this.topspeed = givenspeed;
  this.run = function () {
    console.log("${this.name} is running ");
  };
}
car1 = new generalcar("Nissan", 180);
car2 = new generalcar("Maruti Aito", 80);
console.log(car2);
