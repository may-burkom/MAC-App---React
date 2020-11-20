const NewAdminForm = () =>{
    return(
        <div>
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

export default NewAdminForm;