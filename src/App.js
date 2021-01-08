import React from "react";
import './App.css';
// Importing the Pages
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
// Adding the Route Swith to control the Pages Routed
import { Route, Switch } from 'react-router-dom';
// Importing the NavBar through all the Application
import Navbar from "./components/Navbar";

// Function created to Control and Return the main Page Components of the Application.
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
