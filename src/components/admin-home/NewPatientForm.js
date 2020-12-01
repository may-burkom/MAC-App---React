import "./css/newPatientform.css"
//import axios from "axios"
//import {Form, Col, Button} from 'react-bootstrap'
    // Find the add new patient form 
    // const addPatientForm = document.querySelector('.new-patient-form')

    // // Process the sumbission of the form 
    // addPatientForm.addEventListener('submit', function (event) {
    //     // Stopping the normal action of the form so that we can handle things here     
    //     event.preventDefault()
    //     console.log(event.target)
    //     console.log("Submitting the new patient form")
    //     var formData = new FormData(addPatientForm)
    //     console.log("form data")
    //     // Posting that data to our API     
    //     axios.post('/add-patient', formData)
    // })

const NewPatientForm = () =>{
    return(
        <div>
            <form>
                <h3>Add new Patient</h3>
                <div class="grid-container">
                    <div class="name">Given Name</div>
                    <div class="in"><input type="Text" name="patName"/></div>
                    <div class="surname">Surname</div>
                    <div class="ins"><input type="Text" name="patSurname"/></div>
                    <div class="username">username</div>
                    <div class="insur"><input type="Text" name="patUserName"/></div>
                    <div class="password">Password</div>
                    <div class="inpass"><input type="Text" name="patPassword"/></div>
                    <div class="gender">Gender</div>
                    <div class="ingen"><input type="Text" name="patGender"/></div>
                    <div class="dob">Date of Birth</div>
                    <div class="indob"><input type="Date" name="patDoB"/></div>
                    <div class="weight">Weight</div>
                    <div class="inweig"><input type="Number" name="patWeight"/></div>
                    <div class="height">Height</div>
                    <div class="inheight"><input type="Number" name="patHeight"/></div>
                    <div class="email">Email</div>
                    <div class="inma"><input type="Text" name="patEmail"/></div>
                    <div class="phone">Phone</div>
                    <div class="inphone"><input type="Number" name="patMobilePhone"/></div>
                    <div class="city">City</div>
                    <div class="incity"><input type="Text" name="patCity"/></div>
                    <div class="section">Section</div>
                    <div class="insection"><input type="Text" name="patSection"/></div>
                    <div class="lot">Lot Number</div>
                    <div class="inlot"><input type="Text" name="patLotNo"/></div>
                    <div class="street">Street</div>
                    <div class="instreet"><input type="Text" name="patStreet"/></div>
                    <div class="button"><button type="submit" class="subbtn">Submit</button></div>
                </div>
            </form>
        </div>
    )
}

export default NewPatientForm;