const reverseString = function(phrase) {
    let reversedString = "";
    for (let i = 0; i < phrase.length; i++) {
        reversedString += phrase[phrase.length - i - 1]
    }

    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
