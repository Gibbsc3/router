import React from 'react'
//used for SEO ask about later
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Fail from './Fail'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Router path="page1" component={Page1} />
      <Router path="page2" component={Page2} />
      <Router path="page3" component={Page3} />
    </Route>
    <Router path="*" component={Fail} />
  </Router>
  , document.getElementById('deathToMultiPageApps'))
