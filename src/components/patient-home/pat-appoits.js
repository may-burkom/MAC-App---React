
//import axios from "axios"
import './css/appoinment.css'
const Appointment = () =>{
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
            <div class="existing-appointment">
                <div>
                    <div>Doctor</div>
                    <div>Dr Peter</div>
                </div>
                <div>
                    <div>Date</div>
                    <div>12/12/12</div>
                </div>
                <div>
                    <div>Room</div>
                    <div>e334</div>
                </div>
                <div >
                    <div>Note</div>
                    <div>lnxlnzn</div>
                </div>
            </div>
        <form className="appointment-form">
        <h3>Add new Appointment</h3>
        <div>Patient Name: </div>
        <div> <input type="Text"name="appointPatName"/>
        </div>
        <div>Date:
        </div>
        <div><input type="date" name="appointDate"/></div>
        <div>Room:</div><div> <input type="Text" name="appointRoom"/></div>
        <div>Doctor's Name:</div><div>  <input type="Text" name="appointDoctor"/></div>
        <div>Reasons: </div><div> <textarea type="Text" name="appointReasons"></textarea></div>
        <button>Submit</button>
        </form>
        </div>
    )
}

export default Appointment;