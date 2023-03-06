function validation(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('phoneno').value;
    var message = document.getElementById('message').value;

    if (name == "") {
        document.getElementById('username').innerHTML = "**Please fill the name";
        return false;
    }
    if ((name.length <= 2) || (name.length > 20)) {
        document.getElementById('username').innerHTML = "**Exceeded the limit";
        return false;
    }
    if (!isNaN(name)) {
        document.getElementById('username').innerHTML = "**Please fill the vaild name";
        return false;
    }
    if (email == "") {
        document.getElementById('emails').innerHTML = "**Please fill the email";
        return false;
    }
    if (email.indexof('@') <= 0) {
        document.getElementById('emails').innerHTML = "**@ position invaild";
        return false;
    }
    if ((email.charAT(email.length - 4) != '.') && (email.charAT(email.length - 3) != '.')) {
        document.getElementById('emails').innerHTML = "**Please fill the vaild email";
        return false;
    }
    if (mobile == "") {
        document.getElementById('phones').innerHTML = "**Please fill the mobile";
        return false;
    }
    if (isNaN(mobile)) {
        document.getElementById('phones').innerHTML = "**Please fill the vaild mobile number";
        return false;
    }
    if (mobile.length != 10) {
        document.getElementById('phones').innerHTML = "**Please fill the vaild mobile number";
        return false;
    }
    if(message == ""){
        document.getElementById('messages').innerHTML = "**Please fill the message";
        return false;
    }
    
}