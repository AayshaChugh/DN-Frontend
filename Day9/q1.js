let person = {
  name: "Shinigami",
  greet(message) {
    console.log(`${message} ${this.name}`);
  },
};

const anotherPerson = {
  name: "Aaysha",
  age: 54,
};

person.greet.call(person, "hello");
person.greet.apply(anotherPerson, ["hii"]);

person.greet.bind(anotherPerson, "my name is")();
