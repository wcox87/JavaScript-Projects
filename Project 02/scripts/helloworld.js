var xbox = "Xbox One"; playstation = "PlayStation 4"; nintendo = "Nintendo Switch"; pcmr = "PC"; //Assigning the variables we need
var xbox = xbox.fontcolor("green"); //Adding color to the text that is displayed
var playstation = playstation.fontcolor("blue"); //Adding color to the text that is displayed
var nintendo = nintendo.fontcolor("red"); //Adding color to the text that is displayed
var pcmr = pcmr.fontcolor("gold"); //Adding color to the text that is displayed

window.alert("Disclaimer: I enjoy all of the consoles! " + "I own and use all 4.")//Adding text so I don't incite a console war
document.write(pcmr + " > " + playstation); //A simple formula that is displayed

function myFunction(){
    var sentence = "JavaScript has some cool functions and";
    sentence += " I'm excited to learn more!";
    document.getElementById("clickme").innerHTML = sentence;
}