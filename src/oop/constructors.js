// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log("draw");
  };
}

const circle = new Circle(1);
console.log(circle.constructor);
