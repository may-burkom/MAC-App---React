const NewPatientForm = () =>{
    return(
        <div>
        <form className="new-patient-form">
          <h3>Add new Patient</h3>
          <div>Patient Code: <input type="Text" name="patCode"/></div>
          <div>Name: <input type="Text" name="patName"/></div>
          <div>Surname: <input type="Text" name="patSurname"/></div>
          <div>Username: <input type="Text" name="patUserName"/></div>
          <div>Password: <input type="Text" name="patPassword"/></div>
          <div>DoB: <input type="Date" name="patDoB"/></div>
          <div>Gender: <input type="Text" name="patGender"/></div>
          <div>Height: <input type="Number" name="patHeight"/></div>
          <div>Weight: <input type="Number" name="patWeight"/></div>
          <div>Telephone: <input type="Number" name="patTelephone"/></div>
          <div>Mobile Phone: <input type="Number" name="patMobilePhone"/></div>
          <div>Email: <input type="Text" name="patEmail"/></div>
          <div>Section: <input type="Text" name="patSection"/></div>
          <div>Lot No.: <input type="Text" name="patLotNo"/></div>
          <div>Street: <input type="Text" name="patStreet"/></div>
          <div>City: <input type="Text" name="patCity"/></div>
          <button>Submit</button>
       </form>
        </div>
    )
}

export default NewPatientForm;