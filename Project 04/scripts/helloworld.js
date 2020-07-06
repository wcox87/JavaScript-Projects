var x = 7;
var y = 9;
var add = x+y;
var sub = y-x;
var multi = x*y;
var divi = y/x;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function addfunc(){
    document.getElementById("addition").innerHTML = (add);
}

function subfunc() {
    document.getElementById("subtract").innerHTML = (sub);
}

function multifunc() {
    document.getElementById("multiply").innerHTML = (multi);
}

function divifunc() {
    document.getElementById("division").innerHTML = (divi);
}

function randmath(){
    var randomnumber1 = getRandomIntInclusive(1,11);
    var randomnumber2 = getRandomIntInclusive(1,11);
    var randomanswer = (randomnumber1+randomnumber2);
    alert("The random problem is: " + randomnumber1 + " + " randomnumber2 + " = " + randomanswer);
}