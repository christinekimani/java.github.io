const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the score: ', (input) => {
  let score = parseInt(input);

  if (isNaN(score) || score > 100 || score < 0) {
    console.log("Error: invalid score!");
  } else {
    if (score >= 90) {
      console.log("You got an A");
    } else if (score >= 80) {
      console.log("You got a B");
    } else if (score >= 70) {
      console.log("You got a C");
    } else if (score >= 60) {
      console.log("You got a D");
    } else {
      console.log("You got an F");
    }
  }

  rl.close();
});














