const attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

    if ( username == "evilgenius" && password == "monkey#123"){
    alert ("Login successful!  Welcome to Geography Nerd.");
    window.location = "success.html"; // Redirecting to other page.
    return true;
    }
    else{
    attempt --;// Decrementing by one.
    alert("You have left "+attempt+" attempt;");
    // Disabling fields after 3 attempts.
    if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;
    return false;
    }
    }
    }

    function relocate() {
      location.replace("https:/.http://localhost:3000/regions")
    }

relocate();
