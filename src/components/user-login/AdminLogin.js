import {BrowserRouter, Route, Link, Switch} from 'react-router-dom' 
import './login.css'
import axios from "axios"
import admin from "../admin-home/admin-home"


const AdminLogin = (props) => {
   // Find admin login form 
    // const loginForm = document.querySelector('.login-admin-form')

    // // Process the sumbission of the form 
    // loginForm.addEventListener('submit', function (event) {
    //     // Stopping the normal action of the form so that we can handle things here     
    //     event.preventDefault()
    //     console.log(event.target)
    //     console.log("Submitting the login form")
    //     var formData = new FormData(loginForm)
    //     console.log(formData)
    //     // Posting that data to our API     
    //     axios.post('/login-admin', formData)
    // })
    
    return (
        <div className="loginforms">
            <BrowserRouter>
                <form className="login-doctor-form" >
                    <h3>Administration Login</h3>
                    <div className="username">Username <input id="username" type="Text" name="admUsername" /><br></br> </div>
                    <div className="password">Password <input type="password" name="admPassword" /></div>
                    <div><Link to='/admin'><button type="submit">Login</button></Link></div>
                </form>
                <Route path="/admin"
                    component={admin} />
                <Switch>
                    <Route exact path="/admin-homepage">
                        
                    </Route>
                </Switch>
                 
            </BrowserRouter>
           

        </div>
    )
}

export default AdminLogin;