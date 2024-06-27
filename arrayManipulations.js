// Task 1: processArray function
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
}

// Task 2: formatArrayStrings function
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase());
}

module.exports = { processArray, formatArrayStrings };
