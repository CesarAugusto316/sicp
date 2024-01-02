/**
 * O(n) space complexity
 * @param {*} n
 * @returns {number}
 */
export function factorial(n) {
  // the interpreter must keep track of the state of the program
  // so n is hidden in the call stack
  return n === 1
    ? 1
    : n * factorial(n - 1);
}

// console.log(factorial(6));

/**
 * O(1) space complexity
 * @param {number} n
 * @returns {number}
 */
export function factorial2(n) {
  // state variable provides {accumulator, counter} a complete
  // description of the state of the program at any point
  function iter(accumulator, counter = 1) {
    return counter > n
      ? accumulator
      : iter(counter * accumulator, counter + 1);
  }

  return iter(1);
}

console.log(factorial2(6));
