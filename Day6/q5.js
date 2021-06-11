//object is map (array in js is map)
// const arr = [];
// array["a"] = 1;
// console.log(array["a"]);
function freq(params) {
  const newMap = new Map();
  for (let i = 0; i < params.length; i++) {
    // newMap.get(params[i])
    if (newMap.has(params[i])) {
      newMap.set(params[i], newMap.get(params[i]) + 1);
    } else {
      newMap.set(params[i], 1);
    }
  }
  let maxValue = 0;
  let maxKey = 0;
  for (let [key, value] of newMap) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }
  return { maxKey, maxValue };
  // if(newMap.has()
}
const x = freq([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);
console.log(`${x.maxKey} (${x.maxValue} times)`);
