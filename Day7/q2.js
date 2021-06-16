//Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
const student = {
  name: "Shinigami",
  class: "2nd year",
  branch: "CSE",
  rollno: 1914594,
};
console.table(student);
//student.pop();
delete student.rollno;
console.table(student);
