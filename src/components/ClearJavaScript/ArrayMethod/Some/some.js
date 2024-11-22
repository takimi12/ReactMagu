const numbers = [1, 2, 3, 4, 5];

const result = numbers.some(num => num > 3);
console.log(result);  // true (bo 4 i 5 są większe niż 3)

const allLessThanZero = numbers.some(num => num < 0);
console.log(allLessThanZero);  // false (żaden element nie jest mniejszy niż 0)
