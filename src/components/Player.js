import React from 'react'
import PlayerInfo from './PlayerInfo'
import { Grid } from 'semantic-ui-react'

export default class Player extends React.Component {

	constructor(props) {
		super()

		this.state = {
			player: props.player,
			clicked: false

		}
	}

	handleClick = () => {
		this.setState({
			clicked: !this.state.clicked
		})
	}

	render() {
		return (
			<div onClick={this.handleClick}>
				<Grid celled columns={2}>
					<Grid.Row>
						<Grid.Column width={8}>
					{this.state.player.name}
						</Grid.Column>
					{this.state.clicked && <PlayerInfo player={this.state.player} />}
					</Grid.Row>
				</Grid>
			</div>
		)
	}
}