import React, { useState, useEffect } from 'react';
import Mom from './Mom';
import Dad from './Dad';
import { BrowserRouter, Switch, Route, Link, useHistory } from 'react-router-dom'
import './App.css'
import SignIn from './pages/SignIn';



function App() {

  const history = useHistory()
  const [userConnected, setUserConnected] = useState(false);
  const [informDisconnection, setInformDisconnection] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token") || false

    if (token) {
      setUserConnected(true)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem("token")
    setUserConnected(false)
    setInformDisconnection(true)

    setTimeout(() => setInformDisconnection(false), 10000)
  }

  return (

    <BrowserRouter>

      {/* {!userConnected ?
        <li className="nav-item">
          <Link to="/" className="nav-link">Stepper</Link>
        </li>
        :
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={logout}>Logout</a>
        </li>
      } */}


      <Switch>
        <Route path="/">
          <SignIn changeUserConnected={setUserConnected} />
        </Route>
        <Route exact path="/Stepper" component={Mom} />
        <Route exact path="/Step" component={Dad} />


        {/* <Route path="/admin">
          <Admin disconnectUser={logout} />
        </Route> */}

      </Switch>
    </BrowserRouter>
  );
}

export default App;