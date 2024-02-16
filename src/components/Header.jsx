import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'

const Header = (props) => {
  const {handleSectionScroll, aboutRef, skillsRef, projectsRef, contactRef} = props;
  return (
    <Navbar expand="lg" className="">
    <Container>
      <Navbar.Brand href="#home" className='fw-bold d-flex flex-column gap-0 brand-title'>
        <span>lakshman</span>
        <span>kamisetti</span>
      </Navbar.Brand>
      <Navbar.Toggle className='' aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
        <Nav className='gap-sm-2 gap-md-5 gap-lg-5 gap-xl-5 gap-xxl-5'>
          <Nav.Link onClick={()=>handleSectionScroll(aboutRef)} className='fw-bold'>About</Nav.Link>
          <Nav.Link onClick={()=>handleSectionScroll(skillsRef)} className='fw-bold'>Skills</Nav.Link>
          <Nav.Link onClick={()=>handleSectionScroll(projectsRef)} className='fw-bold'>Works</Nav.Link>
          <Nav.Link onClick={()=>handleSectionScroll(contactRef)} className='fw-bold'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default Header