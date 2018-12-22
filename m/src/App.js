import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// import { getCookie } from './utils/common'
// import asyncComponent from './comp/AsyncComponent'
import Index from './pages/Index.js'
import Topic from './pages/Topic.js'
import Crawler from './pages/Crawler.js'
import Crawlers from './pages/Crawlers.js'
import Me from './pages/Me.js'
import Login from './pages/Login.js'
import User from './pages/User.js'
// const Crawler     = asyncComponent(() => import('./pages/Crawler.js'))
// const Crawlers     = asyncComponent(() => import('./pages/Crawlers.js'))
// const Topic     = asyncComponent(() => import('./pages/Topic.js'))
// const Me     = asyncComponent(() => import('./pages/Me.js'))
// const Login     = asyncComponent(() => import('./pages/Login.js'))
// const User     = asyncComponent(() => import('./pages/User.js'))

class App extends Component {
  constructor(props) {
    super(props)
    global.constants.webpa = window.webpa
  }
  render() {
    return (
      <Router>
        <div className="App">
            <div>
              <Route exact path="/" component={Index} />
              <Route path="/topics/:id" component={Topic}/>
              <Route path="/crawlers" component={Crawlers}/>
              <Route path="/crawler/:id" component={Crawler}/>
              <Route path="/focus" component={Topic} />
              <Route path="/me" component={Me} />
              <Route path="/login" component={Login} />
              <Route path="/user" component={User} />
            </div>
            <div className="footer">
              <Link to="/"><i className="iconfont icon-shouye"></i></Link>
              <Link to="/me"><i className="iconfont icon-faxian1"></i></Link>
              <Link to="/user"><i className="iconfont icon-geren"></i></Link>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
