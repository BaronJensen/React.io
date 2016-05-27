var app = require('http').createServer()
var io = require('socket.io')(app);
app.listen(3000);

io.on('connection', function(socket)
{
	console.log("Server running...");
	
	socket.on('join',function(data)
		{
			socket.join(data.room);
			socket.broadcast.to(data.room).emit('client_room', data.user + " is online");

		});

	socket.on('server_data',function(data)
		{
			 socket.broadcast.to(data.room).emit('client_data', data);
		});

	


});