import './App.css';
import { Component } from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import axios from 'axios'

import AdminLogin from './components/AdminLogin'
import DoctorLogin from './components/DoctorLogin.js'
import PatientLogin from './components/PatientLogin'

class App extends Component {

  getPatientLoginData = () => {
    // Find patient login form 
    const loginForm = document.querySelector('.login-patient-form') 
  
    // Process the sumbission of the form 
    loginForm.addEventListener('submit', function(event) {     
      // Stopping the normal action of the form so that we can handle things here     
      event.preventDefault()     
      console.log(event.target)     
      console.log("Submitting the login form")         
      var formData = new FormData(loginForm)         
      console.log("form data")      
      // Posting that data to our API     
      axios.post('http://localhost:3330/login-patient', formData)
    })
  }

  getDoctorLoginData = () => {
    // Find doctor login form 
    const loginForm = document.querySelector('.login-doctor-form') 

    // Process the sumbission of the form 
    loginForm.addEventListener('submit', function(event) {     
      // Stopping the normal action of the form so that we can handle things here     
      event.preventDefault()     
      console.log(event.target)     
      console.log("Submitting the login form")         
      var formData = new FormData(loginForm)         
      console.log("form data")      
      // Posting that data to our API     
      axios.post('http://localhost:3330/login-doctor', formData)
  })
  }

  getAdminLoginData = () => {
    // Find admin login form 
    const loginForm = document.querySelector('.login-admin-form') 

    // Process the sumbission of the form 
    loginForm.addEventListener('submit', function(event) {     
      // Stopping the normal action of the form so that we can handle things here     
      event.preventDefault()     
      console.log(event.target)     
      console.log("Submitting the login form")         
      var formData = new FormData(loginForm)         
      console.log("form data")      
      // Posting that data to our API     
      axios.post('http://localhost:3330/login-admin', formData)
    })
  }

  getAppointData = () => {
    // Find appointment form 
    const appointmentForm = document.querySelector('.appointment-form') 
  
    // Process the sumbission of the form 
    appointmentForm.addEventListener('submit', function(event) {     
      // Stopping the normal action of the form so that we can handle things here     
      event.preventDefault()     
      console.log(event.target)     
      console.log("Submitting the appointment form")         
      var formData = new FormData(appointmentForm)         
      console.log("form data")      
      // Posting that data to our API     
      axios.post('http://localhost:3330/add-appointment', formData)
    })
  }

  getConsultData = () => {
    // Find consultation form 
    const consultationForm = document.querySelector('.consultation-form') 
  
    // Process the sumbission of the form 
    consultationForm.addEventListener('submit', function(event) {     
      // Stopping the normal action of the form so that we can handle things here     
      event.preventDefault()     
      console.log(event.target)     
      console.log("Submitting the consultation form")         
      var formData = new FormData(consultationForm)         
      console.log("form data")      
      // Posting that data to our API     
      axios.post('http://localhost:3330/add-consultation', formData)
    })
  }

  addAdmin = () => {
    // Find the add new admin form 
    const addAdminForm = document.querySelector('.new-admin-form') 
  
    // Process the sumbission of the form 
    addAdminForm.addEventListener('submit', function(event) {     
      // Stopping the normal action of the form so that we can handle things here     
      event.preventDefault()     
      console.log(event.target)     
      console.log("Submitting the new admin form")         
      var formData = new FormData(addAdminForm)         
      console.log("form data")      
      // Posting that data to our API     
      axios.post('http://localhost:3330/add-admin', formData)
    })
  }

  addDoctor = () => {
    // Find the add new doctor form 
    const addDoctorForm = document.querySelector('.new-doctor-form') 
  
    // Process the sumbission of the form 
    addDoctorForm.addEventListener('submit', function(event) {     
      // Stopping the normal action of the form so that we can handle things here     
      event.preventDefault()     
      console.log(event.target)     
      console.log("Submitting the new doctor form")         
      var formData = new FormData(addDoctorForm)         
      console.log("form data")      
      // Posting that data to our API     
      axios.post('http://localhost:3330/add-doctor', formData)
    })
  }

  addPatient = () => {
    // Find the add new patient form 
    const addPatientForm = document.querySelector('.new-patient-form') 
  
    // Process the sumbission of the form 
    addPatientForm.addEventListener('submit', function(event) {     
      // Stopping the normal action of the form so that we can handle things here     
      event.preventDefault()     
      console.log(event.target)     
      console.log("Submitting the new patient form")         
      var formData = new FormData(addPatientForm)         
      console.log("form data")      
      // Posting that data to our API     
      axios.post('http://localhost:3330/add-patient', formData)
    })
  }

  render() {
    console.log("This page is rendering")
    return(
      <div className= "login-page">
        <BrowserRouter>
          <header>
            <h1>MAC</h1>
            <h2>Medical Appointments & Consultations</h2>
          </header>
          
          <div className="nav-bar">
            <a href="#about">About</a>
            <a href="#contacts">Contacts</a>
            <a href="#history">History</a>
            <div className="dropdown">
                <button className="dropbtn">Login 
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <Link to='/admin-login'><button>Login as an Admin</button></Link>
                    <Link to='/doctor-login'><button>Login as a Doctor</button></Link>
                    <Link to='/patient-login'><button>Login as a Patient</button></Link>
                </div> 
            </div>
          </div>

          <Switch>
            <Route exact path="/admin-login">
              <AdminLogin getAdmData={this.getAdminLoginData} newAdm={this.addAdmin} newDoc={this.addDoctor} newPat={this.addPatient}/>
            </Route>
            <Route exact path="/doctor-login">
              <DoctorLogin getDocData={this.getDoctorLoginData} consultData={this.getConsultData}/>
            </Route>
            <Route exact path="/patient-login">
              <PatientLogin getPatData={this.getPatientLoginData} appointData= {this.getAppointData}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
