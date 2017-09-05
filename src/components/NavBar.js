import React from 'react';
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
        as={NavLink} to="/" exact
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        >
		Home
       
        </Menu.Item>

        <Menu.Item
        	as={NavLink} to="/rankings" exact
          name='Rankings'
          active={activeItem === 'Rankings'}
          onClick={this.handleItemClick}
          >
        
          Rankings
        </Menu.Item>

        <Menu.Item
        as={NavLink} to="/teams" exact
          name='Teams'
          active={activeItem === 'Teams'}
          onClick={this.handleItemClick}
        >
        Teams
        </Menu.Item>
      </Menu>
    )
  }
}