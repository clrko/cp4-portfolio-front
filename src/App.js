import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'
import Footer from './components/shared/Footer'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={LandingPage} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
