import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route 
} from 'react-router-dom'

import Index from './pages/Index.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Route exact path="/" component={Index}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
