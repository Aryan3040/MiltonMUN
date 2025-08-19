import React from 'react'

function Navbar() {
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

function GradientButton({ children }: { children: React.ReactNode }) {
  const handleClick = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
  }
  return (
    <button className="gradient-btn" onClick={handleClick}>{children}</button>
  )
}

export default function App() {
  return (
    <div className="app-container">
      <div className="hero">
        <img src="/mhsfront.jpg" alt="Milton High School" className="hero-img" />
        <Navbar />
        <div className="hero-content">
          <div className="glass-card hero-card">
            <h1>Milton Model UN</h1>
            <p>Diplomacy. Debate. Global Impact.</p>
            <div className="cta">
              <GradientButton>Learn more</GradientButton>
            </div>
          </div>
        </div>
      </div>
      <section id="start" className="next-section push-up" aria-label="Get Started">
        <div className="liquid-bg"></div>
        <div className="content-wrapper">
          <div className="subtitle">
            Teaching diplomacy, debate, and leadership to the next generation of world leaders.
          </div>

          <div className="pillars-section">
            <div className="glass-card pillar-card">
              <div className="pillar-icon">🌍</div>
              <h3>Diplomacy</h3>
              <p>Learn the art of international cooperation and bridge-building through realistic UN simulations.</p>
            </div>
            <div className="glass-card pillar-card">
              <div className="pillar-icon">🎤</div>
              <h3>Debate</h3>
              <p>Sharpen your public speaking and persuasive skills in high-pressure, competitive environments.</p>
            </div>
            <div className="glass-card pillar-card">
              <div className="pillar-icon">💡</div>
              <h3>Impact</h3>
              <p>Become a leader who can navigate global challenges and make a real difference.</p>
            </div>
          </div>

          <div className="glass-card achievements-card">
            <h3>🏆 Award-Winning Delegation</h3>
            <div className="achievements-list">
              <div className="achievement">Best Small Delegation – UGA MUN</div>
              <div className="achievement">15+ Conferences attended</div>
              <div className="achievement">60+ Awards earned by our members</div>
            </div>
          </div>

          <div className="glass-card get-involved-card">
            <h2>📢 Join Milton MUN</h2>
            <p>Build leadership skills, gain public speaking mastery, and create experiences that stand out on your Common App.</p>
            <div className="cta-buttons">
              <button className="glass-btn">Join Us</button>
              <button className="glass-btn">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
      <div id="end" />
    </div>
  )
}


