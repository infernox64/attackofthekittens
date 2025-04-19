const img_conf = {
    "size": {
        "width": 440,
        "height": 546
    },
    "/img03.jpg": {
        "caption": "humans be like"
    },
    "/img05.jpg":{
        "caption": null
    },
    "img08.jpg": {
        "caption": null
    }
}
function newImg(namw,size,caption = null) {
    let imgsrc = `images/${name}`;
    let imgdiv = document.createElement('div');
    if (img_conf[name]?.caption) {
        caption = img_conf[name].caption;
    }
    let imgLabel = document.createElement('p');
    imgLabel.innerText =caption ? caption : "lol";
    let imgEl = document.createElement('img');
imgEl.src = imgsrc;
imgEl.width = size.width;
imgEl.height = size.height;
imgEl.classList = "img";
imgdiv.appendChild(caption);
imgdiv.appendChild(imgEl);
return imgDiv;
}
let imgDiv = document.getElementById('images');
function loadImages() {
    const imgNames = Object.keys(img_conf);
    for (let i = 0; i < imgNames.length; i++) {
        let img = newImg(imgNames[i], img_conf.size, img_conf[imgNames[i]].caption);
        imgDiv.appendChild(img);
    }
}
window.onload = loadImages;