function hero_function() {
    var hero_output;
    var userinput = document.getElementById("hero_input").value;
    var heroes = userinput.toLowerCase();
    var hero_string = " is a great hero!";
    switch(heroes) {
        case "batman":
            hero_output = "Batman" + hero_string;
        break;
        case "superman":
            hero_output = "Superman" + hero_string;
        break;
        case "the tick":
            hero_output = "The Tick" + hero_string;
        break;
        case "dr. manhattan":
            hero_output = "Dr. Manhattan" + hero_string;
        break;
        case "deadpool":
            hero_output = "Deadpool" + hero_string;
        break;
        case "quailman":
            hero_output = "Quailman" + hero_string;
        break;
        default:
            hero_output = "Please select a hero from the list above."
    }
    document.getElementById("output").innerHTML = hero_output;
}

function classFunction(){
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The text has changed!"
}

var circle = document.getElementById("canvas");
var ctx = circle.getContext("2d");
ctx.beginPath();
ctx.arc(250,250,250,0,2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.arc(150, 150, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.arc(400, 150, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.arc(250, 350, 90, 0, 1 * Math.PI);
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();

var gradient = document.getElementById("canvas2");
var ctx2 = gradient.getContext("2d");

var gradient2 = ctx2.createLinearGradient(0,0,500,0);
gradient2.addColorStop(0, "green");
gradient2.addColorStop(1, "black");

ctx2.fillStyle = gradient2;
ctx2.fillRect(0,0,500,500);