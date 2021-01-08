import React from 'react'

// Component that shows a Hero image in the Home Page & the Default Pages
export default function Hero({ children, hero }) {
  return (
    <header className={hero}>{children}</header>
  )
}

Hero.defaultProps = {
  hero: "defaultHero"
};