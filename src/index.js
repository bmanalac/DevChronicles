import React from 'react'
import ReactDOM from 'react-dom'
// Development_ENV = HashRouter
// Production_ENV = BrowserRouter
// react router backup with server side routing
// ref: http://stackoverflow.com/.../client-routing-using-react-router-and-server-side-routing
import { HashRouter as Router, Route } from 'react-router-dom'

// common
import './components/Common/_globals'

// Routes from ./pages
import Work from './pages/Work'
import Contact from './pages/Contact'

class App extends React.Component {
  render( ) {
    return (
      <Router>
        <div>
          <Route exact={true} path='/' component={Work}/>
          <Route path='/contact' component={Contact}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render( <App/>, document.getElementById( 'app' ))

// check of HMR is enabled in webpack
if ( module.hot ) {
  module.hot.accept( );
}
