import React from "react";
import ReactDOM from "react-dom";
import Button from "./button.jsx";

export default class MenuScreen extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	createNewGame()
	{
		this.props.create();
	}

	enterExistingGame()
	{
		this.props.enter();
	}

	rulesOfTheGame()
	{
		this.props.rules();
	}

	listOfLocations()
	{
		this.props.locations();
	}

	render()
	{
		return (
			<div>
				<h1>Dobrodošli u SPYFALL!</h1>
				<Button title="Kreiraj igru" onClick={this.createNewGame.bind(this)} />
				<Button title="Uključi se u igru" onClick={this.enterExistingGame.bind(this)} />
				<Button title="Pravila igre" onClick={this.rulesOfTheGame.bind(this)} />
				<Button title="Lokacije" onClick={this.listOfLocations.bind(this)} />
			</div>
		);
	}
}