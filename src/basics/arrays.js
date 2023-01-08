const colors = ["Red", "Yellow", "Blue", "Black"];
colors.forEach(color => {
  console.log(color);
});

const shortNamedColors = colors.filter(color => color.length <= 3);
console.log(
  `The colors that have 3 characters or less are: ${shortNamedColors}`
);

const boldedColors = colors.map(color => `<b>${color}</b>`);
console.log(boldedColors);
