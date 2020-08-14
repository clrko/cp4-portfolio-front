import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import FormProjectContainer from '../shared/FormProjectContainer'

const formatResponse = ({
  long_description: longDescription,
  short_description: shortDescription,
  url_deployed: urlDeployed,
  url_github_back: urlGithubBack,
  url_github_front: urlGithubFront,
  ...rest
}) => ({
  ...rest,
  longDescription,
  shortDescription,
  urlDeployed,
  urlGithubBack,
  urlGithubFront
})

const FormEditProjectPage = () => {
  const [project, setProject] = useState(null)
  const { projectId } = useParams()

  const fetchProject = () =>
    api.fetchProject(projectId).then(formatResponse).then(setProject)

  useEffect(() => {
    fetchProject()
  }, [])

  if (!project) return <div>Loading</div>
  return (
    <FormProjectContainer
      formTitle='Edit project'
      initialValues={project}
      apiCall={(data) => api.updateProject(projectId, data)}
    />
  )
}

export default FormEditProjectPage
