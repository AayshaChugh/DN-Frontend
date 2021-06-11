function joiner(params) {
  const first = params.join(",");
  const second = params.join("+");
  return { first, second };
}
console.log(joiner(["Red", "Green", "White", "Black"]));
