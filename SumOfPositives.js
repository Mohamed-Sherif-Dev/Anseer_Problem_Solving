// you grt an array of numbers, return the sum of all of the positives ones.

// Array Loop

// check if the number is positive or not

// Initialize the sum to 0

// Add the number to the initialized if it is positive

function sumOfPostive(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumOfPostive([1, -2, -3, 4, 5]));




// Another solution
function sumOfPostive1(arr) {
  return arr.filter((num) => num > 0)
  .reduce((acc, curr) => acc + curr, 0);
}


console.log(sumOfPostive1([-3 , -2 , 6 , 7 , 8]));

