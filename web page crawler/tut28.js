console.log("welcome to tut 28");

let obj = {
  name: "rajesh",
  channel: "lovetravel",
  address: "mars",
};

// function obj(giveName) {
//   this.name = givenName;
// }

obj.prototype.getName = function () {
  return this.name;
};

obj.prototype.setName = function (newName) {
  this.name = newName;
};

let obj2 = new obj("Rohan Das");
console.log(obj2);
