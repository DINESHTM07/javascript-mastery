function sayHi(name) {
  return `Hiii, ${name}!!`;
}

function fullName(firstName, lastName) {
  return `Hello ${firstName}${lastName}!`;
}

function square(num) {
  return num * num;
}

let message = "Hello";

function greet() {
  let message = "Hi from inside!";
  console.log(message);
}
console.log(sayHi("Dinesh"));
console.log(fullName("Dinesh", "mathy"));
console.log(square(4));
console.log(message);
greet();
