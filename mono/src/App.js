import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Index from './pages/Index.js'
import Topic from './pages/Topic.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <div>
              <Route exact path="/" component={Index} />
              <Route path="/topics/:id" component={Topic}/>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
