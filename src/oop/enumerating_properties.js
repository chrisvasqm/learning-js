const circle = {
    radius: 1,
    draw: () => {
        console.log("draw");
    }
}

for (key in circle) {
    console.log(key, circle[key]);
}
