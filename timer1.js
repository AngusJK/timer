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

