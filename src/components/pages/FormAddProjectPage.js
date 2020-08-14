import React from 'react'
import FormProjectContainer from '../shared/FormProjectContainer'
import api from '../../services/api'

const FormAddProjectPage = () => (
  <FormProjectContainer
    formTitle='Add a new project'
    apiCall={api.createProject}
  />
)

export default FormAddProjectPage
