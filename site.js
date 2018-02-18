$('#form').on('submit', function(e) {
   var birthdate = new Date(document.getElementById("bday").value);
   var today = new Date();
   var userdate = birthdate.getFullYear();
   var todaydate = today.getFullYear();
   var age = todaydate - userdate;
   var Confirmation = document.getElementById("confirmation");
   var old = "Form was submitted successfully. See you o the Discord!";
   var young = "Sorry, you are too young for this form to be accepted. We do not want any squeakers.";
   e.preventDefault();
   console.log ('This form was submitted');
   if(age < 18) {
     confirmation.textContent = young;
       document.getElementById("confirmation").style.color = 'red';
   }
   if (age >= 18) {
     confirmation.textContent = old;
       document.getElementById("confirmation").style.color = 'green';
   }
 });
