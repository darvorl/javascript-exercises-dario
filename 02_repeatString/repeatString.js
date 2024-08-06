const repeatString = function(string, num) {
    let stringNum = ""
    if (num < 0) {
        return "ERROR"
    } else {
        for (let index = 0; index < num; index++) {
            stringNum += string
        }
        return stringNum
    }
};

// Do not edit below this line
module.exports = repeatString;