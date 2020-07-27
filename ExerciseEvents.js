/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password

*/

/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/
function checkfield(){

// solution 1
var name = document.getElementById('username').value;
var pass1 = document.getElementById('password').value;
var pass2 = document.getElementById('confirmPassword').value;

//solution 2
if (name == "") {
  alert("Name must be filled out");
}
else if (pass1 == "") {
  alert("password must be filled out");
}
else if (pass2 == "") {
  alert("confirm password must be filled out");
}


// excercise 03  and excercise 05
else{
  if(pass1 === pass2){
    alert("REGISTERED SUCCESSFULLY");
  }
  else{
    alert("INVLAID PASSWORD");
  }

}

/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/






}
/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/


/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/



