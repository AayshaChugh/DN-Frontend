//Write a JavaScript program to get the length of a JavaScript object.  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
const student = {
  name: "Shinigami",
  class: "2nd year",
  branch: "CSE",
  rollno: 1914594,
};
objectLength = Object.keys(student).length;
console.log(objectLength);
