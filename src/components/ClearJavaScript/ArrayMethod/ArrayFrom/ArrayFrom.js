//// Array.from - pozwala stworzyć nową tablicę na podstawie 
//obiektu tablicopodobnego tj.
//1. funkcja z parametrami
// NodelISTA - getElementbyId, querySelector, 
// Arguments w funkcjach strzałkowych:


//////
Array.from(arrayLike, mapFn, thisArg);
////////
const str = '12345';
const arr = Array.from(str);
console.log(arr); // ["1", "2", "3", "4", "5"]
//////////
const numbers = [1, 2, 3, 4];
const doubled = Array.from(numbers, num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
