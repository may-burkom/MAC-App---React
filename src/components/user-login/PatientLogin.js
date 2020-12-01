import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Patient from '../patient-home/pat-appoits'
import './login.css'
import axios from "axios"

    // Find patient login form 

const PatientLogin = ()=> {

    // const loginForm = document.querySelector('.login-doctor-form')
    // // Process the sumbission of the form 
    // loginForm.addEventListener('submit', function (event) {
    //     // Stopping the normal action of the form so that we can handle things here     
    //     event.preventDefault()
    //     console.log(event.target)
    //     console.log("Submitting the login form")
    //     var formData = new FormData(loginForm)
    //     console.log(formData)
    //     // Posting that data to our API     
    //     axios.post('http://localhost:3330', formData)

    // })
    return (
        <div className="loginforms">
            <BrowserRouter>
                <form className="login-doctor-form">
                    <h3>Clinical Patient Login</h3>
                    <div className="username">Username <input id="username" type="Text" name="patUsername" /><br></br> </div>
                    <div className="password">Password <input type="password" name="patPassword" /></div>
                    <div><Link to='/doctor-homepage'><button type="submit">Login</button></Link></div>
                </form>
                <Switch>
                    <Route exact path="/doctor-homepage">
                        < Patient />
                    </Route>
                </Switch>
            </BrowserRouter>

        </div>
    )

    
}

export default PatientLogin;