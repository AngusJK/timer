// produces a ding at 3, 5, 9, 10, and 15 second intervals

const timer = function(x) {
  setTimeout = (() => 
  process.stdout.write('\x07'), x);
};

timer();

// node timer1.js 10 3 5 15 9