const sampleInputString = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`

//convert input string to array of numbers
const inputArray = sampleInputString.split('\n').map(row => row.split('').map(num => parseInt(num)))

console.log(inputArray) //?

// transpose array
const transposedArray = inputArray[0].map((col, i) => inputArray.map(row => row[i]))

console.log(transposedArray) //?

// count the number of 1s in a collumn
