//find minimum value
// let arr = [10,40,20,4,5];
// let result = Math.min(...arr);
// console.log(result);

// 2.what is symbol data type in js
// ==> is a primitive data type in JavaScript introduced in ES6
// It represents a unique and immutable value and is often used as an identifier for object properties.
// Symbols are immutable and unique. Once created, their value cannot be changed.
// **Symbols are commonly used as keys for object properties, especially when creating unique keys to avoid naming collisions.

// Creating a symbol
const mySymbol = Symbol('description');

// Using symbols as object keys
const obj = {
  [mySymbol]: 'value'
};

// Accessing the property using the symbol key
console.log(obj[mySymbol]); // Output: 'value'


// 3.what is immutability in javascript
// ==>immutability refers to the characteristic of data that once created cannot be changed or modified. helps in writing more predictable, maintainable, and less error-prone code.
// Primitive data types like numbers, strings, booleans, null, and undefined are immutable by nature.
// Benefits of Immutability: Immutable data reduces the chances of unexpected side effects in your code. When data remains unchanged, it becomes easier to reason about and predict its behavior. This is especially important in concurrent or asynchronous programming, where multiple parts of the code might access and modify data simultaneously. 



