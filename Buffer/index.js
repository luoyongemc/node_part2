const sharp = require('sharp');

sharp('./img.jpeg')
 .resize(200,200)
 .toFile('./biz.jpeg')