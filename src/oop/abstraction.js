function Circle(radius) {
    radius;
    let defaultLocation = { x: 0, y: 0};
    let computeOptimalLocation = () => {
        // ...
    }
    
    this.draw = () => {
        console.log(defaultLocation)
        computeOptimalLocation()
        console.log("draw");
    }
}

const circle = new Circle(1);
// Use the dot (.) operator on the 'circle' object and notice how
// only the draw() method is available to the consumer