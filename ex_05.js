function findClosestResult(functionsObj, inputNumber, outputNumber) {
    let petite = null;
    let smallestDifference = Infinity;
    for (const key in functionsObj) {
        if (functionsObj.hasOwnProperty(key)) {
            const result = functionsObj[key](inputNumber);
            const difference = result - outputNumber;  
            const absDifference = difference < 0 ? -difference : difference; 
            if (difference < smallestDifference) {
                smallestDifference = difference;
                petite = key;}}}
    return petite;}

const fonctionn = {
    multipleByEight: (x) => x * 8,
    square: (x) => x * x,
    addSixty: (x) => x + 60};

console.log(findClosestResult(fonctionn, 5, 26)); 
console.log(findClosestResult(fonctionn, 10, 5)); 
console.log(findClosestResult(fonctionn, 5, 45)); 
