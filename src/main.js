const wear1 = function () {
  console.log("执行1");
};

const wear2 = function () {
  console.log("执行2");
};

const wear3 = function () {
  console.log("执行3");
};

function Decorator(oneFn, twoFn) {
  return function () {
    oneFn.apply(this, arguments);
    twoFn.apply(this, arguments);
  };
}

const wear = Decorator(Decorator(wear1, wear2), wear3);
wear();
