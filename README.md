# timer

The timer function takes in any number of arguments from the user and creates an array of those arguments. It then creates a second array which excludes non-natural numbers and non numbers and multiplies each remaining number by 1000 to change the user input from seconds into milliseconds. The function will then output a sound at each of these times using setTimeout.

Note: Because process.argv creates an array of STRINGS from the user input, it will not differentiate between numbers and strings of numbers; all numbers, whether in quotes or not, will be received as strings, and then converted to numbers in the filtering process. i.e. inputting 4 will give the same result as inputting "4".