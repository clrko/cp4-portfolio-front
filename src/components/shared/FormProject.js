import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form'
import './FormProject.css'

const propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onFileChange: PropTypes.func.isRequired,
  project: PropTypes.shape({
    name: PropTypes.string,
    shortDescription: PropTypes.string,
    longDescription: PropTypes.string,
    urlGithubFront: PropTypes.string,
    urlGithubBack: PropTypes.string,
    urlDeployed: PropTypes.string,
    thumbnail: PropTypes.string,
    techno: PropTypes.string
  }),
  validated: PropTypes.bool.isRequired
}

const FormProject = ({
  handleChange,
  handleSubmit,
  onFileChange,
  project: {
    name,
    shortDescription,
    longDescription,
    urlGithubFront,
    urlGithubBack,
    urlDeployed,
    thumbnail,
    techno
  },
  validated
}) => (
  <Container>
    <h1 className='add-project-title'>Add a new project</h1>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId='name'>
        <Form.Label>Project name</Form.Label>
        <Form.Control
          required
          type='text'
          placeholder='Enter the project name'
          onChange={handleChange}
          value={name}
        />
        <Form.Control.Feedback type='invalid'>
          {' '}
          Please provide a name.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId='shortDescription'>
        <Form.Label>Short Description</Form.Label>
        <Form.Control
          required
          type='text'
          placeholder='Short description'
          onChange={handleChange}
          value={shortDescription}
        />
        <Form.Control.Feedback type='invalid'>
          {' '}
          Please provide a short description.
        </Form.Control.Feedback>
        <Form.Text className='text-muted'>
          Please describe the project in one line.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId='longDescription'>
        <Form.Label>Project information</Form.Label>
        <Form.Control
          as='textarea'
          rows='3'
          onChange={handleChange}
          value={longDescription}
        />
      </Form.Group>

      <Form.Group controlId='urlGithubFront'>
        <Form.Label>Source code frontend</Form.Label>
        <Form.Control
          type='url'
          placeholder='https://urlfront.com/'
          onChange={handleChange}
          value={urlGithubFront}
        />
        <Form.Control.Feedback type='invalid'>
          {' '}
          Please provide a valid url.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId='urlGithubBack'>
        <Form.Label>Source code backend</Form.Label>
        <Form.Control
          type='url'
          placeholder='https://urlback.com/'
          onChange={handleChange}
          value={urlGithubBack}
        />
        <Form.Control.Feedback type='invalid'>
          {' '}
          Please provide a valid url.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId='urlDeployed'>
        <Form.Label>Project deloyed</Form.Label>
        <Form.Control
          type='url'
          placeholder='https://myapp.com/'
          onChange={handleChange}
          value={urlDeployed}
        />
        <Form.Control.Feedback type='invalid'>
          {' '}
          Please provide a valid url.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId='techno'>
        <Form.Label>Technologies</Form.Label>
        <Form.Control
          required
          type='text'
          placeholder='React.js, Node.js etc.'
          onChange={handleChange}
          value={techno}
        />
        <Form.Control.Feedback type='invalid'>
          {' '}
          Please provide the list of technologies used.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Project thumbnail</Form.Label>
        <input
          required
          type='file'
          className='form-control'
          id='thumbnail'
          onChange={onFileChange}
        />
      </Form.Group>

      <Button variant='secondary' type='submit'>
        Submit
      </Button>
    </Form>
    {validated ? <p>The project has been successfully added!</p> : null}
  </Container>
)

FormProject.propTypes = propTypes

export default FormProject
