function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var message = document.forms["contactForm"]["textMessage"].value;
    var email = document.forms["contactForm"]["email"].value;
    if (name == ""){
        alert("Name must be filled out.");
        return false;
    }
    if (email == "") {
        alert("Your email address can't be blank.");
        return false;
    }
    if (message == "") {
        alert("Your message can't be blank.");
        return false;
    }
}