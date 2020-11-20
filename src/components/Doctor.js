const Doctor= () =>{
    return(
        <div>

           <button className="exit-button">Logout</button>

           <h3>Doctors Page</h3>

           <h4>View existing consultation</h4>

           <div className="consultations"></div>

           <form className="consultation-form">

              <button className="exit-button">X</button>

              <h3>Add consultation</h3>

              <div>Patient Name: <input type="Text" name="consultPatName"/></div>
              <div>Date: <input type="Datetime-local" name="consultDate"/></div>
              <div>Room: <input type="Text" name="consultRoom"/></div>
              <div>Doctor's Name: <input type="Text" name="consultDoctor"/></div>
              <div>Consultation Summary: <textarea type="Text" name="consultReasons"/></div>
              <div>Attached file: <input type="Text" name="consultAttachedFile"/></div>

              <button>Submit</button>

            </form>
            
        </div>
    )
}

export default Doctor;