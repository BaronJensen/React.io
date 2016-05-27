import Sockets from './sockets'
export default class Models extends Sockets
{
	constructor()
	{
		super();
		this.__data = {};
		this.dataGET = {};
		this.dataPOST = {};
		this.postURL = '';
		this.getURL = '';
	}
	
	POST(context)
	{
		const self = this;
		self.dataGET['csrftoken'] = self.__getCookie('csrftoken');
		self.dataGET['data'] = JSON.stringify(context.state);



		$.ajax({
			data:self.dataGET,
			url:self.postURL,
			type:'post',

			success: function(data) 
			{
				self.post_success(data);
			},
			error: function(XMLHttpRequest, textStatus, errorThrown)
			{
				self.post_error(XMLHttpRequest, textStatus, errorThrown)
			}
		});

	}

	GET(context)
	{
		const self = this;
			$.ajax({
				data:self.getData,
				url:self.getURL,
				type:'get',
				success:function(data) 
				{	
					self.get_success(data, context);	
				},
				error: function(XMLHttpRequest, textStatus, errorThrown)
				{
					self.get_error(XMLHttpRequest, textStatus, errorThrown);
				}
		});
	}

	post_success(data)
	{

	}

	post_error(XMLHttpRequest, textStatus, errorThrown)
	{

	}

	get_success(data, context)
	{
		data = data.data;
		if(data != "")
		{
		data = JSON.parse(data);
		context.setState(data);
		}			
	}

	get_error(XMLHttpRequest, textStatus, errorThrown)
	{

	}
	
	setData(obj)
	{
		this.__data = obj;
	}

	getData()
	{
		return this.__data;
	}
	__getCookie(name){var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0; i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue = decodeURIComponent(cookie.substring(name.length + 1));break;}}}return cookieValue;};
	
}