import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="/" className="brand">Milton MUN</a>
        <div className="links">
          <a href="/signin" className="link">Sign in</a>
          <a href="/about" className="link">About us</a>
          <a href="/contact" className="link">Contact us</a>
        </div>
      </div>
    </nav>
  )
}


