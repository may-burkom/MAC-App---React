
import { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import "./css/admin-home.css"
import NewAdminForm from './NewAdminForm'
import NewDoctorForm from './NewDoctorForm'
import NewPatientForm from './NewPatientForm'
import axios from 'axios'

class App extends Component {

    getNewDoctorData = () => {
        const addDoctorForm = document.querySelector('.new-doctor-form')
        
        addDoctorForm.addEventListener('submit', function (event) {
            // Stopping the normal action of the form so that we can handle things here     
            event.preventDefault()
            console.log(event.target)
            console.log("Submitting the new doctor form")
            var formData = new FormData(addDoctorForm)
            console.log("form data")
            // Posting that data to our API     
            axios.post('http://localhost:3330/add-doctor', formData)
                .then(function(response){
                    console.log(response.data)
                    alert(`${response.data.doctorFullname} added successfully!`)
                })
                .catch((err)=>{console.log(err)})
            
            addDoctorForm.reset() 
        })
    }

    getNewAdminData = () => {
        const addAdminForm = document.querySelector('.form1')
        addAdminForm.addEventListener('submit', function (event) {
          event.preventDefault()
          console.log(event.target)
          console.log("Submitting the new admin form")
          var formData = new FormData(addAdminForm)
          console.log(formData)
          axios.post('http://localhost:3330/add-admin', formData)
            .then(function(response){
                console.log(response.data)
                alert(`${response.data.firstName} ${response.data.lastName} added successfully!`)
            })
            .catch((err)=>{console.log(err)})
    
            addAdminForm.reset() 
        })
    }

    getNewPatData = () => {
        const addPatForm = document.querySelector('.form3')
        addPatForm.addEventListener('submit', function(event){
            event.preventDefault()
            console.log(event.target)
            console.log("Submitting the new patient form")
            var formData = new FormData(addPatForm)
            console.log(formData)
            axios.post('http://localhost:3330/add-patient', formData)
                .then(function(response){
                    console.log(response.data)
                    alert(`${response.data.patientFullname} added successfully!`)
                })
                .catch((err)=>{console.log(err)})
        
            addPatForm.reset()
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
                             <NewAdminForm newAdmin = {this.getNewAdminData}/>
                        </Route>
                        <Route exact path="/new-doctor">
                            <NewDoctorForm newDoctor = {this.getNewDoctorData} />
                        </Route>
                        <Route exact path ="/new-patient">
                            <NewPatientForm newPatient = {this.getNewPatData}/>
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
