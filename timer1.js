const args = process.argv.splice(2);
const milliseconds = args.map(function(num) { return num * 1000 });
console.log(milliseconds);

const timer = function(x) {
  for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
  setTimeout(() => { process.stdout.write('\x07'); }, x[i]);
  };
};

timer(milliseconds);


// node timer1.js 10 3 5 15 9