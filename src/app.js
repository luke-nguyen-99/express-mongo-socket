const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const { connectDatabase } = require('./database/connect-database');

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');

const io = new Server(server);

require('./socket')(io);


app.use(cors());
app.use(helmet({ contentSecurityPolicy: false }));

app.use(express.json());
app.set('views', path.join(__dirname, "/../views"));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.get('/', (req, res) => {
  
  res.render('home');
})

app.use((req, res, next) => {
  if (req.a) {
    res.status(400).send('login fail')
  }
  next();
})

app.get('/login', (req, res) => {
  res.send({ result: 'login successfully' });
})

app.use('/room', [require('./data/room/room.route')]);


// connectDatabase();

// const server = app.listen(3000, () => {
//   console.log('server running in port 3000');
// });

// const { Server } = require('socket.io');



// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('chat message', msg => {
//     console.log('user đã chat: ' + msg);
//     io.emit('chat message', msg);
//   });
// });



server.listen(3000, () => {
  console.log(`server running at http://localhost:3000/`);
});
// const a = new Server(test);
// require('./socket/index')(a);



// const httpServer = createServer();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);

// const io = socketIo(app);

// const socketController = require('./socket')(io);

