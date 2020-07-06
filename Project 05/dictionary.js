var console = {
    Name: "Xbox One X",
    Manufacturer: "Microsoft",
    ReleaseYear: "2016",    
};

function favconsole() {
    delete console.Name;
    document.getElementById("dictionary").innerHTML = console.Name;
}