const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mid = require('./middleware/authentication.middleware');

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');

const io = new Server(server);
require('./socket')(io);

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(
  bodyParser.urlencoded({
    extended: true,
    parameterLimit: 1000000,
    limit: "500mb",
  })
);
app.use(bodyParser.json({ limit: "25mb" }));
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json());
app.use(express.static('src/public'));

app.set('views', path.join(__dirname, "/views"));
app.set('view engine', 'ejs');


app.get('/test', (req, res) => {
  res.send({ test: 'ok' });
})
app.get('/template', (req, res) => {
  res.render('test');
})
app.use('/', [require('./auth/auth.route')]);
app.use(mid.authentication);
app.use('/home', (req, res) => {
  res.render('home');
})
app.use('/room', [require('./data/room/room.route')]);

app.use((err, req, res, next) => {
  if (!!err) {
    res.status(400).send({ message: err.message });
  }
});

server.listen(3000, () => {
  console.log(`server running at http://localhost:3000/`);
});

