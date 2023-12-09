// public/js/registration.js

document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const usernameInput = document.getElementById('usernameInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const registerBtn = document.getElementById('registerBtn');
  
    registerBtn.addEventListener('click', registerUser);
  
    function registerUser() {
      const username = usernameInput.value;
      const email = emailInput.value;
      const password = passwordInput.value;
  
      // Send registration data to the server
      fetch('/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.message);
          // Handle success or display an error message to the user
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle error or display an error message to the user
        });
    }
  });
  