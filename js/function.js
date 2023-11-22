var ourFirstFunction = function () {
  console.log("Hello world!");
};
ourFirstFunction();

// -----------
var sayHelloTo = function (name) {
  console.log("Hello " + name + "!");
};
sayHelloTo("Nick");
sayHelloTo("Lyra");

// ----------
var drawCats = function (howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^=");
  }
};
drawCats(5);
drawCats(100);

// ----------
var printMultipleTimes = function (howManyTimes, whatToDraw) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " " + whatToDraw);
  }
};

printMultipleTimes(5, "=^.^=");
printMultipleTimes(4, "^_^");