// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Chang the number to string and split it into an array
// Split the String to an Array
// Change the Array to a Number
// Reverse the Array

function digitize(n) {
    return n.toString().split("").map((num) => Number(num)).reverse();
}



console.log(digitize(123456789));