$('#form').on('submit', function(e) {
   var username = $('#name').val();
   var useremail = $('#email').val();
   var age = $('#age').val();
   var checkemail = /^([a-zA-Z0-9_])+(([a-zA-Z0-9])+)+([a-zA-Z0-9]{2,4})+$/;
   var Confirmation = document.getElementById("confirmation");
   var success = "Form was submitted successfully. See you o the Discord!";
   var fill = "Please fill out the form.";
   var sorry = "Sorry, you are too young for this form to be accepted. We do not want any squeakers.";
   var unvalid = "Your email is not valid."

   e.preventDefault();
   console.log ('This form was attemptedly submitted');
   if(document.getElementById("#email").value !== '' && !checkEmail.test(useremail))
    {
        confirmation.textContent = unvalid;
        document.getElementById("confirmation").style.color = 'red';
      return false;
    }

   if (username === '' || useremail === '' || age === '') {
      confirmation.textContent = fill;
      document.getElementById("confirmation").style.color = 'red';
    }
    else{
      console.log("Submission Completed", username, useremail, age);
      confirmation.textContent = success;
      document.getElementById("confirmation").style.color = 'green';
    }
   }
 });
