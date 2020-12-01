
import { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import { DropdownButton, Dropdown } from "react-bootstrap"
// import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import Appointments from './pat-appoits'
import './css/patient-home.css'
import ViewConsultation from "./view-consultation.js"

class PatientHome extends Component {

    render() {
        return (
            <div className="patient-home">
                <div class="container">
                    <div class="header-1">
                        <div>Terms of Use</div>
                        <div>Stateboard</div>
                        <div>User Guide</div>
                        <div>Logout</div>
                    </div>
                    <div class="header-2">
                        <h1>MEDICAL APPOINTMENT CONSULTATION</h1>
                        <h3>Patient Section</h3>
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
                    <BrowserRouter>
                    <div class="main-2">
                        <div class="appointments">Appoinments
                        <Route>
                            <Appointments/>
                        </Route>
                        </div>
                        <div class="consultation">Consultation
                        <Route>
                         <ViewConsultation/>
                        </Route>
                        </div>
                    </div>
                    </BrowserRouter>
                    <div class="footer">
                        <h5>Contacts</h5>
                        <h6>Phone : 6750000000</h6>
                        <h6>Address</h6>
                        <h4>P O BOX 000 Nationl Capital District</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default PatientHome;
