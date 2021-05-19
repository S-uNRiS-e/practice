// Algorithms. Challenge №2 task 2
function getNumber(index){
    const numbers = [0, 1];
    for(let i = 0; i<index; i++){
        numbers.push(numbers[numbers.length-2]+numbers[numbers.length-1])
    }
    return numbers[index];
}

console.log(getNumber(23))
