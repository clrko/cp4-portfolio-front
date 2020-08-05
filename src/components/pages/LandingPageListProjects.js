import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import LandingPageCardProject from './LandingPageCardProject'

const listProject = [
  {
    id: 1,
    name: 'Drake R. Porter',
    short_description: 'A responsive showcase website for Drake R. Porter alias Dark Reporter, a fictional reporter.',
    long_description: '',
    url_github_front: 'https://github.com/clrko/DrakeRporter',
    url_github_back: '',
    url_deployed: 'https://clrko.github.io/DrakeRporter/',
    screenshot: '/img/drakerporter_hiddenaccess.png',
    techno: 'JavaScript, HTML, CSS'
  },
  {
    id: 2,
    name: 'Thunder',
    short_description: 'An amazing app to enrich your musical knowledge!',
    long_description: '',
    url_github_front: 'https://github.com/clrko/wild-thunder/',
    url_github_back: 'https://github.com/clrko/Back_BindTest',
    url_deployed: 'https://wild-thunder.netlify.app/',
    screenshot: '/img/thunder_welcomepage.png',
    techno: 'React.js, Node.js, MySQL, CSS'
  },
  {
    id: 3,
    name: 'Travel Memory Game',
    short_description: 'An amazing app to play when you are locked down !',
    long_description: '',
    url_github_front: 'https://github.com/clrko/travel_memory_game',
    url_github_back: '',
    url_deployed: 'https://travelmemorygame.netlify.app/',
    screenshot: '/img/travel_memory_game_homepage.png',
    techno: 'React.js, CSS'
  },
  {
    id: 4,
    name: 'List Games',
    short_description: 'A responsive react app to display video game data.',
    long_description: '',
    url_github_front: 'https://github.com/clrko/checkpoint_2_games',
    url_github_back: '',
    url_deployed: 'https://listgames.netlify.app/',
    screenshot: '/img/listgames_landingpage.png',
    techno: 'React.js, Hooks, CSS'
  }
]

const LandingPageListProjects = () => {
  return (
    <div class='album py-5 bg-light'>
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
                screenshot={project.screenshot}
              />
            )
          }
        </Row>
      </Container>
    </div>
  )
}

export default LandingPageListProjects
