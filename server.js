
let express = require('express');
let app = express();

server = app.listen(8080, function(){
    console.log('server is running on port 8080')
});

let socket = require('socket.io');
io = socket(server);

let text = {
  text: 'Hello there! Write simple text or write !{number}{text}’),'
}
io.on('connection', (socket) => {
    io.emit('bot_message', text.text) 

    socket.on('send_message', function(data){
      console.log('got a message',data)
        io.emit('quick_reply', data.data);
    })
});