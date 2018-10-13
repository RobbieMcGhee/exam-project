/* 1st, the login function:
Note, this didnt work to begin with because i had the JS script at the top of the HTML doc, so it ran 
before anything else was realised by the system. I fixed it by moving the script down after the body 
section of the HTML file :) */
var signIn = document.getElementById('signIn'); 
const user = [
    {name: "Jeppe", email: 'jeppe@gmail.com', pw: "Jep", repeatPw: "Jep"},
    {name: "Frederik", email: 'frederik@gmail.com', pw: "Fre", repeatPw: "Fre"},
    {name: "Robert", email: 'robert@gmail.com', pw: "Rob", repeatPw: "Rob"},
    {name: "Donald", email: 'donald@gmail.com', pw: "Don", repeatPw: "Don"},
]
// Existing Users signing in! 
signIn.onclick = function(){
    console.log('The Sign In button is clicked!'); //to check if the console registers the click
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    for (var i = 0; i < user.length; i++) {
        if (username == user[i].name && password == user[i].pw) {
            document.getElementById('signInResult').textContent = 'You have succesfully logged in mate';
            return true;
        }
        else{
            document.getElementById('signInResult').textContent = 'Incorrect Username or Password bro';
        }
    }
}
// New Users Registering:
var register = document.getElementById('register');
register.onclick = function(){
    console.log('The Register button is clicked!');
    var registerUsername = document.getElementById('registerUsername').value;
    var registerEmail = document.getElementById('registerEmail').value;
    var registerPassword = document.getElementById('registerPassword').value;
    var repeatPassword = document.getElementById('repeatPassword').value; //remember if function to check this!
/* Now, after the new users have entered the information, we need to make sure it does not
interfer with the existing user data*/
    var newUser = {
        name: registerUsername, email: registerEmail, pw: registerPassword, repeatPw: repeatPassword
    };
    for (var i = 0; i < user.length; i++) { //There is something wrong with the loop, it fails to register new users!
        if (registerUsername.length > 0 && registerUsername !== user[i].name && 
            registerEmail.length > 0 && registerEmail !== user[i].email && 
            registerPassword > 0 && registerPassword === repeatPassword){
                user.push(newUser)
                document.getElementById('registerResult').textContent = 'Registration Successful bro!';
                return true;
            }
            else{
                document.getElementById('registerResult').textContent = "Username / Email already exist, or wrong Password input, please try again mate!";
            };
    };
};


/*
        if (rusername.length > 0 && rpassword.length > 0 && rusername !== user[i].name){
            user.push(newuser)
            //This does not work! you can sign up with an existing user name! 
            document.getElementById('signUpResult').textContent = "Signed up Successfully bruh";
            return true;
        }
        else{
        document.getElementById('signUpResult').textContent = "Username already exists, or password must contain more than 0 characters bruh";
        };   
    };  
};
*/

// 2nd, the filtering page



// 3rd, the shopping cart



