class Calculator {
  // By adding the "static" keyword at the start of a method's signature
  // we can use it without creating an instance of it
  static sum(first, second) {
    return first + second;
  }
}

console.log(Calculator.sum(3, 2));
