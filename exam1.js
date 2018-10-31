/* 1st, the login function:
Note, this didnt work to begin with because i had the JS script at the top of the HTML doc, so it ran 
before anything else was realised by the system. I fixed it by moving the script down after the body 
section of the HTML file :) */
/* First method, no longer needed! 
const user = [
    {email: 'jeppe@gmail.com', fullName: 'Jeppe Bangskjær', streetName: 'Kastrupvej 1', zipCode: '2770', city: 'Kastrup', pw: "Jep", repeatPw: "Jep"},
    {email: 'frederik@gmail.com', fullName: 'Frederik Mouritsen', streetName: 'Kastrupvej 2', zipCode: '2770', city: 'Kastrup', pw: "Fre", repeatPw: "Fre"},
    {email: 'robert@gmail.com', fullName: 'Robert McGhee', streetName: 'Kastrupvej 3', zipCode: '2770', city: 'Kastrup', pw: "Rob", repeatPw: "Rob"},
] 
 */
// We will create User objects. The constructor for our class, which will allow us to create new objects of our class
 class User {

    constructor(email, fullName, streetName, zipCode, city, pw, repeatPw) {      
      this.email = email;
      this.fullName = fullName;
      this.streetName = streetName;
      this.zipCode = zipCode,
      this.city = city,
      this.pw = pw;   
      this.repeatPw = repeatPw;
    }
 }
 
var users = [];
// Here we add some New Users to the empty user array 
users.push(new User("jeppe@gmail.com", "Jeppe Bangskjær", "Kastrupvej 1", "2770", "Kastrup", "Jep", "Jep"));
users.push(new User("frederik@gmail.com", "Frederik Mouritsen", "Kastrupvej 2", "2770", "Kastrup", "Fre", "Fre")); 
users.push(new User("robert@gmail.com", "Robert McGhee", "Kastrupvej 3", "2770", "Kastrup", "Rob", "Rob"));    

//Existing Users signing in:
document.getElementById("signIn").addEventListener("click", function (){ // This negates the "required" function in HTML! 
    var registerEmail = document.getElementById('registerEmail').value;        
    
    var form = document.getElementById('signInForm'); // Gave the form this id!     

    for(var i=0; i < form.elements.length; i++){ // This loop is added because the required part got negated by the addEventListener funtion.
        if(form.elements[i].value === '' && form.elements[i].hasAttribute('required')){
            alert('There are some required fields!');
            return false;
        }
    }

    console.log('The Sign In button is clicked!'); //to check if the console registers the click
    var eMail = document.getElementById('E-mail').value;
    var password = document.getElementById('password').value;
    for (var i = 0; i < users.length; i++) {
        if (eMail == users[i].email && password == users[i].pw) {
            document.getElementById('signInResult').textContent = 'You have succesfully signed in';
            return window.location.replace("searchbar2.html");
            
        }
        else{
            document.getElementById('signInResult').textContent = 'Incorrect Username or Password';
        }
    }
});
// Registering New Users: 
document.getElementById("register").addEventListener("click",function(){
    console.log('The Register button is clicked!');
    
    var form = document.getElementById('registerForm'); // Same as in sign in, the addEvent function is negating the required function, so we add the loop to check if the fields are empty!    

    for(var i=0; i < form.elements.length; i++){
        if(form.elements[i].value === '' && form.elements[i].hasAttribute('required')){
            alert('There are some required fields!');
            return false;
        }
    }

    var registerEmail = document.getElementById('registerEmail').value;
    var registerStreetName = document.getElementById('registerStreetName').value;
    var registerFullName = document.getElementById('registerFullName').value;
    var registerCity = document.getElementById('city').value;
    var registerZipCode = document.getElementById('registerZipCode').value;
    var registerPassword = document.getElementById('registerPassword').value;
    var repeatPassword = document.getElementById('repeatPassword').value;
    
    function valEmail (mail) { //This will check if the input in the email fields match the requirements. 
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail)
    }

// We need to make sure new user info does not interfer with the existing user data
// New Users Registering: 
    var newerUser = new User(registerEmail, registerFullName, registerStreetName, registerZipCode, registerCity, registerPassword, repeatPassword);
  //  var re = /^((?!(0))[0-9]{4})$/g;  // tried to use regex to check the pattern of zip codes, does not work tho! 
    for (var i = 0; i < users.length; i++) {  //Reversing the logic here could make sense!'
    console.log("for loop called")
    
        
        if (valEmail(registerEmail) && registerEmail !== users[i].email &&   //THIS MIGHT CHANGE WITH NEW USER OBJECTS!
            registerPassword === repeatPassword && registerZipCode.length == 4 &&
             !registerZipCode.startsWith("0")){
                users.push(newerUser);
                console.log('it has been pushed');
                document.getElementById('registerResult').textContent = 'Registration Successful!';
                return true;
            }
            else{
                document.getElementById('registerResult').textContent = "Username/Email already exists, or wrong Password input, please try again!";
            };
    };
});

// Re-directing to the HTML with the filtering function. 







/*
<script type="text/javascript">
 var num1 = 100;
 if(isNaN(num1)){
	document.write(num1 + " is not a number <br/>");
 }else{
	document.write(num1 + " is a number <br/>");
 }
*/

