
import { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './css/dochome.css'
import Consultation from './new-consultation.js'
import ViewAppoint from './view-appoint.js'
import axios from 'axios'

class App extends Component {

    consultFormData = function(){
        const consultationForm = document.querySelector('.consultation-form')
         
        consultationForm.addEventListener('submit', function (event) {
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
    render() {
        return (
            <div>
                <div class="container">
                    <BrowserRouter>
                    <div class="header-2-0">
                        <div>Terms of Use</div>
                        <div>Stateboard</div>
                        <div>User Guide</div>
                        <div>Logout</div>
                    </div>

                    <div class="header-2-2">
                        <h1>MEDICAL APPOINTMENT CONSULTATION</h1>
                        <h3>Doctors Section</h3>
                    </div>
                    <div class="main-0">
                            <div class="grid-container7">
                                <div class="photo">Photo</div>
                                <div class="names">Name</div>
                                <div class="address">
                                    <div class="Phone">Phone
                                </div>
                                    <div class="email">Email</div>
                                    <div class="phone-in">67572239170</div>
                                    <div class="email-in">jkdepeter@gmail.com</div>
                                </div>
                            </div>
                    </div>

                        <div class="main-2-0">
                            <Route >
                                <Consultation newConsult = {this.consultFormData}/>
                            </Route>
                        </div>

                        <div class="main-2-1">
                            <Route >
                                <ViewAppoint/>
                            </Route>
                        </div>

                        <div class="footer-2">
                            <h5>Contacts</h5>
                            <h6>Phone : 6750000000</h6>
                            <h6>Address</h6>
                            <h4>P O BOX 000 Nationl Capital District</h4>
                        </div>
                        </BrowserRouter>
                    </div>
                </div>
        )
    }
}

export default App;
