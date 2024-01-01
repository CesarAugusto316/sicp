function factorial(n) {
  return n === 1
    ? 1
    : n * factorial(n - 1)
}

// console.log(factorial(6));

/**
 *
 * @param {number} n
 * @returns {number}
 */
function factorial2(n) {
  function iter(product, counter) {
    return counter > n
      ? product
      : iter(counter * product, counter + 1)
  }

  return iter(1, 1)
}

console.log(factorial2(6));
