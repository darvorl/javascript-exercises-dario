const reverseString = function (string) {
    const stringArr = string.split("");
    const reversedArr = stringArr.reverse();
    const reversedString = reversedArr.join("");
    return reversedString
};

console.log(reverseString("123456789"))
// Do not edit below this line
module.exports = reverseString;
