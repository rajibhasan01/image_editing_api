import  * as process from "./src/imageProcessing/imageEditing.js";

const img= "raw.jpg";
const width = 400;
const height = 500;
const left = 128;
const top = 128;
const bottom = 128;
const right = 128;
const deg = 90;
const blur = 0.4;
const background_img = "second_img.png";
const text = "Rajib";
const color = [25, 226, 226, 1];
const inside = 1;

const args = {
    img,
    width,
    height,
    left, 
    top,
    bottom,
    right,
    deg,
    blur,
    background_img,
    text,
    color,
    inside
}

// process.resizeImage(args);
// process.cropImage(args);
// process.rotateImage(args);
// process.blurImage(args);
// process.compositeImages(args);
// process.addTextOnImage(args);
// process.borderImage(args)
// process.overlayImage(args);


process.borderImage(args)