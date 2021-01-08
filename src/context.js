import React, { Component } from 'react'
// Importing the data to be used during Development. It will be refactored durign the Deploy.
// import items from './data'
// Importing the model amd images from Contentful
import Client from './Contentful'


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
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  // Getting the Data from Contentful indicating the Content Type
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "reactBeachResort",
        order: "-fields.price"

      });
      // Storing the formated data in a variable.
      let rooms = this.formatData(response.items);
      // We filter the values and If the property(featured) is true we add It to the featuredRooms
      let featuredRooms = rooms.filter(room => room.featured === true);
      // Mapping the Proce and Size according to the item
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));

      // Setting the State dynamically and changing the values according to the Request
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize
      })

    } catch (error) {
      console.log(error);
    }
  };

  // Creating a function to acces the data coming from data.js
  componentDidMount() {
    this.getData()
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

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms]
    // Using find to get the 1st element and add to a constant in form of an object
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  }

  // Event handler to get the input value and pass It to the state.
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    // Setting the state after getting the value and filtering (Async Function)
    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };

  // Filter the Rooms after the value is set in the state.
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    let tempRooms = [...rooms];

    // Parsing the received values
    capacity = parseInt(capacity);
    price = parseInt(price);

    // filter by Type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }

    // filter by Capacity to return the value bigger or equal to 2
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }

    // filter by Price
    tempRooms = tempRooms.filter(room => room.price <= price);

    //filter by Size
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);

    //filter by Breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }

    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }

    // Setting the State values
    this.setState({
      sortedRooms: tempRooms
    });


  };

  // Rendering the values through all the CoomContext Provider
  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

// Creating a Context According to the Consumer
const RoomConsumer = RoomContext.Consumer;


// Creating a High Order function which returns another function with the Component props and context
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return <RoomConsumer>
      {value => <Component {...props} context={value} />}
    </RoomConsumer>
  }

}


export { RoomProvider, RoomConsumer, RoomContext };
