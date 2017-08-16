console.log('Loaded!');
// Change the text of the main div
var element = document.getElementById('main-text');
// Move the image
var img = document.getElementById('madi');
img.onclick = function () {
    img.style.marginLeft = '100px';
};