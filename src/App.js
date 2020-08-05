import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './components/shared/Footer'
import FormAddProjectPage from './components/pages/FormAddProjectPage'
import Header from './components/shared/Header'
import LandingPage from './components/pages/LandingPage'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/add-project' component={FormAddProjectPage} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
