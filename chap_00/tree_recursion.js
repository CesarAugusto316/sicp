'use strict';

/**
 *
 * @param {number} n
 * @yields {number}
 */
export function* fib(n) {
  const iter = (x) => {
    return (
      x === 0 ? 0
        : x === 1 ? 1
          : x - 1 + x - 2
    );
  };

  for (let i = 0; i <= n; i++) {
    yield iter(i);
  }
}


/**
 *
 * @param {number} n
 * @returns {number}
 */
export function fib2(n) {
  const iter = (a, b, count) => {
    return count === 0
      ? b
      : iter(a + b, a, count--);
  };

  return iter(1, 0, n);
}

// console.log(fib(10));c
// console.log(fibNumbers.next());
// console.log(fibNumbers.next());
// console.log(fibNumbers.next());

console.log(fib2(7));
