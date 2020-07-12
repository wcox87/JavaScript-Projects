function Call_Loop() {
    var Value = "";
    var a = prompt("Enter a number between 1 and 10");
    var userNumber = ++a;
    var b = 1;
    while (b < userNumber) {
        Value += "<br>" + b;
        b++;
    }
    document.getElementById("Loop").innerHTML = Value;
}

function strLength() {
    var str = prompt("Enter a statement to find its length.");
    var a = str.length;
    document.getElementById("string").innerHTML = str;
    document.getElementById("strlength").innerHTML = a;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y=0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function hero_pics() {
    var img = document.createElement("img");
    img.src = "https://th.bing.com/th/id/OIP.3EaxXXW_gOmR212K5wtgsQHaDJ?w=347&h=148&c=7&o=5&pid=1.7";
    var src = document.getElementById("image");
    src.appendChild(img);
    var hero_pictures = [];
    hero_pictures[0] = "Han Solo"
    hero_pictures[1] = "Batman";
    hero_pictures[2] = "Superman";
    hero_pictures[3] = "Iron Man";
    document.getElementById("Hero").innerHTML = "In this picture we see " + hero_pictures[0] + " in his natural environment.";
}

function constant_function() {
    const Game_Console = {type:"Xbox Series X", brand:"Microsoft", color:"black"};
    Game_Console.color = "white";
    Game_Console.price = "$499";
    document.getElementById("Constant").innerHTML = "Phil owns an " + Game_Console.type + " made by " + Game_Console.brand + " and it is " + Game_Console.color + " in color." + " It costs " + Game_Console.price;
}

var playstation = 33;
document.write(playstation);
{
    let playstation = 92;
    document.write("<br>" + playstation);
}
document.write("<br>" + playstation);

var nintendo = returnFunction(6, 8);
function returnFunction(q, g) {
    return q *g;
}
document.write("<br>" + nintendo);

let dellcomputer = {
    manufacturer: "Dell",
    model: "Optiplex",
    year: "2004",
    processor: "Intel Pentium 4",
    description: function () {
        return "The PC is a " + this.manufacturer + this.model + " made in " + this.year + " featuring a " + this.processor;
    }
}
document.getElementById("computer_object").innerHTML=dellcomputer.description();