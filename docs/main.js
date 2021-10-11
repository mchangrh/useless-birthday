const getDuration = (start, end) => {
  const durationDate = new Date(end - start);
  return `Time: ${durationDate.getMinutes()}m ${durationDate.getSeconds()}s`;
}

const makeExpensiveMessage = () => {
  // setup
  const start = Date.now();
  let totalCount = 0;
  const hashSeed = "Happy Birthday Corey";
  const target = hashSeed.replace(/\s/g, "");
  document.getElementById("expensive-message").innerHTML = "";
  // calculation
  for (const letter of target) {
    let { hashText, count } = findLetter(letter);
    totalCount += count;
    document.getElementById("expensive-message").innerHTML += hashText[29];
  }
  // results
  const end = Date.now()
  document.getElementById("expensive-cost").innerHTML = `Cost: ${getDuration(start, end)}, Hashes Generated: ${totalCount}`;
  document.getElementById("expensive-title").innerHTML = "(Computationally) Expensive Gift";
}

// simple message
const simpleStart = Date.now();
document.getElementById("cheap-message").innerHTML = "Happy Birthday Corey";
const simpleEnd = Date.now();
document.getElementById("cheap-cost").innerHTML = `Cost: ${getDuration(simpleStart, simpleEnd)}`;