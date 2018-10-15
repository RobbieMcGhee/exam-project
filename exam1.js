/* 1st, the login function:
Note, this didnt work to begin with because i had the JS script at the top of the HTML doc, so it ran 
before anything else was realised by the system. I fixed it by moving the script down after the body 
section of the HTML file :) */
const user = [
    {email: 'jeppe@gmail.com', streetName: 'Kastrupvej 1', zipCode: '2770', city: 'Kastrup', pw: "Jep", repeatPw: "Jep"},
    {email: 'frederik@gmail.com', streetName: 'Kastrupvej 2', zipCode: '2770', city: 'Kastrup', pw: "Fre", repeatPw: "Fre"},
    {email: 'robert@gmail.com', streetName: 'Kastrupvej 3', zipCode: '2770', city: 'Kastrup', pw: "Rob", repeatPw: "Rob"},
    {email: 'donald@gmail.com', streetName: 'Kastrupvej 4', zipCode: '2770', city: 'Kastrup', pw: "Don", repeatPw: "Don"},
]
//Existing Users signing in:
function signingIn(){
    console.log('The Sign In button is clicked!'); //to check if the console registers the click
    var eMail = document.getElementById('E-mail').value;
    var password = document.getElementById('password').value;
    for (var i = 0; i < user.length; i++) {
        if (eMail == user[i].email && password == user[i].pw) {
            document.getElementById('signInResult').textContent = 'You have succesfully logged in';
            return true;
        }
        else{
            document.getElementById('signInResult').textContent = 'Incorrect Username or Password';
        }
    }
}
// Registering New Users: 
function registering(){
    console.log('The Register button is clicked!');
    var registerEmail = document.getElementById('registerEmail').value;
    /* NOTE, in case we want to add functions to these variables and check if the inputted text
    is in fact e.g. Numbers, then we will use them. 
    var registerStreetName = doducment.getElementById('streetName').value;
    var registerCity = document.getElementById('city').value;*/
    var registerZipCode = document.getElementById('zipCode').value;
    var registerPassword = document.getElementById('registerPassword').value;
    var repeatPassword = document.getElementById('repeatPassword').value;
    
/* Now, after the new users have entered the information, we need to make sure it does not
interfer with the existing user data*/
// New Users Registering: 
    var newUser = {
        email: registerEmail, pw: registerPassword, repeatPw: repeatPassword
    };
  //  var re = /^((?!(0))[0-9]{4})$/g; // To check the pattern
    for (var i = 0; i < user.length; i++) { //Reverse the logic here makes sense!'
    console.log("for loop called")
    //(registerZipCode.length == 4 && !registerZipCode.startsWith("0"))
  
        if (registerEmail.length > 0 && registerEmail !== user[i].email && 
            registerPassword === repeatPassword && registerZipCode.length == 4 &&
             !registerZipCode.startsWith("0")){
                console.log("check")
                user.push(newUser)
                document.getElementById('registerResult').textContent = 'Registration Successful!';
                return true;
            }
            else{
                document.getElementById('registerResult').textContent = "Username/Email already exists, or wrong Password input, please try again!";
            };
    };
};
/*
<script type="text/javascript">
 var num1 = 100;
 if(isNaN(num1)){
	document.write(num1 + " is not a number <br/>");
 }else{
	document.write(num1 + " is a number <br/>");
 }
*/


