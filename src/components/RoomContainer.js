import React from 'react'
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";

export default function RoomContainer() {
  return (
    <div>
      Hello From Rooms Container
      <RoomsFilter />
      <RoomsList />
    </div>
  )
}
