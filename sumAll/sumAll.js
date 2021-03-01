const sumAll = function(min, max) {
    if (min < 0 || max < 0 ||
        !Number.isInteger(min) || 
        !Number.isInteger(max)) {
            return 'ERROR';
        }

    if max < min {
        temp = min;
        min = max;
        max = temp;
    }

    numberAfter = min;
    sum = 0;
    do {
        sum += numberAfter;
        numberAfter++;
    } while (numberAfter <= max);
    return sum;
}

module.exports = sumAll
