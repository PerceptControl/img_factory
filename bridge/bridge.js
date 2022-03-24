const upload = require('imgbb-uploader');


module.exports.transfer = async (configs, postFile) => {
  const postObject = {
    apiKey: configs.token,
    base64string: postFile.toString('base64'),
  };

  return upload(postObject);
};
