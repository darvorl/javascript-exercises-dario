const removeFromArray = function(array, ...elements) {
    for (let i = 0; i < elements.length; i++) {
        while (array.includes(elements[i])) {
            array.splice(array.indexOf(elements[i]), 1);
        }
    }

    return array;
};

const arr = [2,4,5,6,10]

console.log(removeFromArray(arr, 10, 3, 2))

// Do not edit below this line
module.exports = removeFromArray;
