import React, { Component } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading'

// Component showing the Rooms by Featured Type.
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms: rooms } = this.context
    console.log(rooms);

    return (
      <div>from featured rooms
        <Loading />
      </div>);
  }
}
