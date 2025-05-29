const fibonacci = function(digit) {
    if (digit == 0){
        return 0;
    } else if (digit < 0){
        return "OOPS";
    } else {
        let nextNum = 1;
        let fib = [0];
        for (let i = 1; i <= digit; i++ ){
            fib[i] = nextNum;
            nextNum = fib[i] +fib[i-1];
        }
        return fib[digit];
    }

};

// Do not edit below this line
module.exports = fibonacci;
