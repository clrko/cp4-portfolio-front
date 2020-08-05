import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form'
import './FormAddProjectPage.css'

const FormAddProjectPage = () => {
  const [thumbnail, setThumbnail] = useState('')
  const [validated, setValidated] = useState(false)

  const onFileChange = (e) => {
    setThumbnail(e.target.files[0])
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }
    const data = new FormData()
    data.append('name', form.firstname)
    data.append('short_description', form.lastname)
    data.append('long_description', form.id_instrument)
    data.append('url_github_front', )
    data.append('url_github_back', )
    data.append('url_deployed', )
    data.append('thumbnail', thumbnail)
    data.append('techno', )
    axios
      .post('project/new-project', data)
      .then(setValidated(true))
  }

  return (
    <Container>
      <h1 className='add-project-title'>Add a new project</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId='formName'>
          <Form.Label>Project name</Form.Label>
          <Form.Control required type='text' placeholder='Enter the project name' />
          <Form.Control.Feedback type='invalid'> Please provide a name.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId='formShortDescription'>
          <Form.Label>Short Description</Form.Label>
          <Form.Control required type='text' placeholder='Short description' />
          <Form.Control.Feedback type='invalid'> Please provide a short description.</Form.Control.Feedback>
          <Form.Text className='text-muted'>
            Please describe the project in one line.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='formLongDescription'>
          <Form.Label>Project information</Form.Label>
          <Form.Control as='textarea' rows='3' />
        </Form.Group>

        <Form.Group controlId='formUrlFront'>
          <Form.Label>Source code frontend</Form.Label>
          <Form.Control type='url' placeholder='https://urlfront.com/' />
          <Form.Control.Feedback type='invalid'> Please provide a valid url.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId='formUrlBack'>
          <Form.Label>Source code backend</Form.Label>
          <Form.Control type='url' placeholder='https://urlback.com/' />
          <Form.Control.Feedback type='invalid'> Please provide a valid url.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId='formUrlDeployed'>
          <Form.Label>Project deloyed</Form.Label>
          <Form.Control type='url' placeholder='https://myapp.com/' />
          <Form.Control.Feedback type='invalid'> Please provide a valid url.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId='formTechnologies'>
          <Form.Label>Technologies</Form.Label>
          <Form.Control required type='text' placeholder='React.js, Node.js etc.' />
          <Form.Control.Feedback type='invalid'> Please provide the list of technologies used.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.File id='projectThumbnail' label='Project thumbnail' onChange={onFileChange} />
        </Form.Group>

        <Button variant='secondary' type='submit'>
          Submit
        </Button>
      </Form>
      {validated ? <p>Le projet a bien été ajouté</p> : null}
    </Container>
  )
}

export default FormAddProjectPage
