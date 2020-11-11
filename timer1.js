const args = process.argv.splice(2);
const milliseconds = args.filter(number => number > 0).map(function(num) { return num * 1000 });
console.log(milliseconds);

const timer = function(x) {
  for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
  setTimeout(() => { process.stdout.write('\x07'); }, x[i]);
  };
};

timer(milliseconds);

// tests

// node timer1.js 10 3 4 15 -8 9 
// node timer1.js 0
// node timer1.js 3 "4" 5
// node timer1.js 3 "hello" 5
// node timer1.js
