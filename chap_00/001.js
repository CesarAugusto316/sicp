'use strict';
// Building abstractions with functions

// 1. JavaScript functions use "applicative-order evaluation",
// meaning that all the arguments to a function are evaluated
// before the function itself is applied, this contrasts with
// "normal-order evaluation", in which the arguments are not
// evaluated if they are not needed..


const circumference = (/** @type {number} */ radius) => 2 * Math.PI * radius;

/** @type {number} */
const result = circumference(10);
console.log(result.valueOf());

/**
 *
 * @template T
 * @param {boolean} predicate
 * @param {T} thenClause
 * @param {T} elseClause
 * @returns {T}
 */
function condition(predicate, thenClause, elseClause) {
  return predicate ? thenClause : elseClause;
}

const n = condition(true, 1, 2);

function sqrtIter(guess, x) {
  return condition(
    isGoodEnough(guess, x),
    guess,
    sqrt(improve(guess, x))
  );
}

function improve(guess, x) {
  return average(guess, x / guess);
}

/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function average(x, y) {
  return (x + y) / 2;
}

function isGoodEnough(guess, x) {
  return Math.abs(square(guess) - x) < 0.001;
}

/**
 *
 * @param {number} x
 * @returns {number}
 */
function square(x) {
  return x * x;
}

function sqrt(x) {
  function is_good_enough(guess, x) {
    return Math.abs(square(guess) - x) < 0.001;
  }
  function improve(guess, x) {
    return average(guess, x / guess);
  }
  function sqrtIter(guess, x) {
    return is_good_enough(guess, x)
      ? guess
      : sqrtIter(improve(guess, x), x);
  }

  return sqrtIter(1, x);
}
