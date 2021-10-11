const { findLetter } = require("./libs/generator.js");

const getDuration = (start, end) => {
  const durationDate = new Date(end - start);
  return `Time: ${durationDate.getMinutes()}m ${durationDate.getSeconds()}s`;
}

const start = Date.now();
let totalCount = 0;
const hashSeed = "Happy Birthday Corey";
const target = hashSeed.replace(/\s/g, "");

for (const letter of target) {
  let { hashText, count } = findLetter(letter);
  totalCount += count;
  process.stdout.write(hashText[29]);
}

// expensive message
const end = Date.now();
console.log("\n");
console.log(getDuration(start, end));
console.log(`Total Hash Count: ${totalCount}`);

// simple message
console.log("\n");
const simpleStart = Date.now();
console.log("Happy Birthday Corey");
const simpleEnd = Date.now();
console.log(getDuration(simpleStart, simpleEnd));
