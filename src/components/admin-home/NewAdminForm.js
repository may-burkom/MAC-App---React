import "./css/new-admin.css"

const NewAdminForm = () =>{
    return(
        <div>
          <form class="form1" >
          <h3>Add new Administrator</h3>
          <div class="grid-container">
            <div class="name">Given Name</div>
            <div class="in"><input type="Text" name="admName"/></div>
            <div class="surname">Surname</div>
            <div class="ins"><input type="Text" name="admSurname"/></div>
            <div class="username">username</div>
            <div class="insur"><input type="Text" name="admUsername"/></div>
            <div class="password">Password</div>
            <div class="inpass"><input type="Text" name="admPassword"/></div>
            <div class="gender">Gender</div>
            <div class="ingen"><input type="Text" name="admGender"/></div>
            <div class="dob">Date of Birth</div>
            <div class="indob"><input type="Date" name="admDoB"/></div>
            <div class="weight">Weight</div>
            <div class="inweig"><input type="Number" name="admWeight"/></div>
            <div class="height">Height</div>
            <div class="inheight"><input type="Number" name="admHeight"/></div>
            <div class="email">Email</div>
            <div class="inma"><input type="Text" name="admEmail"/></div>
            <div class="phone">Phone</div>
            <div class="inphone"><input type="Number" name="admTelephone"/></div>
            <div class="city">City</div>
            <div class="incity"><input type="Text" name="admCity"/></div>
            <div class="section">Section</div>
            <div class="insection"><input type="Text" name="admSection"/></div>
            <div class="lot">Lot Number</div>
            <div class="inlot"><input type="Text" name="admLotNo"/></div>
            <div class="street">Street</div>
            <div class="instreet"><input type="Text" name="admStreet"/></div>
            <div class="button"><button type="submit" class="subbtn">Submit</button></div>
          </div>
          </form>
    </div>
    )
}
export default NewAdminForm;