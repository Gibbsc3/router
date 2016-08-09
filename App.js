import React from 'react'
import { Link, browserHistory } from 'react-router'

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div>
//       <h1>Hey</h1>
//       <p className="lead">HowdyHowdyHowdyHowdyHowdy</p>
//       </div>
//     )
//   }
// }

var App = (props) => <div>
  <h1>Hey</h1>
  <hr />
  <ul>
   <li><Link to="/">Home</Link></li>
   <li><Link to="/page1">Page1</Link></li>
   <li><Link to="/page2">Page2</Link></li>
   <li><Link to="/page3">Page3</Link></li>
  </ul>
  <button className="btn btn-block btn-success" onClick={() => browserHistory.push('/')}>Go Home</button>
  <div>{props.children}</div>
  </div>

export default App
