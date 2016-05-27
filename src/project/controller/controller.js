//Modules
import React from 'react';
import {render} from 'react-dom';
import  Model from '../models/models'

//Views modules
import View from '../views/views';

export default class Controller extends Model
{
	constructor(id)
	{
		super();
		/*
		If you want to init a socket server you have to:
			this.conectSocketsClient('localhost:3000'); 
			this.joinSocketRoom('default_room','default_username');//You must have to do this
			this.socketStatus() //returns true or false if we have conection with the socket
			
		*/
		this.render(id);
	}
	render(id)
	{
		/*
		Render 
		*/
		render(<View  
					//GET = {this.GET.bind(this)}
					//POST = {this.GET.bind(this)}
					//socketPOST = {this.socketPOST.bind(this)}
					//socketGET= {this.socketGET.bind(this)}
					data = {this.getData()}/>,
			document.getElementById(id));
	}	
}