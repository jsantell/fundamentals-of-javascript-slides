/**
 * Create a 'print' function that takes an argument and logs the
 * argument to the console with `console.log`
 */

function print (val) {
  console.log(val);
}

/**
 * 1. Implement `forEach` function that takes an array as the first argument
 * and a function as the second argument. The function should run for each
 * element in the array in order.
 *
 * 2. Call the new `forEach` function with an array and your `print` function
 * above that prints the value of each element
 */

function forEach (array, fn) {
  for (var i = 0; i < array.length; i++)
    fn(array[i], i, array);
}

// forEach([1,2,3], print);


/**
 * 1. Implement `map` function that takes an array as the first argument
 * and a function as the second argument. The function should run
 * for each element in the array in order and return an array of the return
 * values of each function call.
 *
 * 2. Call the new `map` function with an array and an anonymous function
 * that squares the values.
 */

function map (array, fn) {
  var newArray = [];
  forEach(array, function (x) {
    newArray.push(fn(x));
  });
  return newArray;
}

function square (x) { return x*x; }

print(map([1,2,3,4,5], square));

