import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FormProject from '../shared/FormProject'

const defaultProps = {
  initialValues: {
    name: '',
    shortDescription: '',
    longDescription: '',
    urlGithubFront: '',
    urlGithubBack: '',
    urlDeployed: '',
    thumbnail: '',
    techno: ''
  }
}

const propTypes = {
  formTitle: PropTypes.string.isRequired,
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    shortDescription: PropTypes.string,
    longDescription: PropTypes.string,
    urlGithubFront: PropTypes.string,
    urlGithubBack: PropTypes.string,
    urlDeployed: PropTypes.string,
    thumbnail: PropTypes.string,
    techno: PropTypes.string
  }),
  apiCall: PropTypes.func.isRequired
}

const FormProjectContainer = ({ formTitle, initialValues, apiCall }) => {
  const [project, setProject] = useState(initialValues)
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
    apiCall(data)
  }

  return (
    <FormProject
      formTitle={formTitle}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      onFileChange={onFileChange}
      validated={validated}
      project={project}
    />
  )
}

FormProjectContainer.propTypes = propTypes
FormProjectContainer.defaultProps = defaultProps

export default FormProjectContainer
