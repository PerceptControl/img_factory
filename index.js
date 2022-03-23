const http = require('http');

const express = require('express');
const fileUpload = require('express-fileupload');

const dataManager = require('./data_manager/dm');
const packetManager = require('./packet_manager/pm');
const bridge = require('./bridge/bridge');

const app = express();
const PORT = 4000;

app.use(fileUpload());
app.use('/upload_form', express.static('upload_form'));
app.use(express.static('/'));

app.use(express.static('public'));
const server = http.createServer(app);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/upload_form/form.html');
});

app.post('/upload', (req, res) => {
  manager.push(req.files);

  res.sendFile();
});

server.listen(PORT, () => {
  console.log(`listening ${PORT}`)
});
