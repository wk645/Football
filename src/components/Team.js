import React from 'react'
import Players from './Players'
import { Header, Modal, Card, Grid, Image } from 'semantic-ui-react'


export default class Team extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			team: props.team,
			clicked: false

		}
	}

	handleClick = () => {
		this.setState({
			clicked: !this.state.clicked
		})
	}

	displayModal = (team) => {
		return (
		  <Modal open={this.state.clicked} onClose={this.handleClick}>
		    <Modal.Header>{team.name}</Modal.Header>
		    <Modal.Content image>
		      <Image wrapped size='medium' src={team.crestUrl} />
		      <Modal.Description>
		        <Header>{team.name}</Header>
		        <Players team={team} />
		      </Modal.Description>
		    </Modal.Content>
		  </Modal>	
		)
	}

	render() {
		return (
			<Grid.Column>
				<Card>
				<Image centered onClick={this.handleClick} style={{width: 250, height: 250}} src={this.state.team.crestUrl} />
				<Card.Content>
				<Card.Header>{this.state.team.name}</Card.Header>
				</Card.Content>
				</Card>
				{this.state.clicked && this.displayModal(this.state.team)}
			</Grid.Column>
		)
	}
}