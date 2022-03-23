const axios = require('axios');

module.exports.transfer = async (configs, postData) => {
  const postObject = {
    key: configs.token,
    file: postData,
  };

  return axios.post(`${configs.host}${configs.path}`, postObject)
    .then((res) => {
      if (res !== undefined) {
        return new Promise((resolve, reject) => {
          if (res.status === 200) resolve(res);
          reject(new Error(`Wrong response status:${res.status}`));
        });
      } return new Error('There were no response');
    })
    .catch((error) => {
      console.log(error);
    });
};
