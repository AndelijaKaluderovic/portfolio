import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Nav from './components/Nav'
import Skills from './components/Skills'
import Work from './components/Work'
import './app.css'

const App = () => {
  return (
    <div className="app">
      <Nav />
      <div className="sections">
        <Home />
        <About />
        <Work />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}

export default App
