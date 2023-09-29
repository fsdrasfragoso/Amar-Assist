document.addEventListener('DOMContentLoaded', function() {
    const pdfViewer = document.getElementById('pdf-viewer');
    const backgroundMusic = document.getElementById('background-music');

    pdfViewer.addEventListener('load', function() {
        backgroundMusic.style.display = 'block';
    });
});
