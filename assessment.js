let header = document.getElementById('output');
let degree = 0;
function rotateHeader() {
   degree = degree + 6;
   header.style.transform = 'rotateX('  + degree + 'deg)';
}
setInterval(rotateHeader, 20);
