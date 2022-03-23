const axios = require('axios');
const bridge = require('./bridge');

jest.mock('axios');

test('transfer promise', () => {
  const resp = { status: 200, msg: 'test' };
  axios.post.mockResolvedValue(resp);
  bridge.transfer({}, '')
  .then(data => expect(data).toEqual(resp))
  .catch((e) => console.log(e))
})
