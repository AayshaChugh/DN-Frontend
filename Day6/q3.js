function first(params, n) {
  if (!n) {
    return params[0];
  }
  let arr1 = [];
  for (let i = 0; i < n; i++) {
    if (params[i] === undefined) {
      continue;
    }
    arr1.push(params[i]);
  }
  return arr1;
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
