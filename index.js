import  * as process from "./src/imageProcessing/imageEditing.js";

const img= "raw.jpg";
const img_1 = "test_1.jpeg"
const width = 400;
const height = 500;
const left = 128;
const top = 128;
const bottom = 128;
const right = 128;
const deg = 90;
const blur_amount = 4;
const background_img = "second_img.png";
const text = "Rajib";
const color = [25, 226, 226, 1];
const inside = 1;
const x1 = 1;
const y1 = 0.3;
const x2 = 0.9;
const y2 = 0.7;
const bg = 'black';
const sigma = 2;
const sharpen_x1 = 100;
const sharpen_y2 = 3;
const sharpen_y3 = 1;
const sharpen_m1 = 3;
const sharpen_m2 = 5;
const median = 3;
const bg_color = "#F0A703";

const args = {
    img,
    img_1,
    width,
    height,
    left, 
    top,
    bottom,
    right,
    deg,
    blur_amount,
    background_img,
    text,
    color,
    inside,
    x1,
    x2,
    y1,
    y2,
    bg,
    sigma,
    sharpen_m1,
    sharpen_m2,
    sharpen_x1,
    sharpen_y2,
    sharpen_y3,
    median,
    bg_color
}

// process.resizeImage(args);
// process.cropImage(args);
// process.rotateImage(args);
// process.blurImage(args);
// process.compositeImages(args);
// process.addTextOnImage(args);
// process.borderImage(args)
// process.overlayImage(args);
// process.flipImage(args);
// process.flopImage(args);
// process.affineImage(args)
// process.sharpenImage(args);
// process.medianImage(args);
// process.flattenImage(args);
