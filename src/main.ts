import express from "express";
const fs = require('fs');

const PORT = 3000;

const app = express();

// パスに注意する。src/sample-scenesに置く場合は、staticの引数にsrc/sample-scenesを指定する。
// npm startをする場所は、webXR-express-testディレクトリですること。
app.use(express.static("202402081923Desert"));

// http
// app.listen(PORT, () => console.log(`Listening on PORT ${PORT}!`))

// httpsにする
const option = {
    key: fs.readFileSync('./cert/privatekey.pem'),
    cert: fs.readFileSync('./cert/cert.pem'),    
}
const server = require('https').createServer(option, app)

app.get('/', (req, res) => {
  res.send('Hello World!');
})
server.listen(PORT, () => console.log(`Listening on PORT ${PORT}!`))
