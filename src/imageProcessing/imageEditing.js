import sharp from 'sharp';

// Resize image 
export const resizeImage = async (args) => {

    try {
      await sharp(`./image/inputImage/${args?.img}`)
        .resize({
          width: args?.width,
          height: args?.height
        })
        .toFile(`./image/outputImage/resize_image_${args?.img}`);
    } catch (error) {
      console.log(error);
    }
}


// Crop image
export const cropImage = async (args) => {
    try {
      await sharp(`./image/inputImage/${args?.img}`)
        .extract({ width: args?.width, height: args?.height, left: args?.left, top: args?.top  })
        .toFile(`./image/outputImage/crop_image${args?.img}`);
    } catch (error) {
      console.log(error);
    }
}


// Rotate image
export const rotateImage = async (args) => {
    try {
        await sharp(`./image/inputImage/${args?.img}`)
        .rotate(args?.deg)
        .toFile(`./image/outputImage/rotate_image${args?.img}`);
    } catch (error) {
      console.log(error);
    }
}


// Blur image
export const blurImage = async (args) => {
    try {
        await sharp(`./image/inputImage/${args?.img}`)
        .blur(4)
        .toFile(`./image/outputImage/blur_image${args?.img}`);
    } catch (error) {
      console.log(error);
    }
}


// Composite image
export const compositeImages = async (args) => {
    try {
        await sharp(`./image/inputImage/${args?.background_img}`)
        .composite([
            {
              input: `./image/inputImage/${args?.img}`,
              top: args?.top,
              left: args.left,
            },
          ])
        .toFile(`./image/outputImage/composite_image${args?.img}`);
    } catch (error) {
      console.log(error);
    }
}



// Add text on image
export const addTextOnImage = async(args) => {
  try {

    const svgImage = `
    <svg width="${args?.width}" height="${args?.height}">
      <style>
      .title { fill: #001; font-size: 70px; font-weight: bold;}
      </style>
      <text x="50%" y="50%" text-anchor="middle" class="title">${args?.text}</text>
    </svg>
    `;
    const svgBuffer = Buffer.from(svgImage);
    await sharp(`./image/inputImage/${args?.img}`)
      .composite([
        {
          input: svgBuffer,
          top: 0,
          left: 0,
        },
      ])
      .toFile(`./image/outputImage/addText_image${args?.img}`);
  } catch (error) {
    console.log(error);
  }
}

