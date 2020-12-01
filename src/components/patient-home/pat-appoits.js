
//import axios from "axios"
  
const Patient = () =>{
    // Find appointment form 
    // const appointmentForm = document.querySelector('.appointment-form')

    // // Process the sumbission of the form 
    // appointmentForm.addEventListener('submit', function (event) {
    //     // Stopping the normal action of the form so that we can handle things here     
    //     event.preventDefault()
    //     console.log(event.target)
    //     console.log("Submitting the appointment form")
    //     var formData = new FormData(appointmentForm)
    //     console.log("form data")
    //     // Posting that data to our API     
    //     axios.post('/add-appointment', formData)
    // })

    return(
        <div>
        <button className="exit-button">Logout</button>
        <h3>Patient's Page</h3>
        <form className="appointment-form">
        <h3>Add new Appointment</h3>
        <div>Patient Name: <input type="Text" name="appointPatName"/></div>
        <div>Date: <input type="datetime-local" name="appointDate"/></div>
        <div>Room: <input type="Text" name="appointRoom"/></div>
        <div>Doctor's Name: <input type="Text" name="appointDoctor"/></div>
        <div>Reasons: <input type="Text" name="appointReasons"/></div>
        <button>Submit</button>
        </form>
        <h3>View previous appointments</h3>
        </div>
    )
}

export default Patient;