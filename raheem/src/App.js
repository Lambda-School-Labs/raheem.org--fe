import React from 'react';
import { Route } from 'react-router-dom';

import Demographics from './components/Demographics';

function App() {
  return (
    <div>
      {/* routes using react-router-dom */}
      <Route exact path="/">
        <h1>Raheem</h1>
      </Route>
      <Route path="/demo">
        <Demographics />
      </Route>
    </div>
  );
}

export default App;
