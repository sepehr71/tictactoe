const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
let guessBox_selected = random(0, 2);
console.log(guessBox_selected);