import React from 'react';
import Mom from './Mom';
import Dad from './Dad';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'



function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Mom} />
        <Route exact path="/Step" component={Dad} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;