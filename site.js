$('#form').on('submit', function(e) {
   var birthdate = new Date(document.getElementById("bday").value);
   var username = $('#name').val();
   var useremail = $('#email').val();
   var bday = $('#bday').val();
   var Confirmation = document.getElementById("confirmation");
   var old = "Form was submitted successfully. See you on the Discord!";
   var fill = "Your form is not properly filled out.";
   e.preventDefault();
   console.log ('This form was submitted');

   if (username === '' || useremail === '' || bday ==='mm/dd/yyyy') {
      confirmation.textContent = fill;
      document.getElementById("confirmation").style.color = 'red';
    }
   else{
     confirmation.textContent = old;
       document.getElementById("confirmation").style.color = 'green';
   }
 });
