var color = prompt("What is your favorite color?");

function favoriteColor() {
    var response = color.toUpperCase();
    if (response == "GREEN") {
       document.getElementById("color") .innerHTML = "Green is my favorite color too!";
    }
    else {
        document.getElementById("color").innerHTML = color + " is a pretty nice color, but have you seen green?";
    }
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

function colorReminder() {
    console.log("Going into alert for color response")
    alert(response);
    console.log("Alert completed");
}