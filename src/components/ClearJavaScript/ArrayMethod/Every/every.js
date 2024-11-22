const numbers = [1, 2, 3, 4, 5];

const result = numbers.every(num => num > 0);
console.log(result);  // true (wszystkie liczby są większe niż 0)

const allGreaterThanThree = numbers.every(num => num > 3);
console.log(allGreaterThanThree);  // false (bo 1, 2 i 3 są mniejsze niż 4)
