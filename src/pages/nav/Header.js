
import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item name='Introduction' as={Link } to='/'
          active={activeItem === 'Introduction'} onClick={this.handleItemClick} />
          <Menu.Item name='Hello React Map' as={Link } to='/hellomap'
          active={activeItem === 'Hello React Map'} onClick={this.handleItemClick} />
          <Menu.Item name='Draggable Marker React Map' as={Link } to='draggablemarker'
          active={activeItem === 'Draggable Marker React Map'} onClick={this.handleItemClick} />
          <Menu.Item name='Draggable Marker React Map Auto fill Address' as={Link } to='autofilladdress'
         active={activeItem === 'Draggable Marker React Map Auto fill Address'} onClick={this.handleItemClick} />
          <Menu.Item name='Auto Marker Positioning From Form Inputs' as={Link } to='autoposition'
          active={activeItem === 'Auto Marker Positioning From Form Inputs'} onClick={this.handleItemClick} />
        </Menu>
      </Segment>
    )
  }
}
