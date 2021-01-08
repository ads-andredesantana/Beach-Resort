import React from 'react'

// Component to return the Title of a Section
export default function Title({ title }) {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div />
    </div>
  )
}
