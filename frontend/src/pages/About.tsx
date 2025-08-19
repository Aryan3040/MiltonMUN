import React from 'react'
import Navbar from '../components/Navbar'

function LeaderCard({ title }: { title: string }) {
  return (
    <div className="glass-card leader-card">
      <div className="leader-avatar" aria-hidden>👤</div>
      <div className="leader-title">{title}</div>
      <div className="leader-name">Name Placeholder</div>
      <div className="leader-contact">
        <div>email@example.com</div>
        <div>(555) 555-5555</div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div className="app-container">
      <Navbar />
      <section className="next-section about-section" aria-label="About">
        <div className="liquid-bg"></div>
        <div className="content-wrapper">
          <div className="glass-card about-card">
            <h2>About Us</h2>
            <p>
              Milton High School has been producing exceptional delegates since 2012. While we are a small
              team, we strive for the highest awards and often leave conferences with numerous certificates.
            </p>
          </div>

          <div className="leadership-tree">
            <div className="row tight">
              <LeaderCard title="President" />
              <LeaderCard title="Vice President" />
            </div>
            <div className="row tight">
              <LeaderCard title="Officer" />
              <LeaderCard title="Officer" />
            </div>
            <div className="row tight">
              <LeaderCard title="Officer" />
              <LeaderCard title="Officer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


