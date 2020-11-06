import React, { Component } from 'react';
//import axios from 'axios';
import './App.css';

//import redux and routers
import { HashRouter as Router, Route } from 'react-router-dom';

//import pages
import Feeling from '../../pages/Feeling/Feeling';
import Support from '../../pages/Support/Support';
import Understanding from '../../pages/Understanding/Understanding';
import Comments from '../../pages/Comments/Comments';
import Review from '../../pages/Review/Review';
import Submit from '../../pages/Submit/Submit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
        </header>
        <Router>
          <Route exact path="/" component={Feeling} />
          <Route exact path="/understanding" component={Understanding} />
          <Route path="/support" component={Support} />
          <Route path="/comments" component={Comments} />
          <Route path="/review" component={Review} />
          <Route path="/submit" component={Submit} />
        </Router>
      </div>
    );
  }
}

export default App;
