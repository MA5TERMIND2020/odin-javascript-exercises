const repeatString = function(string, num) {
    let newString = "";
    if (num < 0) {
        newString = "ERROR";
        return newString;
    }
    for (i = 0; i < num; i++) {
        if (string == null) {
            return newString;
        }
        else {
            newString += string;
        }
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
