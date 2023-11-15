document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = 'https://i.imgur.com/8rX2F0T.jpg';
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
    };
    const download = document.getElementById('download');
    download.addEventListener('click', function() {
        download.href = canvas.toDataURL();
        download.download = 'image.png';
    }, false);
}, false);