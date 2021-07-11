import React, { useState, useEffect } from 'react';
import Mom from './Mom';
import Dad from './Dad';
import SimpleCard from './pages/HomeAdmin'
import { BrowserRouter, Switch, Route, Link, useHistory } from 'react-router-dom'
import './App.css'
import SignIn from './pages/SignIn';
import ListStudents from './pages/ListAdminStudents'
import ListVolunteers from './pages/ListAdminVolunteers'




function App() {

  const history = useHistory()
  const [userConnected, setUserConnected] = useState(false);
  const [informDisconnection, setInformDisconnection] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem("token") || false

  //   if (token) {
  //     setUserConnected(true)
  //   }
  // }, [])

  // const logout = () => {
  //   localStorage.removeItem("token")
  //   setUserConnected(false)
  //   setInformDisconnection(true)

  //   setTimeout(() => setInformDisconnection(false), 10000)
  // }

  return (

    <BrowserRouter>

      <Switch>
        <Route exact path="/élèves" component={ListStudents} /> 
        <Route exact path="/tuteurs" component={ListVolunteers} /> 
        <Route exact path="/">
          <SignIn changeUserConnected={setUserConnected} />
        </Route>
        <Route exact path="/available" component={Mom} />
        <Route exact path="/degree" component={Dad} />
        <Route exact path='/admin' component={SimpleCard}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// {!userConnected ?
//   <li className="nav-item">
//     {/* <Link to="/" className="nav-link">Stepper</Link> */}
//   </li>
//   :
//   <li className="nav-item">
//     <a href="#" className="nav-link" onClick={logout}>Logout</a>
//   </li>
// }