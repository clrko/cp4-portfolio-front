import React, { useState } from 'react'
import axios from 'axios'
import FormProject from '../shared/FormProject'

const FormProjectContainer = () => {
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
    axios.post(`${process.env.REACT_APP_SERVER_URL}/project`, data)
  }

  return (
    <FormProject
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      onFileChange={onFileChange}
      validated={validated}
      project={project}
    />
  )
}

export default FormProjectContainer
