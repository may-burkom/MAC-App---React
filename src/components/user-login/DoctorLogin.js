import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Doctor from '../doctor-home/new-consultation'
import './login.css'
import axios from "axios"


const DoctorLogin = () => {

    // const loginForm = document.querySelector('.login-doctor-form')

    // // Process the sumbission of the form 
    // loginForm.addEventListener('submit', function (event) {
    //     // Stopping the normal action of the form so that we can handle things here     
    //     event.preventDefault()
    //     console.log(event.target)
    //     console.log("Submitting the login form")
    //     var formData = new FormData(loginForm)
    //     console.log("form data")
    //     // Posting that data to our API     
    //     axios.post('/login-doctor', formData)
    // })

    return(
        <div className="loginforms">
        <BrowserRouter>
        <form className="login-doctor-form">
            <h3>Login as a Doctor</h3>
            <div className="username">Username <input id="username" type="Text" name="docUsername" /><br></br> </div>
            <div className="password">Password <input type="password" name="docPassword" /></div>
            <div><Link to='/doctor-homepage'><button type="submit">Login</button></Link></div>
        </form>
        <Switch>
            <Route exact path="/doctor-homepage">
                <Doctor/>
            </Route>     

        </Switch>
        </BrowserRouter>
        
        </div>
    )
}

export default DoctorLogin;