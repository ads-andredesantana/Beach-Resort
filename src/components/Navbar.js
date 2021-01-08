import React, { Component } from 'react'
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

// Navbar Component used through all the Website.
export default class Navbar extends Component {
  // Creating an empty State to manage the information.
  state = {
    isOpen: false
  }
  // Setting State false and true
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  /* On this NavBar I added a Home link to the Logo and added an Event listener on the burger to when the icon is clicked the NavBar opens  */
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/"><img src={logo} alt="Beach Resort" /></Link>
            <button type="button" className="nav-btn" onClick={this.handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}
