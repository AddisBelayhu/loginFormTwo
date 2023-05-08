

const form = document.getElementById('login-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission
  
    // Get the values of the form inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // TODO: Add login logic here
  
    // Reset the form
    form.reset();
  });

  
