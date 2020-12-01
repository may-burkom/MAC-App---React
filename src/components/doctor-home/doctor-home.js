
import { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './css/dochome.css'
import Consultation from './new-consultation.js'
class App extends Component {
    render() {
        return (
            <div>
                <div class="grid-container">
                    <div class="header">
                    <div>Terms of Use</div>
                    <div>Stateboard</div>
                    <div>User Guide</div>
                    <div>Logout</div>
                    </div>
                    <div class="header2">
                    <h1>MEDICAL APPOINTMENT CONSULTATION</h1>
                    <h3>Doctors Section</h3>
                    </div>
                    <BrowserRouter>
                    <div class="content1">
                        <div class="patient">Patient</div>
                        <div class="doctors">Doctors</div>
                        <Link to="/consultation">
                        <div class="consultation">Consultation</div>
                        </Link>
                        <div class="appoinments">Appointments</div>
                        
                    </div>
                   
                    <div class="mass-dis">
                    <Switch>
                         <Route exact path="/consultation">
                            <Consultation/>
                         </Route>
                    </Switch>
                    </div>
                    </BrowserRouter>
                    <div class="appointments">appointments</div>
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

export default App;
