import React from 'react'
import Navbar from '../components/Navbar'

export default function SignUp() {
  return (
    <div className="app-container">
      <Navbar />
      <section className="next-section signin-section" aria-label="Sign Up">
        <div className="liquid-bg"></div>
        <div className="content-wrapper">
          <h2 className="contact-title">Sign Up</h2>
          <form className="glass-card contact-form" style={{marginTop:'8px'}} onSubmit={(e)=> e.preventDefault()}>
            <label className="input glass-input">
              <span>Name</span>
              <input type="text" placeholder="Your full name" required />
            </label>
            <label className="input glass-input">
              <span>Email</span>
              <input type="email" placeholder="you@example.com" required />
            </label>
            <label className="input glass-input">
              <span>Grade</span>
              <select defaultValue="" required>
                <option value="" disabled>Select grade</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </label>
            <a className="input-like" href="https://groupme.com/" target="_blank" rel="noreferrer">Join GroupMe</a>
          </form>
          <div className="below-link">
            <button className="glass-btn" type="button">Create Account</button>
          </div>
        </div>
      </section>
    </div>
  )
}


