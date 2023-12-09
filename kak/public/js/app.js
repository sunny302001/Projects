// public/js/app.js

document.addEventListener('DOMContentLoaded', () => {
    const initialPage = document.getElementById('initialPage');
    const registerPageBtn = document.getElementById('registerPageBtn');
    const loginPageBtn = document.getElementById('loginPageBtn');
  
    registerPageBtn.addEventListener('click', navigateToRegistration);
    loginPageBtn.addEventListener('click', navigateToLogin);
  
    function navigateToRegistration() {
      window.location.href = 'C:\Users\pgopa\OneDrive\Desktop\ABCD\Projects\kak\public\registration.html';
    }
  
    function navigateToLogin() {
      // Add logic to navigate to the login page (if you have one)
      console.log('Navigate to the login page');
    }
  
    const drawingPageBtn = document.getElementById('drawingPageBtn');
    drawingPageBtn.addEventListener('click', navigateToDrawing);
  
    function navigateToDrawing() {
      window.location.href = 'C:\Users\pgopa\OneDrive\Desktop\ABCD\Projects\kak\public\drawing.html';
    }
  });
  