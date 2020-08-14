import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

const propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  shortDescription: PropTypes.string,
  urlGithubFront: PropTypes.string,
  urlGithubBack: PropTypes.string,
  thumbnail: PropTypes.string
}

const LandingPageCardProject = ({
  id,
  name,
  shortDescription,
  urlGithubFront,
  urlGithubBack,
  thumbnail
}) => (
  <Col md={4} key={id}>
    <Card mb={4} className='shadow-sm'>
      <Card.Img
        variant='top'
        src={`${process.env.REACT_APP_SERVER_URL}/images/${thumbnail}`}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{shortDescription}</Card.Text>
        <div className='d-flex justify-content-between align-items-center'>
          <ButtonGroup>
            <Button variant='outline-secondary' size='sm'>
              More
            </Button>
            <Button variant='outline-secondary' size='sm'>
              View
            </Button>
          </ButtonGroup>
          <DropdownButton
            id='dropdown-basic-button'
            title={<span className='icon-github' />}
            size='sm'
            variant='black'
          >
            {urlGithubFront && (
              <Dropdown.Item
                href={urlGithubFront}
                target='_blank'
                rel='noopener noreferrer'
              >
                Front
              </Dropdown.Item>
            )}
            {urlGithubBack && (
              <Dropdown.Item
                href={urlGithubBack}
                target='_blank'
                rel='noopener noreferrer'
              >
                Back
              </Dropdown.Item>
            )}
          </DropdownButton>
        </div>
      </Card.Body>
    </Card>
    <br />
  </Col>
)

LandingPageCardProject.propTypes = propTypes

export default LandingPageCardProject
