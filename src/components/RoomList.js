import React from 'react'
import Room from './Room'

// Adding a message when there's no room matching the criteria
export default function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }

  // Mapping the rooms and returning the item by id
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(item => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
};
