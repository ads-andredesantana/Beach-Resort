import React, { Component } from 'react'
import Title from './Title'
import { RoomContext } from '../context'
import Room from './Room'
import Loading from './Loading'

// Component showing the Rooms by Featured Type.
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;

    // Conditional rendering the Rooms according to their id
    if (rooms) {
      rooms = rooms.map(room => {
        return <Room key={room.id} room={room} />
      });
    }
    // Returning the Featured Rooms if page is not Loading
    return (
      <section className="featured-rooms">
        <Title title="featured-rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
