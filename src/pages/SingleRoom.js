import React, { Component } from 'react'
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
// Importing the Context to have acces to the Rooms and the function getRoom
import { RoomContext } from "../context";
// Importing the Styled Components
import StyledHero from "../components/StyledHero";







// Single Room Page where we can see a specific room characteristic
export default class SingleRoom extends Component {
  // Using the constructor so we can bind the functions and set up the State
  constructor(props) {
    super(props);
    console.log(this.props);
    // Setting Up the State to use all over the App
    this.state = {
      // Getting the unique value displayed by React Router and storing in a variable.
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }

  static contextType = RoomContext;



  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;

    return (
      // <>
      /* Adding a Styled Component to display the images */
      // < StyledHero img = { images[0] || this.state.defaultBcg } >
      < Hero hero="roomsHero" >
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
            </Link>
        </Banner>
      </Hero >
    );
  }
}
