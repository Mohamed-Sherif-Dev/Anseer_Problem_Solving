function add(num1, num2) {
  let a = num1.toString();
  let b = num2.toString();

  let i = a.length - 1;
  let j = b.length - 1;

  let result = [];

  while (i >= 0 || j >= 0) {
    let digitA = i >= 0 ? Number(a[i]) : 0;
    let digitB = j >= 0 ? Number(b[j]) : 0;

    result.push(digitA + digitB);

    i--;
    j--;
  }

  return Number(result.reverse().join(""));
}