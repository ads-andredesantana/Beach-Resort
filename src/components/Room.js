import React from 'react'
import { Link } from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
import PropTypes from 'prop-types'

export default function Room({ room }) {
  // Getting the the desired room values and storing in a const 
  const { name, slug, images, price } = room;

  // Returning the images with a default image, displaying the value, text, adding the type to replace the slug in the link and displaying the type.
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="Single Room" />

        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">Features</Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  )
}

// Defining the types of the props using shape because room is already an object () - As of react v15.5, using React.PropTypes is deprecated.
Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
}