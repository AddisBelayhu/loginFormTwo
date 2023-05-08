

const form = document.getElementById('login-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission
  
    // Get the values of the form inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // TODO: Add login logic here
    function loginPage(form) {
        if (form.username.value=="addis" && form.password.value=="moa") { 

               alert("Incorrect detail Password")
        }              
        
        else {
                 alert("Incorrect detail Username")
        }
    }

});
    
   

    
  



