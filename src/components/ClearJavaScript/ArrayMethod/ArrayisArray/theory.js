let arr = [1, 2, 3];
let obj = {name: 'John'};

console.log(Array.isArray(arr));  // true
console.log(Array.isArray(obj));  // false
//////////////
function processData(data) {
    if (Array.isArray(data)) {
      // wykonaj operacje na tablicy
      console.log('Przetwarzam tablicę:', data);
    } else {
      console.log('Dane nie są tablicą.');
    }
  }
  
  processData([1, 2, 3]);  // "Przetwarzam tablicę: [1, 2, 3]"
  processData({a: 1});      // "Dane nie są tablicą."
////////////////
function handleInput(input) {
    if (!Array.isArray(input)) {
      throw new Error('Wejście musi być tablicą!');
    }
    // dalsze przetwarzanie tablicy
  }
  
  handleInput([1, 2, 3]);  // działa poprawnie
  handleInput('tekst');     // rzucony wyjątek: "Wejście musi być tablicą!"
  