const removeFromArray = function(...args) {
    const newArray = args[0];
    return newArray.filter(val => !args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
