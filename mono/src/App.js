import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Index from './pages/Index.js'
import Topic from './pages/Topic.js'
import Hot from './pages/Hot.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <div>
              <Route exact path="/" component={Index} />
              <Route path="/topics/:id" component={Index}/>
              <Route path="/focus" component={Topic} />
              <Route path="/hot" component={Hot} />
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
