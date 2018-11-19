
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
            alert('You must fill in both Username and Password');
            return false;
        }
    }

    console.log('The Sign In button is clicked!'); //to check if the console registers the click
    var eMail = document.getElementById('E-mail').value;
    var password = document.getElementById('password').value;
    for (var i = 0; i < users.length; i++) {
        if (eMail == users[i].email && password == users[i].pw) {
            document.getElementById('signInResult').textContent = 'You have succesfully signed in';
            return window.location.replace("searchpage.html");
            
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

    var inputOnlyCharacters = /^[a-zA-Z\s]*$/; //this regex means only characters
    var inputOnlyNumbers = /^[0-9]+$/; //this regex means only numbers, we made it variables since we might use them several times
        
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

    for (var i = 0; i < users.length; i++) { 
    console.log("for loop called")
//First we test the email criteria
        if (valEmail(registerEmail) && registerEmail !== users[i].email) {
        } 
            else {
                document.getElementById('registerResult').textContent = 'Your email is not an approved';
                return false
                }
// Now we check the Name criteria
        if(inputOnlyCharacters.test(registerFullName)) {
        }
            else {
                document.getElementById('registerResult').textContent = 'Your full name should be western letters only';
                return false
            }
// Now we check the Address criteria
        if (/[A-Za-z]/g.test(registerStreetName) && /[0-9]/g.test(registerStreetName)){
        }
            else {
                document.getElementById('registerResult').textContent = 'Address must contain both letters and number(s)';
                return false
            }       
// Now we check the Zip Code criteria
        if (inputOnlyNumbers.test(registerZipCode) && registerZipCode.length == 4 && !registerZipCode.startsWith("0")) {
        }
        else {
            document.getElementById('registerResult').textContent = 'Your Zip code does not fulfill the requirements';
            return false
        }  
// We have not added requirements for the password for this project, except that there must be some input
        if (registerPassword === repeatPassword) {
                users.push(newerUser);
                console.log('it has been pushed');
                document.getElementById('registerResult').textContent = 'Registration Successful!';
                return true
            }
            else{
                document.getElementById('registerResult').textContent = 'Check if password matches';
                return false
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

