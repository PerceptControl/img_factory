const http = require('http');

const express = require('express');
const fileUpload = require('express-fileupload');

const dataManager = require('./data_manager/dm');
const packetManager = require('./packet_manager/pm');
const bridge = require('./bridge/bridge');

const app = express();
const PORT = 4000;

app.set('view engine', 'ejs');

app.use(fileUpload());
app.use('/upload_form', express.static('upload_form'));
app.use(express.static('/'));
app.use(express.static('public'));

const server = http.createServer(app);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/upload_form/form.html`);
});

app.post('/upload', async (req, res) => {
  const promises = [];
  const sendData = req.files;
  sendData.files = await dataManager.transform(sendData.files);

  for (const i in sendData.files) {
    if (Object.prototype.hasOwnProperty) {
      promises.push(bridge.transfer(req.body.token, sendData.files[i]));
    }
  }

  Promise.all(promises)
    .then((response) => {
      const filteredRes = packetManager.filter(response);
      dataManager.save(JSON.stringify(filteredRes));
      console.log(filteredRes);
      res.render('final', { data: filteredRes })
    })
    .catch((err) => console.error(err));
});

server.listen(PORT, () => {
  console.log(`listening ${PORT}`)
});
