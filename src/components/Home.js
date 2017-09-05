import React from 'react'
import { Image, Grid } from 'semantic-ui-react'

const Home = () => 
	<div>
	<h1>Welcome to Luis & Zoey's Football (not soccer) Page!</h1>
	<br/><br/>
	<Grid relaxed columns={2}>
		<Grid.Column>
			<Image size="big" centered src="http://www.sportpanel.net/wp-content/uploads/2015/01/european-football-league-logos.jpg" alt="league"/>
		</Grid.Column>
		<Grid.Column>
			<Image size="big" centered src="https://media.giphy.com/media/26vUR4I76C16XbhwA/giphy.gif" alt="gif" />
		</Grid.Column>
		<Grid.Column>
			<Image size="big" centered src="https://media.giphy.com/media/T2AmoAqrjAluU/giphy.gif" alt="gif2" />
		</Grid.Column>
		<Grid.Column>
			<Image size="big" centered src="https://media.giphy.com/media/l46CmhqC6BIKOaiOc/giphy.gif" alt="gif3" />
		</Grid.Column>
	</Grid>
	</div>

export default Home