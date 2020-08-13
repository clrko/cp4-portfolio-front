import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './LandingPageAboutMe.css'
import '../../assets/css/icons.css'
import '../../assets/css/portfolio.css'

const LandingPageAboutMe = () => (
  <Jumbotron className='text-center custom-jumbotron'>
    <Container>
      <h1>Claire Kodia</h1>
      <p className='lead text-muted'>
        Full Stack Web Developer <br /> JavaScript / React.js / Node.js
      </p>
      <p className='social-networks'>
        <a
          href='https://github.com/clrko'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='icon-lg icon-github' />
        </a>
        <a
          href='https://www.linkedin.com/in/clairekodia/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='icon-lg icon-linkedin' />
        </a>
      </p>
    </Container>
  </Jumbotron>
)

export default LandingPageAboutMe
