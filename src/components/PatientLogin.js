const PatientLogin = () => {
    return(
        <div>
        <form className="login-form">
        <button className="exit-button">X</button>
        <h3>Login as a Patient</h3>
        <div>Username: <input type="Text" name="patUsername"/></div>
        <div>Password: <input type="Text" name="patPassword"/></div>
        <button>Login</button>
        </form>
        </div>
    )
}

export default PatientLogin;