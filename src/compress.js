const wear1 = function (v) {};

const wear2 = function () {};

const wear3 = function () {};

function Decorator(beforeFn, afterFn) {
  return function () {
    beforeFn.apply(this, arguments);
    afterFn.apply(this, arguments);
  };
}

Decorator(wear1.bind(null, window), wear2)("Decorator参数");