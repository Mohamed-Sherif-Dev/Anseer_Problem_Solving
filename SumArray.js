// check if Empty Value retrurn 0
// Find the heighest number in the array
// Fiond the lowest number in the array
// Filter the array 
// Sum all the number in the array



function sumWithouttheNumber(array){
    if(array == null) return 0;

    let max = Math.max(...array);
    let min = Math.min(...array);
    console.log(max, min);
    let filter = array.filter((num) => num !== max && num !== min);
    console.log(filter);
    return filter.reduce((acc, curr) => acc + curr, 0);
}

// sumWithouttheNumber([1, 2, 3, 4, 5 , 6, 7, 8, 9, 10]);
console.log(sumWithouttheNumber([1, 2, 3, 4, 5 , 6, 7, 8, 9, 10]));






function sumWithoutFirstAndLastEven(arr){
    if(arr == null) return 0;
    let fristEven = arr.find(num => num % 2 === 0);
    let lastEven = arr.reverse().find(num => num % 2 === 0)
    console.log(fristEven, lastEven);
    let filter = arr.filter((num) => num !== fristEven && num !== lastEven);
    console.log(filter);
    return filter.reduce((accs , crrunt) => accs + crrunt, 0)
}

console.log(sumWithoutFirstAndLastEven([1, 2, 3, 4, 5 , 6, 7, 8, 9, 10]));


// Solve in another way
function sumWithoutFirstAndLastEven1(arr) {
  if (!arr || arr.length === 0) return 0;

  // 1. extract even numbers
  const evens = arr.filter(num => num % 2 === 0);

  // 2. if less than 3 evens → nothing to sum
  if (evens.length <= 2) return 0;

  // 3. remove first and last even
  const middleEvens = evens.slice(1, evens.length - 1);

  // 4. sum
  return middleEvens.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumWithoutFirstAndLastEven1([1, 2, 3, 4, 5 , 6, 7, 8, 9, 10]));
