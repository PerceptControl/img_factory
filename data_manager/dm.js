const { convert } = require('imagemagick-convert');
const fs = require('fs');

/** @TODO
  - Добавить систему логгирования и отлова ошибок
*/

module.exports.transform = async (files) => {
  const newFiles = [];
  for (const i in files) {
    if (Object.prototype.hasOwnProperty) {
      if (files[i].mimetype !== 'image/png') {
        const file = await convert({
          srcData: files[i].data,
          format: 'PNG',
        });
        newFiles.push(file);
      } else newFiles.push(files[i].data);
    }
  }
  return new Promise((resolve, reject) => {
    if (newFiles.length !== files.length) reject('Error');
    resolve(newFiles);
  });
};

module.exports.save = async (finalData) => {
  fs.writeFile(`${__dirname}/links.json`, finalData, 'utf-8', (err) => {
    console.log(err);
  });
};
