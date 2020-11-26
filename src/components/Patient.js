const Patient = (props) =>{
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
<<<<<<< HEAD
        <button onClick= {props.appointmentData} >Submit</button>
=======
        <button onClick={props.appointData}>Submit</button>
>>>>>>> fcdfa3fd1f70b434bdc477defa467bcd136efd84
        </form>
        <h3>View previous appointments</h3>
        </div>
    )
}

export default Patient;