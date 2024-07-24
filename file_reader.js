const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
let firstName, lastName, age, hobbies;

fs.readFile('./firstname.txt', 'utf-8')
  .then(res => {
    firstName = res;
    return fs.readFile('./lastname.txt', 'utf-8')
  })
  .then(res2 => {
    lastName = res2;
    return fs.readFile('./age.txt', 'utf-8')
  })
  .then(res3 => {
    age = res3;
    return fs.readFile('./hobbies.txt', 'utf-8')
  })
  .then(res4 => {
    hobbies = JSON.parse(res4);

    let hobbiesText = "";

    if (hobbies.length === 1) {
      hobbiesText = hobbies[0];
    } else if (hobbies.length >= 2) {
      hobbiesText = hobbies.join(" and ");
    }

    console.log(`${firstName} ${lastName} is ${age} years old and his hobbies are ${hobbiesText}`);
  })
  .catch(err => console.error(err))


// ASYNC/AWAIT SOLUTION BELOW THIS LINE
const getData = async function() {
  try {
    const firstName = await fs.readFile('./firstname.txt', 'utf-8');
    const lastName = await fs.readFile('./lastname.txt', 'utf-8');
    const age = await fs.readFile('./age.txt', 'utf-8');
    const hobbiesData = await fs.readFile('./hobbies.txt', 'utf-8');

    hobbies = JSON.parse(hobbiesData);

    let hobbiesText = "";

    if (hobbies.length === 1) {
      hobbiesText = hobbies[0];
    } else if (hobbies.length >= 2) {
      hobbiesText = hobbies.join(" and ");
    }

    console.log(`${firstName} ${lastName} is ${age} years old and his hobbies are ${hobbiesText}`)
  } catch(err) {
    console.error(err);
  }
}

getData()