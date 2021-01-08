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

    const [mainImg, ...defaultImg] = images;

    return (
      /* Setting Up a React Fragment to group a list of children without adding extra nodes: 
         1) Adding a Styled Component to display the images
         2) Adding a section to display the Info using destructuring with the backtick
      */

      <>
        < StyledHero img={mainImg || this.state.defaultBcg} >
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero >

        <section className="single-room">

          <div className="single-room-images">
            {defaultImg.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>

          <div className="single-room-info">

            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>

            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>

          </div>

        </section>

        <section className="room-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>

    );
  }
}
