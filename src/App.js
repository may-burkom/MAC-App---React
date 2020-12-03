import './App.css';
import { Component } from 'react'
import {BrowserRouter, Route,Link, Switch} from 'react-router-dom'
import AdminLogin from './components/user-login/AdminLogin.js'
import DoctorLogin from './components/user-login/DoctorLogin.js'
import PatientLogin from './components/user-login/PatientLogin.js'
//import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
class App extends Component {

   getLoginDataDoctor = () =>{
     const loginForm = document.querySelector('.doctor')

  // Process the sumbission of the form 
  loginForm.addEventListener('submit', function (event) {
    // Stopping the normal action of the form so that we can handle things here     
    event.preventDefault()
    console.log(event.target)
    console.log("Submitting the login form")
    var formData = new FormData(loginForm)
    console.log(formData)
    // Posting that data to our API     
    axios.post('http://localhost:3330/login-doctor', formData)
  })
  }
 

  render() {
    
    return (
      <div class="grid-container">
        <BrowserRouter>
        <div class="login-main">
          <div class="header">
            <div class="admin-user">
              <Link to="/admin-login"><div>Adiministrator</div></Link>
            </div>
            <div class="doctor-user">
              <Link to="/doctor-login"><div>Doctor</div></Link>
            </div>
            <div class="patient-user">
              <Link Link to="/patient-login"><div>Patient</div></Link>
            </div>
          </div>
          <div class="login-pages">
            <Switch>
              <Route exact path="/admin-login">
                <AdminLogin />
              </Route>
              <Route exact path="/patient-login">
                <PatientLogin />
              </Route>
              <Route exact path="/doctor-login">
                  <DoctorLogin LogDoc={this.getLoginDataDoctor}/>
              </Route>
            </Switch>
          </div>
        </div>
       </BrowserRouter>
      </div>
    )
  }
}

export default App;


