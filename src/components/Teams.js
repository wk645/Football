import React from 'react'
import Team from './Team'
import Competition from './Competition'
import { Grid } from 'semantic-ui-react'

export default class Teams extends React.Component {

	state = {
		teams: []
	}

	fetchTeams = (competition) => {
		let options = {
			headers: {
				'X-Auth-Token': '322fbe367f614460b8a20fa21503767e'
			},
			dataType: 'json',
			type: 'GET'
		}
		
		let teamsUrl = `http://api.football-data.org/v1/competitions/${competition}/teams` 

		fetch(teamsUrl, options).then(res => res.json()).then(res => this.saveTeams(res))
		
	}

	saveTeams = (json) => {
		this.setState({ teams: json.teams })
	}

	render() {
		return (
		<div>
			<Competition onChangeCallBack={this.fetchTeams}/>
			<Grid relaxed columns={4}>
			{this.state.teams.map(team => <Team key={team.shortName} team={team} />)}
			</Grid>
		</div>)
	}s
}