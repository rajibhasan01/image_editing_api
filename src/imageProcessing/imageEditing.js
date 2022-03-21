import sharp from "sharp";

// get metadata
export const getMetadata = async (args) => {
  const metadata = await sharp(`./image/inputImage/${args?.img}`).metadata();

  return metadata;
};

// Resize image
export const resizeImage = async (args) => {
  try {
    await sharp(`./image/inputImage/${args?.img}`)
      .resize({
        width: args?.width,
        height: args?.height,
      })
      .toFile(`./image/outputImage/resize_image_${args?.img}`);
  } catch (error) {
    console.log(error);
  }
};

// Border image
export const borderImage = async (args) => {
  if (args?.inside == 1) {
    try {
      getMetadata(args).then((res) => {
        args.width = res.width - (args?.left + args?.right);
        args.height = res.height - (args?.top + args?.bottom);

        sharp(`./image/inputImage/${args?.img}`)
          .resize({ width: args?.width, height: args?.height })
          .extend({
            top: args?.top,
            bottom: args?.bottom,
            left: args?.left,
            right: args?.right,
            background: {
              r: args?.color[0],
              g: args?.color[1],
              b: args?.color[2],
              alpha: args?.color[3],
            },
          })
          .toFile(`./image/outputImage/border_image_${args?.img}`);
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      await sharp(`./image/inputImage/${args?.img}`)
        .extend({
          top: args?.top,
          bottom: args?.bottom,
          left: args?.left,
          right: args?.right,
          background: {
            r: args?.color[0],
            g: args?.color[1],
            b: args?.color[2],
            alpha: args?.color[3],
          },
        })
        .toFile(`./image/outputImage/border_image_${args?.img}`);
    } catch (error) {
      console.log(error);
    }
  }
};

// Crop image
export const cropImage = async (args) => {
  try {
    await sharp(`./image/inputImage/${args?.img}`)
      .extract({
        width: args?.width,
        height: args?.height,
        left: args?.left,
        top: args?.top,
      })
      .toFile(`./image/outputImage/crop_image${args?.img}`);
  } catch (error) {
    console.log(error);
  }
};

// Rotate image
export const rotateImage = async (args) => {
  try {
    await sharp(`./image/inputImage/${args?.img}`)
      .rotate(args?.deg)
      .toFile(`./image/outputImage/rotate_image${args?.img}`);
  } catch (error) {
    console.log(error);
  }
};

// Blur image
export const blurImage = async (args) => {
  try {
    await sharp(`./image/inputImage/${args?.img}`)
      .blur(4)
      .toFile(`./image/outputImage/blur_image${args?.img}`);
  } catch (error) {
    console.log(error);
  }
};

// // Composite image
// export const compositeImages = async (args) => {
//     try {
//         await sharp(`./image/inputImage/${args?.background_img}`)
//         .composite([
//             {
//               input: `./image/inputImage/${args?.img}`,
//               top: args?.top,
//               left: args.left,
//             },
//           ])
//         .toFile(`./image/outputImage/composite_image${args?.img}`);
//     } catch (error) {
//       console.log(error);
//     }
// }

// Add text on image
export const addTextOnImage = async (args) => {
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
};

// Composite image
export const overlayImage = async (args) => {
  try {
    await sharp(`./image/inputImage/${args?.background_img}`)
      // .rotate(180)
      // .resize(300)
      .flatten({ background: "#FFFFFF" })
      .composite([
        {
          input: `./image/inputImage/${args?.img}`,
          top: args?.top,
          left: args.left,
        },
      ])
      .sharpen()
      .withMetadata()
      .jpeg({ quality: 90 })
      .toFile(`./image/outputImage/overlay_image${args?.img}`);
  } catch (error) {
    console.log(error);
  }
};


// Flip image
export const flipImage = async (args) => {
  try {
    await sharp(`./image/inputImage/${args?.img}`)
      .flip()
      .toFile(`./image/outputImage/flip_image${args?.img}`);
  } catch (error) {
    console.log(error);
  }
};


// Flop image
export const flopImage = async (args) => {
  try {
    await sharp(`./image/inputImage/${args?.img}`)
      .flop()
      .toFile(`./image/outputImage/flop_image${args?.img}`);
  } catch (error) {
    console.log(error);
  }
};