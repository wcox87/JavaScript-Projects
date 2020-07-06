function voter_function(){
    var age = prompt("How old will you be on November 3rd?")
    can_vote = (age >= 18) ? "You are old enough" : "You are not old enough"
    document.getElementById("voterage").innerHTML = can_vote + " to vote."
}

class Vehicle {
    constructor(Make, Model, Year, Color) {
        this.Vehicle_Make = Make;
        this.Vehicle_Model = Model;
        this.Vehicle_Year = Year;
        this.Vehicle_Color = Color;
    }
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

class Console {
    constructor(Type, Manufacturer, HDD, Price){
        this.Console_Type = Type;
        this.Console_Manufacturer = Manufacturer;
        this.Console_HDD = HDD;
        this.Console_price = Price;
    }
}

var Kenny = new Console("Xbox", "Microsoft", "1TB", 399);
var Kyle = new Console("Playstation", "Sony", "500GB", 349)
var Cartman = new Console("Switch", "Nintendo", "128GB", 299)

function newConsole(){
    document.getElementById("New_and_This").innerHTML = "Kyle purchased a " + Kyle.Console_Type + " made by " + Kyle.Console_Manufacturer + ".  It has a " + Kyle.Console_HDD + " HDD. It only cost him $" + Kyle.Console_price + ".";
}

function count_function(){
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

function countdown_function(){
    document.getElementById("Nested_Function").innerHTML = Countdown();
    function Countdown(){
        var startingclock = 10
        while (startingclock > 0) {
            startingclock --;
            alert(startingclock);
        }
        return startingclock;
    }
}