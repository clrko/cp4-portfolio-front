import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import axios from 'axios'
import LandingPageCardProject from './LandingPageCardProject'

const LandingPageListProjects = () => {
  const [listProject, setListProject] = useState([])

  useEffect(() => {
    getListProject()
  }, [])

  const getListProject = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/project`)
      .then(res => setListProject(res.data))
  }

  return (
    <div className='album py-5 bg-light'>
      <Container>
        <Row>
          {
            listProject.map(project =>
              <LandingPageCardProject
                key={project.id}
                id={project.id}
                name={project.name}
                shortDescription={project.short_description}
                urlGithubFront={project.url_github_front}
                urlGithubBack={project.url_github_back}
                thumbnail={project.thumbnail}
              />
            )
          }
        </Row>
      </Container>
    </div>
  )
}

export default LandingPageListProjects
