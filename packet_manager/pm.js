module.exports.filter = (finalData) => {
  const dataMap = new Map();
  for (const i in finalData) {
    if (Object.prototype.hasOwnProperty) dataMap.set(`image_${i}`, `${finalData[i].url}`);
  }
  return Object.fromEntries(dataMap);
};
