import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'


function Header() {
  return (
    <>
      <Navbar sticky='top' expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className='fw-bolder' >Arun K K</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href='#about' >About</Nav.Link>
              <Nav.Link href='#services' >Services</Nav.Link>
              <Nav.Link href='#projects' >Projects</Nav.Link>
              <Nav.Link href='#skills'>Skills</Nav.Link>
              <Nav.Link href='#experience' >Experience</Nav.Link>
              <Nav.Link href='#contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default Header