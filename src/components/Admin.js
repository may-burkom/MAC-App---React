import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import NewAdminForm from './NewAdminForm.js';
import NewDoctorForm from './NewDoctorForm.js';
import NewPatientForm from './NewPatientForm.js';

const Admin = (props) =>{
    
    return(
        <div>
        <BrowserRouter>

        <div class="side-bar">
            <div><Link to='/new-patient'><button>Add new Patient</button></Link></div>
            <div><Link to='/new-doctor'><button>Add new Doctor</button></Link></div>    
            <div><Link to='/new-admin'><button>Add new Admin</button></Link></div>    
        </div>
    
         <Switch>
              <Route exact path="/new-admin">
                  <NewAdminForm newAdm={props.newAdm}/>
              </Route>
              <Route exact path="/new-doctor">
                  <NewDoctorForm newDoc={props.newDoc}/>
              </Route>
              <Route exact path="/new-patient">
                   <NewPatientForm newPat={props.newPat}/>
              </Route>

           </Switch>
        </BrowserRouter> 
        
        </div>
    )
}

export default Admin