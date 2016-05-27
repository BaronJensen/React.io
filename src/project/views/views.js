import React from 'react';

//Import your componets here:
import Item from './components/item';

export default class View extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = this.props.data;	
	}

	render()
	{
		
		return(<div>	
			<h1>Welcome to React.io</h1>
			<Item/>
			</div>
			);
	}
	
	/*
	this.props.socketStates(this)
	*/


	
}