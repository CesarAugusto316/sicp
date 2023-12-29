// Building abstractions with functions
const circumference = (/** @type {number} */ radius) => 2 * Math.PI * radius;

/** @type {number} */
const result = circumference(10);
console.log(result.valueOf());
