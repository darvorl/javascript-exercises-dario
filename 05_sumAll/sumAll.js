const sumAll = function(a, b) {
    const numbers = [];

    if (
        typeof a !== "number" || 
        typeof b !== "number" ||
        !Number.isInteger(a) || 
        !Number.isInteger(b) ||
        a < 0 || 
        b < 0
      ) {
        return "ERROR";
      }
      

    if (a > b) {
        for (let i = b; i <= a; i++) {
            numbers.push(i)
        }
    } else {
        for (let i = a; i <= b; i++) {
            numbers.push(i)
        }
    }

    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }

    return sum
};

console.log(sumAll(1, 4))

// Do not edit below this line
module.exports = sumAll;
