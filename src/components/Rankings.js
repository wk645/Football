import React from 'react'
import Competition from './Competition'
import { Table } from 'semantic-ui-react'

export default class Rankings extends React.Component {

	state = {
		rankings: []
	}

	fetchRankings = (competition) => {
		let options = {
				headers: {
					'X-Auth-Token': '322fbe367f614460b8a20fa21503767e'
				},
				dataType: 'json',
				type: 'GET'
			}
			let rankingsUrl = `http://api.football-data.org/v1/competitions/${competition}/leagueTable`

		fetch(rankingsUrl, options).then(res => res.json()).then(res => this.saveRankings(res))
	}

	saveRankings = (json) => {
			this.setState({ rankings: json.standing })
	}	

	render() {
		return (
			<div>
				<Competition onChangeCallBack={this.fetchRankings}/>
				<Table fixed>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Team</Table.HeaderCell>
							<Table.HeaderCell>Rankings</Table.HeaderCell>
							<Table.HeaderCell>Goals</Table.HeaderCell>
							<Table.HeaderCell>Goals Against</Table.HeaderCell>
							<Table.HeaderCell>Goal Difference</Table.HeaderCell>
							<Table.HeaderCell>Points</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
				{this.state.rankings.map(ranking => <Table.Row key={ranking.position}>
					<Table.Cell>{ranking.teamName}</Table.Cell>
					<Table.Cell>{ranking.position}</Table.Cell>
					<Table.Cell>{ranking.goals}</Table.Cell>
					<Table.Cell>{ranking.goalsAgainst}</Table.Cell>
					<Table.Cell>{ranking.goalDifference}</Table.Cell>
					<Table.Cell>{ranking.points}</Table.Cell>
				</Table.Row>)}
					</Table.Body>
				</Table>
			</div>
		)
	}
}