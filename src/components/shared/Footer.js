import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container'
import './Footer.css'

const Footer = () => {
  return (
    <div className='text-muted footer'>
      <Container>
        <p className='float-right'>
          <Button variant='outline-info' size='sm' onClick={() => window.window.scrollTo({ top: 0, behavior: 'smooth' })}>Top</Button>
        </p>
        <div className='footer-text'>
          <a href='https://clrko.github.io/' target='_blank' rel='noopener noreferrer'>Claire Kodia</a>
          <p>2020</p>
          <p>Portfolio based on the Album example from &copy; Bootstrap.</p>
        </div>
      </Container>
    </div>
  )
}

export default Footer
