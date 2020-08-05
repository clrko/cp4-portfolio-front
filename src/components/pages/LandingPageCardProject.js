import React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

const LandingPageCardProject = ({ id, name, shortDescription, urlGithubFront, urlGithubBack }) => (
  <Col md={4} key={id}>
    <Card mb={4} className='shadow-sm'>
      <Card.Img variant='top' src='holder.js/100px180' />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{shortDescription}</Card.Text>
        <div class='d-flex justify-content-between align-items-center'>
          <ButtonGroup>
            <Button variant='outline-secondary' size='sm'>More</Button>
            <Button variant='outline-secondary' size='sm'>View</Button>
          </ButtonGroup>
          <DropdownButton id='dropdown-basic-button' title={<span className='icon-github' />} size='sm' variant='black'>
            {urlGithubFront && <Dropdown.Item href={urlGithubFront}>Front</Dropdown.Item>}
            {urlGithubBack && <Dropdown.Item href={urlGithubBack}>Back</Dropdown.Item>}
          </DropdownButton>
        </div>
      </Card.Body>
    </Card>
    <br />
  </Col>
)

export default LandingPageCardProject
