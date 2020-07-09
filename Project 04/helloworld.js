function addfunc(){
    var x = 7;
    var y = 9;
    var add = x+y;
    document.getElementById("addition").innerHTML = (add);
}

function subfunc() {
    var x = 7;
    var y = 9;
    var sub = y-x;
    document.getElementById("subtract").innerHTML = (sub);
}

function multifunc() {
    var x = 7;
    var y = 9;
    var multi = y * x;
    document.getElementById("multiply").innerHTML = (multi);
}

function divifunc() {
    var x = 7;
    var y = 9;
    var divi = y / x;
    document.getElementById("division").innerHTML = (divi);
}

function incfunc() {
    var x = 7;
    var y = 9;
    var increment = ++x;
    document.getElementById("increment").innerHTML = (increment);
}

function decfunc() {
    var x = 7;
    var y = 9;
    var decrement = --x;
    document.getElementById("decrement").innerHTML = (decrement);
}

function modfunc() {
    var x = 7;
    var y = 9;
    var modulus = y % x;
    document.getElementById("modulus").innerHTML = (modulus);
}
function randmath(){
    var randomnumber1 = Math.floor(Math.random() * 11);
    var randomnumber2 = Math.floor(Math.random() * 11);
    document.getElementById("randommath").innerHTML = randomnumber1 + " + " + randomnumber2 + " = " + (randomnumber1+randomnumber2);
}

//function randmath(){
 //   var randomnumber1 = getRandomIntInclusive(1,11);
   // var randomnumber2 = getRandomIntInclusive(1,11);
    //var randomanswer = (randomnumber1+randomnumber2);
    //alert("The random problem is: " + randomnumber1 + " + " randomnumber2 + " = " + randomanswer);
//}