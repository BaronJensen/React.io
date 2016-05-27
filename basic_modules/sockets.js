const io = require("socket.io-client")
export default class Sockets
{
	constructor()
	{
	
		this.socket = null;
		this.room = '';
	}

	conectSocketsClient(url)
	{
		this.socket = io.connect(url);
	}

	getSocket()
	{
		return this.socket;
	}
	setSocket(socket)
	{
		this.socket = socket;
	}

	joinSocketRoom(room,user)
	{
		this.room = room;
		this.socket.emit('join',{room, user});	
	}
	socketStatus()
	{
		return this.socket?true:false;
	}

	socketGET(context)
	{	
		if(this.socket)
		{
			const self = this;

			this.socket.on('client_room', function(data)
			{
				self.socket_msm_log_room(data);
			});
		
			this.socket.on('client_data' , function(data)
			{
			
				context.setState(data.data);
			});
			
			
		}		
	}
	socket_msm_log_room(data) 
	{
			
	}

	socketPOST(context)
	{
		if(this.socket)
		{
			this.socket.emit("server_data",{
				"room":this.room,
				"data":context.state
			}); 
		}
	}
}