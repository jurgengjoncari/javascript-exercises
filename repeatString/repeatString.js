const repeatString = function(string, n) {
    if (n < 0) {
        return 'ERROR';
    }
    stringRepeated = '';
    for (i = 0; i < n; i++) {
        stringRepeated += string;
    }
    return stringRepeated;
}

module.exports = repeatString
