var name = window.prompt("Enter your name: ");
var email = window.prompt("Enter your email: ");
var dob = window.prompt("Enter your date fo birth (mm-dd-yyyy)");
var greet = "Hello, "

function userGreeting() {
    var result = greet + name;
    document.getElementById("hellouser").innerHTML = result;
}

function userInfo(){
    var info = greet + name + ". <br>Your email address is " + email + ". <br>Your date of birth is " + dob;
    document.getElementById("userInfo").innerHTML = info;
}
userGreeting();