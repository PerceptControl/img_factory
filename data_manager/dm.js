const files = [];

/** @TODO
  - Сделать отлов mime типа данных и форматирование всего к png
  - Добавить систему логгирования и отлова ошибок
*/

module.exports.push = (newFiles) => {
  for (let i = 0; i < newFiles.length; i++) {
    if (newFiles.type !== 'png') break;
    files.push(newFiles[i]);
  }
};

module.exports.get = () => files

module.exports.save = (finalData) => {

};
