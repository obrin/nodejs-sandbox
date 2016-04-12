Array.prototype.map = function(projectionFunction){
  const results = [];
  this.forEach(itemInArray => results.push(projectionFunction(itemInArray)));
  return results;
};

Array.prototype.filter = function(projectionFunction) {
  const results = [];
  this.forEach(itemInArray => {
    if (projectionFunction(itemInArray)) {
      results.push(itemInArray)
    }
  });
  return results;
};

Array.prototype.concatAll = function() {
  const results = [];
  this.forEach(subArray => results.push.apply(results, subArray));
  return results;
};

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
  return this
    .map(item => projectionFunctionThatReturnsArray(item))
    .concatAll();
};

Array.prototype.reduce = function(combiner, initialValue) {
  let counter, accumulatedValue;

  if (this.length === 0) {
    return this;
  }

  if (arguments.length === 1) {
    counter = 1;
    accumulatedValue = this[0];
  } else if (arguments.length >= 2) {
    counter = 0;
    accumulatedValue = initialValue;
  } else {
    throw 'Invalid Arguments';
  }

  while(counter < this.length) {
    accumulatedValue = combiner(accumulatedValue, this[counter]);
    counter++;
  }
  return [accumulatedValue];
};

Array.zip = function(left, right, combinerFunction) {
  let counter, results = [];
  for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
    results.push(combinerFunction(left[counter], right[counter]))
  }
  return results;
};
