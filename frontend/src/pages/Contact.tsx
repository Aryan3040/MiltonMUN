import React from 'react'
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <div className="app-container">
      <Navbar />
      <section className="next-section contact-section" aria-label="Contact">
        <div className="liquid-bg"></div>
        <div className="content-wrapper">
          <h2 className="contact-title">Contact Us</h2>
          <form className="glass-card contact-form" style={{marginTop:'8px'}} onSubmit={(e)=> e.preventDefault()}>
            <div className="form-row">
              <label className="input glass-input">
                <span>Name</span>
                <input type="text" placeholder="Your full name" required />
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
            </div>
            <div className="form-row">
              <label className="input glass-input">
                <span>School</span>
                <input type="text" placeholder="Your school" />
              </label>
              <label className="input glass-input">
                <span>Email</span>
                <input type="email" placeholder="you@example.com" required />
              </label>
            </div>
            <label className="input glass-input">
              <span>Message</span>
              <textarea rows={6} placeholder="How can we help?" required />
            </label>
            <div className="cta-buttons">
              <button className="glass-btn" type="submit">Send</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}


