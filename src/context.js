import React, { Component } from 'react'
// Importing the data to be used during Development. It will be refactored durign the Deploy.
import items from './data'

/* Context provides a way to share values like these between Components 
  without having to explicitly pass a prop through every level of the tree.*/
const RoomContext = React.createContext();

// Extending the Component to be used through the State.
class RoomProvider extends Component {
  // Creating a State to manage the data.
  state = {
    rooms: [],
    sortedRooms: [],
    FeaturedRooms: [],
    loading: true
  };

  // Creating a function to acces the data coming from data.js
  componentDidMount() {
    // Storing the formated data in a variable.
    let rooms = this.formatData(items);
    // We filter the values and If the property(featured) is true we add It to the featuredRooms
    let featuredRooms = rooms.filter(room => room.featured === true);

    // Setting the State dynamically and changing the values according to the Request
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false
    })
  }

  // Function to get the Object (all the items) from data.js and format It to be used through the Application
  formatData(items) {
    // Mapping the data and Storing the temporay results in a variable
    let tempItems = items.map(item => {
      // Accessing the data inside the data.js
      let id = item.sys.id
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id }
      return room;
    });
    return tempItems
  }

  // Rendering the values through all the CoomContext Provider
  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

// Creating a Context According to the Consumer
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
