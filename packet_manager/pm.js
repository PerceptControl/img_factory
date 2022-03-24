const configs = {
  token: 'a4839cda76053a8f3d02b59d4312aaba',
};

module.exports.configs = configs;

module.exports.filter = (finalData) => {
  const dataMap = new Map();
  for (const i in finalData) {
    if (Object.prototype.hasOwnProperty) dataMap.set(`image_${i}`, `${finalData[i].url}`);
  }
  return Object.fromEntries(dataMap);
};
