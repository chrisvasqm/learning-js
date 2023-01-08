function sum(first, second) {
  return first + second;
}

console.log("Sum:", sum(2, 2));

function greet(name) {
  console.log(`Greet: Hello ${name}`);
}

greet("Chris");

function calculate(first, second, callback) {
  return callback(first, second);
}

console.log("Calculate:", calculate(2, 3, (first, second) => first + second));
