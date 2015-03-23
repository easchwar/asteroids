var sum = function() {
  var args = [].slice.call(arguments, 0 );
  var sum = 0;
  for (var i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};


// console.log(sum(1,2,3));

Function.prototype.myBind = function(context) {
  var fn = this;
  var args = [].slice.call(arguments, 1);
  return function () {
    return fn.apply(context, args);
  };
};

var Cat = function(name) {
  this.name = name;
};

var sayName = function(n) {
  for (var i = 0; i < n; i++) {
     console.log(this.name);
  }
};

Cat.prototype.sayName = function(n) {
  for (var i = 0; i < n; i++) {
     console.log(this.name);
  }
};

var gizmo = new Cat('gizmo');

// console.log(sayName.myBind(gizmo, 3)());

var curriedSum = function(numArgs) {
  var numbers = [];

  var _curriedSum = function(n) {
    numbers.push(n);
    var sum = 0;
    if (numbers.length === numArgs) {
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};


var sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));


Function.prototype.curry = function(numArgs) {
  var args = [];
  var fn = this;

  var _curried = function(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply(this, args);
    } else {
      return _curried;
    }
  };

  return _curried;
};

var threeSum = function(a, b, c) {
  return a + b + c;
};

// var sum = threeSum.curry(3);
// console.log(sum(1)(2)(3));

// gizmo.sayName(1);
var fun = gizmo.sayName.curry(1);

console.log(fun(3));
