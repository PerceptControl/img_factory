const configs = {
  token: 'a0fa392412f9b19872a70807b1618f5d',
};

module.exports.configs = configs;

module.exports.makeJSON = (finalData) => {
  const dataMap = new Map();
  for (const i in finalData) {
    if (Object.prototype.hasOwnProperty) dataMap.set(`image_${i}`, `${finalData[i].url}`);
  }
  return JSON.stringify(Object.fromEntries(dataMap));
};
