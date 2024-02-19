import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import './App.css'

function App() {

  const aboutRef = React.useRef();
  const skillsRef = React.useRef();
  const projectsRef = React.useRef();
  const contactRef = React.useRef();

  const handleSectionScroll = (ref) => {
    window.scrollTo({top:ref.current.offsetTop, behavior:"smooth"})
  }

  return (
    <section className='app'>
      <Header
      handleSectionScroll={handleSectionScroll ? handleSectionScroll : undefined}
      aboutRef={aboutRef ? aboutRef : undefined}
      skillsRef={skillsRef ? skillsRef : undefined}
      projectsRef={projectsRef ? projectsRef : undefined}
      contactRef={contactRef ? contactRef : undefined}
      />
      <Body
      aboutRef={aboutRef ? aboutRef : undefined}
      skillsRef={skillsRef ? skillsRef : undefined}
      projectsRef={projectsRef ? projectsRef : undefined}
      contactRef={contactRef ? contactRef : undefined}
      />
      <Footer/>
    </section>
  )
}

export default App
