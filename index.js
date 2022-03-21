import  * as process from "./src/imageProcessing/imageEditing.js";

const img= "test.jpg";
const width = 400;
const height = 500;
const left = 2;
const top = 2;
const deg = 90;
const blur = 0.4;
const background_img = "second_img.png";
const text = "Rajib";

const args = {
    img,
    width,
    height,
    left, 
    top,
    deg,
    blur,
    background_img,
    text
}

// process.resizeImage(args);
// process.cropImage(args);
// process.rotateImage(args);
// process.blurImage(args);
// process.compositeImages(args);
// process.addTextOnImage(args);