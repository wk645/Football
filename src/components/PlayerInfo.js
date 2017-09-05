import React from 'react'
import { Grid } from 'semantic-ui-react'

const PlayerInfo = (props) => {
	// console.log("playerInfo", player)
	return (
		<Grid.Column>
			<b><p>Player Name: {props.player.name}</p></b>
			<b><p>Position: {props.player.position}</p></b>
			<b><p>Jersey Number: {props.player.jerseyNumber}</p></b>
			<b><p>Nationality: {props.player.nationality}</p></b>			
		</Grid.Column>
	)
}

export default PlayerInfo