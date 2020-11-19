const Admin = () =>{
    return(
        <div>
        <button className="exit-button">Logout</button>
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
        <hr/>
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
        <div>Certificate: <input type="Text" name="docCertificate"/></div>
        <div>Licence Type: <input type="Text" name="docLicenceType"/></div>
        <div>Specialized Field: <input type="Text" name="docSpeciality"/></div>
        <button>Submit</button>
        </form>
        <form className="new-admin-form">
        <h3>Add a new admin</h3>
        <div>Name: <input type="Text" name="admName"/></div>
        <div>Surname: <input type="Text" name="admSurname"/></div>
        <div>Username: <input type="Text" name="admUsername"/></div>
        <div>Password: <input type="Text" name="admPassword"/></div>
        <div>DoB: <input type="Date" name="admDoB"/></div>
        <div>Position: <input type="Text" name="admPosition"/></div>
        <div>Gender: <input type="Text" name="admGender"/></div>
        <div>Height: <input type="Number" name="admHeight"/></div>
        <div>Weight: <input type="Number" name="admWeight"/></div>
        <div>Telephone: <input type="Number" name="admTelephone"/></div>
        <div>Mobile Phone: <input type="Number" name="admMobilePhone"/></div>
        <div>Email: <input type="Text" name="admEmail"/></div>
        <div>Section: <input type="Text" name="admSection"/></div>
        <div>Lot No.: <input type="Text" name="admLotNo"/></div>
        <div>Street: <input type="Text" name="admStreet"/></div>
        <div>City: <input type="Text" name="admCity"/></div>
        <button>Sign Up</button>
        </form>
        </div>
    )
}

export default Admin