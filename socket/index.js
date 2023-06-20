module.exports = (io) => {
  try {
    io.on('connection', (socket) => {
      console.log('a user connected');
      socket.on('chung 1 message', msg => {
        console.log('nhận từ client 1 message: ' + msg);
        io.emit('chung 1 message', msg);
      });
    });
    // io.on("connection", (socket) => {
    //   console.log("server: co nguoi moi ket noi");

    //   socket.on("disconnect", () => {
    //     console.log("user disconnected");
    //   });
    // });
  } catch (e) {
    console.log(e);
  }
};
