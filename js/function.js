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
printMultipleTimes(2, "(>_<)");

// ----------
5 + Math.floor(1.2345);
/* 5 + 1 = 6 */

var double = function (number) {
  return number * 2;
};

double(3);
/* 6 */

// ----------
double(5) + double(6);
/* 22 */

double(double(3));
/* 12 */

// ----------
var pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};

var randomWords = ["Planet", "Worm", "Flower", "Computer"];

pickRandomWord(randomWords);
/* "Flower" */

pickRandomWord(["Charlie", "Raj", "Nicole", "Kate", "Sandy"]);
/* "Raj" */

// ------------
var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomWord = randomWords[Math.floor(Math.random() * 5)];

var randomString = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";

console.log(randomString);

// Use function
var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

var randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";

console.log(randomString);

// ---------
generateRandomInsult = function () {
  var randomBodyParts = ["Face", "Nose", "Hair"];
  var randomAdjectives = ["Smelly", "Boring", "Stupid"];
  var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
  
  var randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";

  return randomString;
};