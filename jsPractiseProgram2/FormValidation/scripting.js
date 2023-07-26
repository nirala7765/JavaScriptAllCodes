let Username = document.getElementById("uName")
let Name = document.getElementById("Name")
let Email = document.getElementById("Email")
let password = document.getElementById("password")
let cnfpassword = document.getElementById("cnfpass")
let cnfpasserror = document.getElementById("cnfpError")
let passwordError = document.getElementById("passwordError")
let usernameError = document.getElementById("uNameError")
let EmailError = document.getElementById("EmailError")

function formvalidation() {

    if (Username.value.length < 4  ||  Name.value.length<4) {

        alert("Select username and Name of atleast 4 characters")
        // usernameError.innerText = "Select username and Name of atleast 4 characters"
        // usernameError.style.visibility = "visible"
        // usernameError.style.color = "red"



    } else {
        let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!Email.value.match(pattern)) {
            EmailError.innerText = "Email Can't be Accepted!"
            EmailError.style.color = "red"
            EmailError.style.visibility = "visible"

        }
        else {

            if (password.value.length < 3) {
                passwordError.innerText = "Password must be combination of  atleast 3 character"
                passwordError.style.visibility = "visible"
                passwordError.style.color = "red"

            }
            else if (password.value.length > 15) {
                passwordError.innerText = "Password must be less than 15 Characters"
            }
            else {



                if (password.value == cnfpassword.value) {
                    cnfpasserror.innerText = "Password Matched...";
                    cnfpasserror.style.visibility = "visible";
                    cnfpasserror.style.color = "Green"

                } else {
                    cnfpasserror.innerText = "Password Doesn't matched...."
                    cnfpasserror.style.visibility = "visible";
                    cnfpasserror.style.color = "Red"
                }
            }

        }



    }







}