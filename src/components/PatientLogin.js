import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Patient from './Patient'

const PatientLogin = (props) => {
    return(
        <div>
        <BrowserRouter>
        <form className="login-patient-form">
        <h3>Login as a Patient</h3>
        <div>Username: <input type="Text" name="patUsername"/></div>
        <div>Password: <input type="Text" name="patPassword"/></div>
        <div><Link to='/patient-homepage'><button>Login</button></Link></div>
        </form>
        <Switch>
              <Route exact path="/patient-homepage">
                  <Patient appointmentData = {props.appointmentData}/>
              </Route>
              
           </Switch>
        </BrowserRouter>
        
        </div>
    )
}

export default PatientLogin;