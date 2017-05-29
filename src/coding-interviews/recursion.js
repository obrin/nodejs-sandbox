// factoral
function factorial (num) {
  if (num <= 0) {
    return 1;
  } else {
    return _factorialRecursion(num, 1)
  }
}

function _factorialRecursion(num, acc) {
  if (num <= 1) {
    return acc;
  } else {
    return _factorialRecursion(num - 1, num * acc)
  }
}

// greatest common divisor
function greatestCommonDivisor(num1, num2) {
  if (!num2) {
    return num1;
  } else {
    return greatestCommonDivisor(num2, num1 % num2)
  }
}

// range1
function range(start, end) {
  if (end - start === 2) {
    return [start + 1]
  } else {
    const list = range(start, end - 1);
    list.push(end - 1);
    return list
  }
}

// fibonacci non-optimised
function fib(n) {
  if (n <= 1) {
    return n;
  } else  {
    return fib(n-1) + fib(n-2);
  }
}

// fibonacci itteration
function fibIter(n) {
  let a = 1;
  let b =  0;
  let temp;

  while (n > 0) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
}

// fibonacci optimised
function fibOpt(n) {
  return _fibIterRecursive(n, 1, 0);
}

function _fibIterRecursive(n, a, b) {
  if (n === 0) {
    return b;
  } else {
    return _fibIterRecursive(n-1, a+b, a)
  }
}

// not tail call optimized
function sumRecur(...args) {
  if (args.length <= 2) {
    return args[0] + args[1];
  }

  return (
    args[0] +
    sumRecur(...args.slice(1))
  );
}

// tail call optimized
function mult(n, ...args) {
  if (!args.length) {
    return n
  }
  return mult(n * args[0], ...args.slice(1));
}