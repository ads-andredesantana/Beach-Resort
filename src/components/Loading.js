import React from 'react'
import loadingGif from '../images/gif/loading-gear.gif'

// Component to show a spinning gear when loading the page.
export default function Loading() {
  return (
    <div className="loading">
      <h4>rooms data loading...</h4>
      <img src={loadingGif} alt="Turning gear" />
    </div>
  )
}
