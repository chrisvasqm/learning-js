// Factory function
function createCircle(radius) {
  return {
    radius,
    draw: () => {
      console.log("draw");
    },
  };
}

const circleA = createCircle(1);
const circleB = createCircle(2);

console.log(`Circle A: ${circleA}`);
console.log(`Circle B: ${circleB}`);
