
const imgCount = 13;
function newImg(id) {
    let imgsrc = `images/${id}`
    let imgEl = document.createElement('img');
imgEl.src = imgsrc;
imgEl.classList = "img";
return imgEl;
}
let imgDiv = document.getElementById('images');
function loadImages() {

    for (let i = 1; i <= imgCount; i++) {
var img = newImg(i);
imgDiv.appendChild(img);

}
}
window.onload = loadImages;
