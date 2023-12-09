// public/js/drawing.js

document.addEventListener('DOMContentLoaded', () => {
    const socket = io();
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    let drawing = false;
    let erasing = false;
  
    // Event listeners for mouse and touch events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);
  
    // Toggle mode button
    const toggleModeBtn = document.getElementById('toggleModeBtn');
    toggleModeBtn.addEventListener('click', toggleMode);
  
    function toggleMode() {
      erasing = !erasing;
      toggleModeBtn.textContent = erasing ? 'Erasing Mode' : 'Drawing Mode';
    }
  
    // Function to start drawing or erasing
    function startDrawing(e) {
      drawing = true;
      draw(e);
    }
  
    // Function to draw or erase on the canvas
    function draw(e) {
      if (!drawing) return;
  
      // Get the coordinates of the event
      const x = e.clientX || e.touches[0].clientX;
      const y = e.clientY || e.touches[0].clientY;
  
      // Emit the drawing data to the server
      socket.emit('draw', { x, y, erasing });
  
      // Draw or erase on the local canvas
      ctx.beginPath();
      if (erasing) {
        ctx.clearRect(x - 5, y - 5, 10, 10);
      } else {
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  
    // Function to stop drawing or erasing
    function stopDrawing() {
      drawing = false;
    }
  
    // Listen for drawing events from the server
    socket.on('draw', (data) => {
      // Draw or erase on the canvas
      ctx.beginPath();
      if (data.erasing) {
        ctx.clearRect(data.x - 5, data.y - 5, 10, 10);
      } else {
        ctx.arc(data.x, data.y, 5, 0, 2 * Math.PI);
        ctx.fill();
      }
    });
  });
  