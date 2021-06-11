function array_Clone(array) {
  let arr1 = [];
  for (const iterator of array) {
    //arr1[iterator]=array[iterator]
    arr1.push(iterator);
  }
  return arr1;
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
