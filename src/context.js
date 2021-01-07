import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext();
// 

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    FeaturedRooms: [],
    loading: true
  };
  /* 1) We import the all the items from data.js
     2) we format It using this.formatData storing It in a variable
     3) When the component mount we use this.getData to acces the data!*/

  componentDidMount() {
    // this.getData
    let rooms = this.formatData(items);
    // We filter the values and If the property(feature) is true we add It to the featuredRooms
    let featuredRooms = rooms.filter(room => room.featured === true);
    // Now we can set the State and change the values 
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false
    })
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id
      let images = item.fields.images.map(image =>
        image.fields.file.url);

      let room = { ...item.fields, images, id }
      return room;
    });
    return tempItems
  }





  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
