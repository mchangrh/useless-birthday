const bcrypt = dcodeIO.bcrypt

const saltRounds = 10;

const hash = (input) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(input, salt);
}

const findLetter = (letter) => {
  let count = 0;
  hashText = bcrypt.genSaltSync(saltRounds); // initial hash
  while (hashText[29] !== letter) {
    hashText = hash(hashText);
    count++;
  }
  return { hashText, count };
}