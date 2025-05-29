const palindromes = function (ogString) {
    let reversed = "";
    ogString = ogString.toLowerCase().replace(/[^a-z0-9]/g, "");
    for (let i = 0; i < ogString.length; i++){
        reversed += ogString[ogString.length - i - 1];
    }

    return ogString === reverse;
};

// Do not edit below this line
module.exports = palindromes;
