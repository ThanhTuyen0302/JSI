const obj1 = { name: "a", age: 10 };
const obj2 = { ...obj1, age: 20 };
obj1.name = "b";
console.table({ obj1, obj2 });