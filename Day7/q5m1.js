//Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased

const cylinder = {
  radius: parseInt(window.prompt("radius", "")),

  height: parseInt(window.prompt("height", "")),
};
const volume = (
  Math.PI *
  Math.pow(cylinder.radius, 2) *
  cylinder.height
).toFixed(4);
console.log(`Volume is :${volume}`);
console.log(cylinder);
