console.log("welcome to tutoial number 23");

let today = new Date();
console.log(typeof today);

let otherDate = new Date("8-4-2021 04:30:08");
other = new Date("june 13 1995");
otherDate = new Date("09/16/1976");
console.log(otherDate);

a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getSeconds();
a = otherDate.getUTCHours();

a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
console.log(a);

otherDate.setDate(23);
otherDate.setMonth(0);
otherDate.setFullYear(1900);
otherDate.setMinutes(1);
otherDate.setHours(2);
otherDate.setSeconds(3);

console.log(otherDate);
