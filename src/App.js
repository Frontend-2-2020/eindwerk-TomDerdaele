import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import OnboardingRoutes from './components/routing/OnboardingRoutes'
import PostsRoutes from './components/routing/PostsRoutes'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/posts" component={PostsRoutes}/>
        <Route path="/" component={OnboardingRoutes}/>
      </Switch>
    </Router>
  )
}

export default App
