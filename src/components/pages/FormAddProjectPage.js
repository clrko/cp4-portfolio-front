import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form'
import './FormAddProjectPage.css'

const FormAddProjectPage = () => {
  const [project, setProject] = useState({
    name: '',
    shortDescription: '',
    longDescription: '',
    urlGithubFront: '',
    urlGithubBack: '',
    urlDeployed: '',
    thumbnail: '',
    techno: ''
  })
  const [thumbnail, setThumbnail] = useState('')
  const [validated, setValidated] = useState(false)

  const handleChange = (e) => {
    setProject({ ...project, [e.target.id]: e.target.value })
  }

  const onFileChange = (e) => {
    setThumbnail(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const form = e.currentTarget
    setValidated(true)
    if (form.checkValidity() === false) {
      return
    }
    const data = new FormData()
    const {
      name,
      shortDescription,
      longDescription,
      urlGithubFront,
      urlGithubBack,
      urlDeployed,
      techno
    } = project
    data.append('name', name)
    data.append('short_description', shortDescription)
    data.append('long_description', longDescription)
    data.append('url_github_front', urlGithubFront)
    data.append('url_github_back', urlGithubBack)
    data.append('url_deployed', urlDeployed)
    data.append('thumbnail', thumbnail)
    data.append('techno', techno)
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/project`, data)
  }

  return (
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
          <Form.Control as='textarea' rows='3' onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId='urlGithubFront'>
          <Form.Label>Source code frontend</Form.Label>
          <Form.Control
            type='url'
            placeholder='https://urlfront.com/'
            onChange={handleChange}
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
}

export default FormAddProjectPage
