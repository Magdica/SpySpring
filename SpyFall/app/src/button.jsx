import React from 'react';
import ReactDOM from 'react-dom';

export default class Button extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	onClick()
	{
		this.props.onClick();
	}

	render()
	{
		return <div id="button" onClick={this.onClick.bind(this)}>{this.props.title}</div>;
	}
};