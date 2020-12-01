import "./css/new-admin.css"
  
const NewAdminForm = (props) =>{
    
    return(
        <div>
          <form className="form1" >
          <h3>Add new Administrator</h3>
          <div class="grid-container">
            <div class="name">Given Name</div>
            <div class="in"><input type="Text" name="admName"></input></div>
            <div class="surname">Surname</div>
            <div class="ins"><input type="Text" name="admSurname"></input></div>
            <div class="username">username</div>
            <div class="insur"><input type="Text" name="admUsername"></input></div>
            <div class="password">Password</div>
            <div class="inpass"><input type="Text" name="admPassword"></input></div>
            <div class="gender">Gender</div>
            <div class="ingen"><input type="Text" name="admGender"></input></div>
            <div class="dob">Date of Birth</div>
            <div class="indob"><input type="Date" name="admDoB"></input></div>
            <div class="position">Position</div>
            <div class="inpos"><input type="Text" name="admPosition"></input></div>
            <div class="weight">Weight</div>
            <div class="inweig"><input type="Number" name="admWeight"></input></div>
            <div class="height">Height</div>
            <div class="inheight"><input type="Number" name="admHeight"></input></div>
            <div class="email">Email</div>
            <div class="inma"><input type="Text" name="admEmail"></input></div>
            <div class="phone">Phone</div>
            <div class="inphone"><input type="Number" name="admTelephone"></input></div>
            <div class="city">City</div>
            <div class="incity"><input type="Text" name="admCity"></input></div>
            <div class="section">Section</div>
            <div class="insection"><input type="Text" name="admSection"></input></div>
            <div class="lot">Lot Number</div>
            <div class="inlot"><input type="Text" name="admLotNo"></input></div>
            <div class="street">Street</div>
            <div class="instreet"><input type="Text" name="admStreet"></input></div>
            <div class="button"><button type="submit" class="subbtn" onClick={props.newAdmin}>Submit</button></div>
          </div>
          </form>
    </div>
    )
}

  
export default NewAdminForm;