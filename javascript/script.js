 function validateForm() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            if (username == "") {
                alert("Sorry , First type your name");
                return false;
            }

            if( password == "") {
                alert(" Sorry , type your password");
                return false;
            }
            return true;
        }
        function validForm() {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var subject = document.getElementById("subject").value;
            var message = document.getElementById("message").value;

            if (name == "") {
                alert("Please fill your full name");
                return false;
            }
            if (email == "") {
                alert("Please fill your email address");
                return false;
            }
            if (subject == "") {
                alert("Please fill the subject");
                return false;
            }
            if (message == "") {
                alert("Please give us feedback / message");
                return false;
            }
            return true;
        }
    

function buyForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var pincode = document.getElementById("pincode").value;
    var payment = document.getElementById("payment").value;

    if (name == "") {
        alert("Please fill  your full name.");
        return false;
    }
    if (phone == "") {
        alert("Please fill  your phone number.");
        return false;
    }
    if (address == "") {
        alert("Please fill your address.");
        return false;
    }
    if (city == "") {
        alert("Please fill  your city.");
        return false;
    }
    if (state == "") {
        alert("Please fill  your state.");
        return false;
    }
    if (pincode == "") {
        alert("Please fill  your pin code.");
        return false;
    }
    if (payment == "") {
        alert("Please select a payment method.");
        return false;
    }
    return true;
}
let card= document.querySelectorAll(".trend");

let blog =document.querySelector(".trends");

let mainPage= document.querySelector(".main");

function shops(){

mainPage.style.display="none";

blog.style.display="none";
}