import axios from 'axios' 

const AdminLogin = () => {
    
    return(
        <div>
        <form className="login-form">
        <h3>Login as an Admin</h3>
        <div>Username: <input type="Text" name="admUsername"/></div>
        <div>Password: <input type="Text" name="admPassword"/></div>
        <button>Login</button>
        </form>
        </div>
    )
}

export default AdminLogin;