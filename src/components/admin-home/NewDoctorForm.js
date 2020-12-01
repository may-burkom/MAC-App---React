const NewDoctorForm = (props) => {
    return(
        <div>
           <form className="new-doctor-form">
          <h3>Add new Doctor</h3>
          <div class="grid-container">
            <div class="name">Name</div>
            <div class="in"><input type="Text" name="docName"/></div>
            <div class="surname">Surname</div>
            <div class="ins"><input type="Text" name="docSurname"/></div>
            <div class="username">username</div>
            <div class="insur"><input type="Text" name="docUsername"/></div>
            <div class="password">password</div>
            <div class="inpass"><input type="Text" name="docPassword"/></div>
            <div class="gender">Gender</div>
            <div class="ingen"><input type="Text" name="docGender"/></div>
            <div class="dob">Date of Birth</div>
            <div class="indob"><input type="Date" name="docDoB"/></div>
            <div class="weight">Weight</div>
            <div class="inweig"><input type="Number" name="docWeight"/></div>
            <div class="height">Height</div>
            <div class="inheight"><input type="Number" name="docHeight"/></div>
            <div class="email">Email</div>
            <div class="inma"><input type="Text" name="docEmail"/></div>
            <div class="phone">Phone</div>
            <div class="inphone"><input type="Number" name="docMobilePhone"/></div>
            <div class="city">City</div>
            <div class="incity"><input type="Text" name="docCity"/></div>
            <div class="section">Section</div>
            <div class="insection"><input type="Text" name="docSection"/></div>
            <div class="lot">Lot Number</div>
            <div class="inlot"><input type="Text" name="docLotNo"/></div>
            <div class="street">Street</div>
            <div class="instreet"><input type="Text" name="docStreet"/></div>
            <div class="lic">License</div>
            <div class="licin"><input type="Text" name="docLicenceType"/></div>
            <div class="special">Specility</div>
            <div class="inspec"><input type="Text" name="docSpeciality"/></div>
            <div class="button"><button onClick={props.newDoctor}>Submit</button></div>
            
          </div>
          </form>
       
        </div>
      
    )
      
}

export default NewDoctorForm;