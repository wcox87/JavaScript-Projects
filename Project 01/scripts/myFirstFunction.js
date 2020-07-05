function Green_Text_Function() { //Create function from example in learning material
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("greenText").innerHTML = result;
}

Green_Text_Function(); //Call the function