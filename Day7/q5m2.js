const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is radius of cylinder? ", function (radius) {
  rl.question("What is height of cylinder ? ", function (height) {
    console.log(`Radius is : ${radius} & Height is : ${height}`);
    const volume = (Math.PI * Math.pow(radius, 2) * height).toFixed(4);
    console.log(`Volume is :${volume}`);
    rl.close();
  });
});

rl.on("close", function () {
  process.exit(0);
});
