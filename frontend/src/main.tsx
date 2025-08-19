import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import About from './pages/About'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import './styles.css'

const root = createRoot(document.getElementById('root')!)
// extremely small router: decide screen by pathname
const path = window.location.pathname
let Screen: React.ComponentType
if (path.startsWith('/about')) {
  Screen = About
} else if (path.startsWith('/contact')) {
  Screen = Contact
} else if (path.startsWith('/signin')) {
  Screen = SignIn
} else if (path.startsWith('/signup')) {
  Screen = SignUp
} else {
  Screen = App
}
root.render(
  <React.StrictMode>
    <Screen />
  </React.StrictMode>
)


