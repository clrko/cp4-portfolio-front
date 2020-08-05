import React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Row from 'react-bootstrap/Row'

const listProject = [
  {
    id: 1,
    name: 'Drake R. Porter',
    short_description: 'A responsive showcase website for Drake R. Porter alias Dark Reporter, a fictional reporter.',
    long_description: '',
    url_github_front: 'https://github.com/clrko/DrakeRporter',
    url_github_back: '',
    url_deployed: 'https://clrko.github.io/DrakeRporter/',
    screenshot: '',
    techno: 'JavaScript, HTML, CSS'
  },
  {
    id: 2,
    name: 'Thunder',
    short_description: 'An amazing app to enrich your musical knowledge!',
    long_description: '',
    url_github_front: 'https://github.com/clrko/wild-thunder/',
    url_github_back: 'https://github.com/clrko/Back_BindTest',
    url_deployed: 'https://wild-thunder.netlify.app/',
    screenshot: '',
    techno: 'React.js, Node.js, MySQL, CSS'
  },
  {
    id: 3,
    name: 'Travel Memory Game',
    short_description: 'An amazing app to play when you are locked down !',
    long_description: '',
    url_github_front: 'https://github.com/clrko/travel_memory_game',
    url_github_back: '',
    url_deployed: 'https://travelmemorygame.netlify.app/',
    screenshot: '',
    techno: 'React.js, CSS'
  },
  {
    id: 4,
    name: 'List Games',
    short_description: 'A responsive react app to display video game data.',
    long_description: '',
    url_github_front: 'https://github.com/clrko/checkpoint_2_games',
    url_github_back: '',
    url_deployed: 'https://listgames.netlify.app/',
    screenshot: '',
    techno: 'React.js, Hooks, CSS'
  }
]

const LandingPageListProjects = () => {
  return (
    <div class='album py-5 bg-light'>
      <Container>
        <Row>
          {
            listProject.map(project => {
              return (
                <Col md={4} key={project.id}>
                  <Card mb={4} className='shadow-sm'>
                    <Card.Img variant='top' src='holder.js/100px180' />
                    <Card.Body>
                      <Card.Title>{project.name}</Card.Title>
                      <Card.Text>{project.short_description}</Card.Text>
                      <div class='d-flex justify-content-between align-items-center'>
                        <ButtonGroup>
                          <Button variant='outline-secondary' size='sm'>More</Button>
                          <Button variant='outline-secondary' size='sm'>View</Button>
                        </ButtonGroup>
                        <DropdownButton id='dropdown-basic-button' title={<span className='icon-github' />} size='sm' variant='black'>
                          {project.url_github_front && <Dropdown.Item href={project.url_github_front}>Front</Dropdown.Item>}
                          {project.url_github_back && <Dropdown.Item href={project.url_github_back}>Back</Dropdown.Item>}
                        </DropdownButton>
                      </div>
                    </Card.Body>
                  </Card>
                  <br />
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}

export default LandingPageListProjects
