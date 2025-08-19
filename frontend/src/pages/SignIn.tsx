import React from 'react'
import Navbar from '../components/Navbar'

export default function SignIn() {
  return (
    <div className="app-container">
      <Navbar />
      <section className="next-section signin-section" aria-label="Sign In">
        <div className="liquid-bg"></div>
        <div className="content-wrapper">
          <h2 className="contact-title">Sign In</h2>
          <form className="glass-card contact-form" onSubmit={(e)=> e.preventDefault()}>
            <label className="input glass-input">
              <span>Email</span>
              <input type="email" placeholder="you@example.com" required />
            </label>
            <label className="input glass-input">
              <span>Password</span>
              <input type="password" placeholder="••••••••" required />
            </label>
            <div className="cta-buttons">
              <button className="glass-btn" type="submit">Sign In</button>
            </div>
          </form>
          <div className="below-link">
            <a className="glass-btn" href="/signup">I don't have an account</a>
          </div>
        </div>
      </section>
    </div>
  )
}


