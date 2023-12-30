// Building abstractions with functions

// 1. JavaScript functions use "applicative-order evaluation",
// meaning that all the arguments to a function are evaluated
// before the function itself is applied, this contrasts with
// "normal-order evaluation", in which the arguments are not
// evaluated if they are not needed to determine the function value.


const circumference = (/** @type {number} */ radius) => 2 * Math.PI * radius;

/** @type {number} */
const result = circumference(10);
console.log(result.valueOf());

/**
 *
 * @template T
 *
 * @param {boolean} predicate
 * @param {T} thenClause
 * @param {T} elseClause
 * returns {T}
 */
function condition(predicate, thenClause, elseClause) {
  return predicate ? thenClause : elseClause;
}

const n = condition(true, 1, 2);
