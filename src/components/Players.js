import React from 'react'
import Player from './Player'

export default class Players extends React.Component {

	constructor(props) {
		super()

		this.state = {
			players: [],
			team: props.team
		}
	}

	componentDidMount() {
		let options = {
			headers: {
				'X-Auth-Token': '322fbe367f614460b8a20fa21503767e'
			},
			dataType: 'json',
			type: 'GET'
		}

		let url = this.state.team._links.players.href
		fetch(url, options).then(res => res.json()).then(res => this.savePlayers(res))
	}

	savePlayers = (json) => {
		this.setState({ players: json.players })
	}

	render() {
		return (
			<div>
				{this.state.players.map(player => <Player key={player.name} player={player} />)}
			</div>)
	}
}
