import React from 'react'

export default class Competition extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			competitions: []
		}
	}

	componentDidMount() {
		let options = {
			headers:{
				'X-Auth-Token': '322fbe367f614460b8a20fa21503767e'
			}, 
			dataType: 'json',
			type: 'GET'
		}
		fetch('http://api.football-data.org/v1/competitions', options).then(res => res.json()).then(res => this.saveCompetitions(res))
	}

	saveCompetitions = (json) => {
		this.setState({ competitions: json })
	}

	handleChange = (event) => {
		this.props.onChangeCallBack(event.target.value)
	}

	render() {
		return (
			<div>
			<select onChange={this.handleChange}>{this.state.competitions.map(competition =>
				<option key={competition.league} value={competition.id}>{competition.caption}</option>)}
			</select>
			<br/>
			<br/>
			</div>
		)
	}
}