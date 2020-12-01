
import { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import "./css/admin-home.css"
import NewAdminForm from './NewAdminForm'
import NewDoctorForm from './NewDoctorForm'
import NewPatientForm from './NewPatientForm'
import axios from 'axios'

class App extends Component {

    const = function getNewDoctorData() {
        const addDoctorForm = document.querySelector('.new-doctor-form')
        
        addDoctorForm.addEventListener('submit', function (event) {
            // Stopping the normal action of the form so that we can handle things here     
            event.preventDefault()
            console.log(event.target)
            console.log("Submitting the new doctor form")
            var formData = new FormData(addDoctorForm)
            console.log("form data")
            // Posting that data to our API     
            axios.post('ht/add-doctor', formData)
        })
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                <div className="header-0">
                    <div>Contacts</div>
                    <div>Addressess</div>
                </div>
                <div className="header-1">
                    <div><h3>MEDICAL APPOINTMENT CONSULTATION </h3></div>
                    <div><h3>Administration Section</h3></div>
                    <div></div>
                </div>
                <div className="header-2">
                    <div>sign-out</div>
                    <div>view profile</div>
                </div>
                <div className="main-0">
                    <h1>Create New</h1>
                        <Link to="/new-admin"><div placeholder="Add new Admin" className="new-user">+ <label>Admin</label></div>
                        </Link>
                        <Link to="/new-doctor"><div className="new-user">+<label>Doctor</label></div></Link>
                        <Link to="/new-patient"><div className="new-user">+<label>Patient</label></div></Link>
                </div>
                <div className="main-2">
                    <Switch>
                        <Route exact path="/new-admin">
                             <NewAdminForm/>
                        </Route>
                        <Route exact path="/new-doctor">
                            <NewDoctorForm newDoctor = {this.getNewDoctorData} />
                        </Route>
                        <Route exact path ="/new-patient">
                            <NewPatientForm/>
                        </Route>
                    </Switch>
                </div>
                <div className="footer-1">
                        <div>Helps</div>
                        <div>tools</div>
                </div>
                <div className="footer-2">
                <div>location</div>
                <div>Abouts</div>
                </div>
                </BrowserRouter>
            </div>
           

        )
    }
}

export default App;
