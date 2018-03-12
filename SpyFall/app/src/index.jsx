import React from "react";
import ReactDOM from "react-dom";
import Button from "./button.jsx";
import PlayerList from "./playerList.jsx";
import RulesScreen from "./rulesScreen.jsx";
import CreateGameScreen from "./createGameScreen.jsx";
import MenuScreen from "./menuScreen.jsx";

class Application extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			toBeRendered: <MenuScreen rules={this.onRulesClicked.bind(this)}/> };
	}



	onButtonClick()
	{
		alert("bu bu");
	}

	onRulesClicked()
	{
		this.setState({ toBeRendered: <RulesScreen /> });
	}

	render()
	{
		return (
			<div>
				{this.state.toBeRendered}
			</div>
		);
	}
}

ReactDOM.render(<Application/>, document.getElementById("app"));