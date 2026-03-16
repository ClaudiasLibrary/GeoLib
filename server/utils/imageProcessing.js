const sharp = require("sharp");

async function generateThumbnail(inputPath, outputPath) {
  await sharp(inputPath)
    .resize(150, 200)
    .toFile(outputPath);
}

module.exports = { generateThumbnail };