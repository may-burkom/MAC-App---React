const NewDoctorForm = (props) => {
    return(
        <div>
           <form className="new-doctor-form">
              <h3>Add new Doctor</h3>
              <div>Name: <input type="Text" name="docName"/></div>
              <div>Surname: <input type="Text" name="docSurname"/></div>
              <div>Username: <input type="Text" name="docUsername"/></div>
              <div>Password: <input type="Text" name="docPassword"/></div>
              <div>DoB: <input type="Date" name="docDoB"/></div>
              <div>Gender: <input type="Text" name="docGender"/></div>
              <div>Height: <input type="Number" name="docHeight"/></div>
              <div>Weight: <input type="Number" name="docWeight"/></div>
              <div>Telephone: <input type="Number" name="docTelephone"/></div>
              <div>Mobile Phone: <input type="Number" name="docMobilePhone"/></div>
              <div>Email: <input type="Text" name="docEmail"/></div>
              <div>Section: <input type="Text" name="docSection"/></div>
              <div>Lot No.: <input type="Text" name="docLotNo"/></div>
              <div>Street: <input type="Text" name="docStreet"/></div>
              <div>City: <input type="Text" name="docCity"/></div>
              <div>Licence Type: <input type="Text" name="docLicenceType"/></div>
              <div>Specialized Field: <input type="Text" name="docSpeciality"/></div>
              <button onClick={props.newDoc}>Submit</button>
          </form>
        </div>
    )
}
export default NewDoctorForm;