import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBarSearch from './components/NavBarSearch';

function App() {
  return (
    <Router>
      <Route exact path="/" component={NavBarSearch} />
    </Router>
  );
}

export default App;
