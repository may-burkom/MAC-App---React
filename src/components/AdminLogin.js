import {BrowserRouter, Route, Link, Switch} from 'react-router-dom' 
import Admin from './Admin'

const AdminLogin = (props) => {
    
    return(
        <div>
        <BrowserRouter>
        <form className="login-admin-form">
        <h3>Login as an Admin</h3>
        <div>Username: <input type="Text" name="admUsername"/></div>
        <div>Password: <input type="Text" name="admPassword"/></div>
        <div><Link to='/admin-homepage'><button onClick={props.getAdmData}>Login</button></Link></div> 
        
        </form>
        <Switch>
              <Route exact path="/admin-homepage">
                  <Admin newAdm={props.newAdm} newDoc={props.newDoc} newPat={props.newPat}/>
              </Route>
              

           </Switch>
        </BrowserRouter>
        
        </div>
    )
}

export default AdminLogin;