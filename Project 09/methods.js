//toFixed Method
var X = 5.36789;
var Y = X.toFixed(2);
alert(Y);

//valueOf Method
var A = 27;
var B = A.valueOf();
alert(B);

//concat Method
function createSentence() {
    var part1 = "Bruce Wayne "
    var part2 = "is secretly "
    var part3 = "Batman!"
    var fullSentence = part1.concat(part2, part3);
    document.getElementById("fullSentence").innerHTML = fullSentence;
}

//slice Method
function sliceMethod () {
    var Sentence = "All work and no play makes Johnny a dull boy."
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

//toUpperCase Method
function upperCase() {
    var sentence = "this sentence should be uppercase."
    var uppersentence = sentence.toUpperCase();
    document.getElementById("upperCase").innerHTML = uppersentence;
}

//Search Method
function Search() {
    var superman = "We're searching for Superman within this sentence.";
    var search = superman.search("Superman");
    document.getElementById("search").innerHTML = search;
}

//toString Method
function numberString() {
    var X = 42
    document.getElementById("toString").innerHTML = X.toString();
}

//precisionMethod
function precisionNumber() {
    var Y = 867.5309;
    document.getElementById("phoneNumber").innerHTML = Y.toPrecision(6);
}