// Algorithms. Challenge №2 task 1
const unqNumArrays = (...ars) => [...new Set([...ars.reduce((acc, v) => [...acc, ...v], [])])].sort((a, b) => a - b);
const divByTwoNumbers = (...ars) => unqNumArrays(...ars).filter(v => v % 2 === 0)
console.log(divByTwoNumbers([1, 0, 3, 4, 6, 2, 10, 2, 1], [6, 19, 1, 1, 2, 5, 7, 9]));
