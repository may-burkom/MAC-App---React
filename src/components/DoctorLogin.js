const DoctorLogin = () => {
    return(
        <div>
        <form className="login-form">
        <h3>Login as a Doctor</h3>
        <div>Username: <input type="Text" name="docUsername"/></div>
        <div>Password: <input type="Text" name="docPassword"/></div>
        <button>Login</button>
        </form>
        </div>
    )
}

export default DoctorLogin;