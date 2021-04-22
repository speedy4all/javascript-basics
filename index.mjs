import { SecondMain, HI, sayHello } from "./main.mjs";

// const main = new Main("Sesiunea 1");
const secondMain = new SecondMain("Sesunea second 2");
// const main1 = new Main('Sesiunea 2');

// main.sayHi();
// main.sayHi.call({ session: "Sesiunea 2" }, "Hi");
// main.sayHi();

secondMain.sayHi(HI);

sayHello('heeeeelooo', ' from index :)');

// const objA = {
//   name: "Bogdan",
//   age: 40,
// };

// function sayHi({ name, age } = { name: "Default", age: 5 }) {
//   //   const params = { name: "", age: 0 };

//   //   params.name = (obj && obj.name) || "Default name";
//   //   params.age = (obj && obj.age) || 5;

//   //   params.title;

//   console.log("Hello ", name, age);
// }

// sayHi(undefined);
