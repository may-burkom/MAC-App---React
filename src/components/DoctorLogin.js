import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Doctor from './Doctor'

const DoctorLogin = () => {
    return(
        <div>
        <BrowserRouter>
        <form className="login-form">
        <h3>Login as a Doctor</h3>
        <div>Username: <input type="Text" name="docUsername"/></div>
        <div>Password: <input type="Text" name="docPassword"/></div>
        <div><Link to='/doctor-homepage'><button>Login</button></Link></div>
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