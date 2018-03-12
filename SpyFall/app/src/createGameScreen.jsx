import React from "react";
import ReactDOM from "react-dom";
import Button from "./button.jsx";
import PlayerList from "./playerList.jsx";

export default class CreateGameScreen extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	startNewGame()
	{
		this.props.start();
	}

	render()
	{
		return (
			<div>
				<h2>Šifra igre: {this.props.gameCode}\n (podjelite ju sa svojim suigračima)</h2>
				<Button title="Započni igru" onClick={this.startNewGame.bind(this)} />
				<h2>Igrači u igri:</h2>
				<PlayerList/>
			</div>
		);
	}
}