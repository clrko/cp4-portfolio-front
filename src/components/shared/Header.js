import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import './Footer.css'

const Header = () => {
  return (
    <Navbar variant='dark' bg='dark' className='shadow-sm'>
      <Container className='d-flex justify-content-between'>
        <Navbar.Brand as={NavLink} to='/' className='d-flex align-items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            aria-hidden='true'
            className='mr-2'
            viewBox='0 0 24 24'
            focusable='false'
          >
            <path d='M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z' />
            <circle cx='12' cy='13' r='4' />
          </svg>
          <strong>Clrko&#39;s Portfolio</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={NavLink} to='/add-project'>
              Add Project
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
