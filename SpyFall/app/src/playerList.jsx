import React from "react";
import ReactDOM from "react-dom";

export default class PlayerList extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		const list = this.props.players.map((player) => <li>{player}</li>);
		return (
			<ul>{list}</ul>
		);
	}
}