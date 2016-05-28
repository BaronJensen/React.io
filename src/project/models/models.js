import Models from 'models'
export default class Model extends Models
{
	constructor()
	{
		super();
		this.setData({
			/*
			 add  here the data of your app
			*/
		});
	/*	
		GET:
		this.getURL = '/projects/load/';
		this.dataGET['project'] = '23';
		1.GET = {this.GET.bind(this)}
			by default update your app (context) states, you can modify this with the method overwriting
			 get_success(data,context){}

		2.this.props.GET(context);


		POST:
		this.postURL = '/projects/save/';
		this.dataPOST['project'] = '23';
		1.POST = {this.POST.bind(this)}
			 post_success(data,context){}

		2.this.props.POST(context);
		
		Sockets:
			this.socketGET(context)
			this.socketPOST(context)
			this.socket_msm_log_room(data){}
		*/
	}	
	//socket_msm_log_room(data){}
	//post_success(data){}
	//post_error(XMLHttpRequest, textStatus, errorThrown){}
	//get_success(data, context) {}
	//get_error(XMLHttpRequest, textStatus, errorThrown) {}
}