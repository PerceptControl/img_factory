const upload = require('imgbb-uploader');


module.exports.transfer = async (token, postFile) => {
  const postObject = {
    apiKey: token,
    base64string: postFile.toString('base64'),
  };

  return upload(postObject);
};
