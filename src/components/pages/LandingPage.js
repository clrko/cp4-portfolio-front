import React from 'react'
import LandingPageAboutMe from './LandingPageAboutMe'
import LandingPageListProjects from './LandingPageListProjects'

const LandingPage = () => {
  return (
    <div>
      <div>Header</div>
      <LandingPageAboutMe />
      <LandingPageListProjects />
      <div>Footer</div>
    </div>
  )
}

export default LandingPage
