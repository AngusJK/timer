const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ringBell = function() {
  process.stdout.write('');
};

rl.question("Type 'b' to make a beep. \n", function(userInput) {
  if (userInput.trim().toLowerCase() === "b") {
    ringBell();
    rl.close();
  } else {
    rl.setPrompt("Wrong answer! \n")
    rl.prompt();
    rl.close();
  }
});


/*
rl.on('ringBell', () => { 
  console.log("Bitch please");
});

//rl.question('What is your name? Nicknames are also acceptable :)', (answer) => {
  //profile.name = answer;




/*
const args = process.argv.splice(2);
const milliseconds = args.filter(num => num > 0).map(num => num * 1000);

const timer = function(timesArray) {
  for (let i in timesArray) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timesArray[i]);
  }
};

timer(milliseconds);

*/