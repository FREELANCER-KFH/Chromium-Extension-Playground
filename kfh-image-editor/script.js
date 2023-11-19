document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let image;
    let isDrawing = false;
    let brushSize = 5;
    let currentTool = 'brush';
    let copiedImage;
  
    function loadImage(src) {
      image = new Image();
      image.onload = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      };
      image.src = src;
    }
  
    document.getElementById('loadImage').addEventListener('click', function () {
      const input = document.getElementById('imageInput');
      const file = input.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = function (e) {
          loadImage(e.target.result);
        };
  
        reader.readAsDataURL(file);
      }
    });
  
    document.getElementById('filterSelect').addEventListener('change', function () {
      const filter = document.getElementById('filterSelect').value;
      ctx.filter = filter;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    });
  
    canvas.addEventListener('mousedown', function (e) {
      isDrawing = true;
      draw(e);
    });
  
    canvas.addEventListener('mousemove', function (e) {
      if (isDrawing) {
        draw(e);
      }
    });
  
    canvas.addEventListener('mouseup', function () {
      isDrawing = false;
      ctx.beginPath();
    });
  
    function draw(e) {
      if (currentTool === 'brush') {
        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000';
  
        ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top, brushSize / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
      }
    }
  
    document.getElementById('brushTool').addEventListener('click', function () {
      currentTool = 'brush';
      canvas.style.cursor = 'auto';
    });
  
    document.getElementById('highlightTool').addEventListener('click', function () {
      currentTool = 'highlight';
      // Implementar la funcionalidad de resaltador si es necesario
      canvas.style.cursor = 'url("highlight_cursor.png") 0 16, auto';
    });
  
    document.getElementById('eraserTool').addEventListener('click', function () {
      currentTool = 'eraser';
      // Implementar la funcionalidad de borrador si es necesario
      canvas.style.cursor = 'url("eraser_cursor.png") 0 16, auto';
    });
  
    document.getElementById('addText').addEventListener('click', function () {
      const text = document.getElementById('textInput').value;
      const textSize = document.getElementById('textSize').value;
      const x = 50; // Ajusta según sea necesario
      const y = 50; // Ajusta según sea necesario
  
      ctx.font = `${textSize}px Arial`;
      ctx.fillStyle = '#000';
      ctx.fillText(text, x, y);
    });
  
    document.getElementById('copy').addEventListener('click', function () {
      // Implementar la funcionalidad de copiar si es necesario
      copiedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
    });
  
    document.getElementById('paste').addEventListener('click', function () {
      // Implementar la funcionalidad de pegar si es necesario
      if (copiedImage) {
        ctx.putImageData(copiedImage, 0, 0);
      }
    });
  
    document.getElementById('save').addEventListener('click', function () {
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'edited_image.png';
      link.click();
    });
  });
  