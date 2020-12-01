import './App.css';
import { Component } from 'react'
import {BrowserRouter, Route,Link, Switch} from 'react-router-dom'
import AdminLogin from './components/user-login/AdminLogin.js'
import DoctorLogin from './components/user-login/DoctorLogin.js'
import PatientLogin from './components/user-login/PatientLogin.js'
//import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    console.log('this should be rendering...')
    return (
      <div className="grid-container">
        <BrowserRouter>
          <div className="user-content">
            <div>
              <ul>User Type 
                <Link to="/admin-login"><li>Administrator</li></Link>
                <Link to="/patient-login"><li>Patient</li></Link>
                <Link to="/doctor-login"><li>Doctor</li></Link>
              </ul>
            </div>
          </div>
          <div className="body">
          <Switch>
            <Route exact path="/admin-login">
              <AdminLogin/>
            </Route>
            <Route exact path="/patient-login">
              <PatientLogin/>
            </Route>
            <Route exact path="/doctor-login">
              <DoctorLogin/>
            </Route>
          </Switch>
          </div>
        </BrowserRouter>
      </div>
    
    )
  }
}

export default App;
