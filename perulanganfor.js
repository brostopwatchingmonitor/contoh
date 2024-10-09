for (let i = 11; i <= 120 && i >= 1; i *= 3) {
  console.log(i);
}
console.log("\n");

const array = "LOL";
for (let i = 0; i <= 4; i++) {
  console.log("Outer: ", i);
  for (let j = 0; j < array.length; j++) {
    console.log("   Inner :", array[j]);
  }
}
console.log("\n");

const varlot = "GGWP";
for (let j = 0; j < 4; j++) {
  const element = j;
  console.log("Outer:", j);

  for (let i = 0; i < varlot.length; i++) {
    const element = varlot[i];
    console.log("  Inner:", element);
  }
}
console.log("\n");

let buah = [
  ["apel", "mangga", "pisang", "jeruk"],
  ["apel", "mangga", "pisang", "jeruk"],
  ["apel", "mangga", "pisang", "jeruk"],
  ["apel", "mangga", "pisang", "jeruk"],
];

for (let i = 0; i < buah.length; i++) {
  console.log(`Row ${i + 1}: ${buah[i]}`);
}
