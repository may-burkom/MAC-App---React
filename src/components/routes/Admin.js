import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import NewAdminForm from '../admin-home/NewAdminForm.js';
import NewDoctorForm from '../admin-home/NewDoctorForm.js';
import NewPatientForm from '../admin-home/NewPatientForm.js';

//event handelers to post data 


const Admin = () =>{
    
    return(
        <div>
        <BrowserRouter>

        <div class="side-bar">
            <div><Link to='/new-patient'>Add new Patient</Link></div>
            <div><Link to='/new-doctor'>Add new Doctor</Link></div>    
            <div><Link to='/new-admin'>Add new Admin </Link></div>    
        </div>
    
         <Switch>
              <Route exact path="/new-admin">
                  <NewAdminForm/>
              </Route>
              <Route exact path="/new-doctor">
                  <NewDoctorForm/>
              </Route>
              <Route exact path="/new-patient">
                   <NewPatientForm/>
              </Route>

         </Switch>
        </BrowserRouter> 
        
        </div>
    )
}

export default Admin