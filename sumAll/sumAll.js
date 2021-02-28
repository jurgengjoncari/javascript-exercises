const sumAll = function(numberOne, numberTwo) {
    if (numberOne < 0 || numberTwo < 0 ||
        !Number.isInteger(numberOne) || 
        !Number.isInteger(numberTwo)) {
            return 'ERROR';
        }

    min = Math.min(numberOne, numberTwo);
    max = Math.max(numberOne, numberTwo);

    numberAfter = min;
    sum = 0;
    do {
        sum += numberAfter;
        numberAfter++;
    } while (numberAfter <= max);
    return sum;
}

module.exports = sumAll
