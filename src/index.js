exports.min = function min(array) {
    if (!isCorrectArray(array)) {
        return 0;
    }

    let min = Infinity;

    for (const num of array) {
        min = Math.min(min, num);
    }

    return min;
};

exports.max = function max(array) {
    if (!isCorrectArray(array)) {
        return 0;
    }
    let max = -Infinity;

    for (const num of array) {
        max = Math.max(max, num);
    }

    return max;
};

exports.avg = function avg(array) {
    if (!isCorrectArray(array)) {
        return 0;
    }

    let avg = 0;

    for (const num of array) {
        avg += num;
    }

    return avg / array.length;
};

function isCorrectArray(arr) {
    return Array.isArray(arr) && arr.length !== 0;
}
