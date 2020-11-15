const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ringBell = function() {
  process.stdout.write('\u0007');
};

rl.question("Type 'b' to make a noise immediately, or a number from 1-9 to set a timer. \n", function(userInput) {
  if (userInput.trim().toLowerCase() === "b") {
    ringBell();
    process.stdout.write('\u00A9');
    rl.close();
  } else if (userInput > 0 && userInput < 10) {
    process.stdout.write(`setting timer for ${userInput} seconds... \n`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, userInput * 1000);
    rl.close();
  } else {
    rl.setPrompt("Wrong answer! \n");
    rl.prompt();
    rl.close();
  }
});


rl.on('close', () => {
  process.stdout.write("Thanks for stopping by, Dirtbag. \n");
});
