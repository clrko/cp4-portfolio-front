import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import LandingPage from './components/pages/LandingPage'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={LandingPage} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
