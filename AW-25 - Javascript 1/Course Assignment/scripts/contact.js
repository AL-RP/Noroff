// refer to question 4 before development starts for scope document
function validate(){

   //Input variables that need to be validated
   var email = document.getElementById('email').value;
   var firstName = document.getElementById('firstName').value;
   var lastName = document.getElementById('lastName').value;
   var phoneNumber = document.getElementById('phone').value;
   
   //RexExp patterns that will be tested against the input.
   var firstNameRegExp = /^[0-9a-zA-Z ]+$/;
   var lastNameRegExp = /^[0-9a-zA-Z ]+$/;
   var phoneRegExp = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
   var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   //The results after testing the input against the RexExp
   var firstNameresult = firstNameRegExp.test(firstName);
   var lastNameresult = lastNameRegExp.test(lastName);
   var phoneresult = phoneRegExp.test(phoneNumber);
   var emailresult = emailRegExp.test(email);

   /*Console logs
   console.log("Firstname:"+firstNameresult);
   console.log("Last name:"+lastNameresult);
   console.log("Telephone:"+phoneresult);
   console.log("Email:"+emailresult);*/

   /*
   Finally displaying error message if something is wrong. And visually showing the user this with border colors.
   I just thought I'd add a comment here, as I have added a bit more than the assignment suggested. However, I think I can justify that
   by saying that it's always better to show a user visually and not only by text, therefore I did what the assignment asked,
   but also added in an extra "Visual Tweak" and also added a "Placeholder".

   I'm also quite sure that this code could be narrowed down, by using vars or creating a "config" for the getElementById.
   I'll be discussing that further in the report.
   */
   if (firstNameresult == false){
        document.getElementById('firstName').style.cssText = "border-color: red;";
        document.getElementById('firstName').setAttribute("placeholder", "This field cannot be blank");
        document.getElementById('firstNameError').style.cssText = "display: block";
    } else {
        document.getElementById('firstName').style.cssText = "border-color: green";
        document.getElementById('firstNameError').style.cssText = "display: none";
    }

   if (lastNameresult == false){
        document.getElementById('lastName').style.cssText = "border-color: red;";
        document.getElementById('lastName').setAttribute("placeholder", "This field cannot be blank");
        document.getElementById('lastNameError').style.cssText = "display: block";
    } else {
        document.getElementById('lastName').style.cssText = "border-color: green";
        document.getElementById('lastNameError').style.cssText = "display: none";
    }

   if (phoneresult == false){
        document.getElementById('phone').style.cssText = "border-color: red;";
        document.getElementById('phone').setAttribute("placeholder", "Please enter a correct phone number");
        document.getElementById('phoneError').style.cssText = "display: block";
    } else {
        document.getElementById('phone').style.cssText = "border-color: green";
        document.getElementById('phoneError').style.cssText = "display: none";
    }
   
   if (emailresult == false){
        document.getElementById('email').style.cssText = "border-color: red;";
        document.getElementById('email').setAttribute("placeholder", "Please enter a correct email address");
        document.getElementById('emailError').style.cssText = "display: block";
    } else {
        document.getElementById('email').style.cssText = "border-color: green";
        document.getElementById('emailError').style.cssText = "display: none";
    }
   
   return true;
}