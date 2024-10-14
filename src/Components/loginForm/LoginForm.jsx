import React ,{useState} from "react";
import "./LoginForm.css";
import { FaUser,FaLock ,FaEnvelope} from "react-icons/fa";

const LoginForm = () => {
    const[email, setEmail] = useState('');

    const registerLink = () => {
        setEmail(' active');
    };
    const Link = () => {
        setEmail('');
    };

    return (
        <div className={`wrapper${email}`}>
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required/>
                        <FaUser className="icon"/>
                        </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required/>
                        <FaLock className="icon"/>
                    </div>
                    <div className="remember">
                        <label><input type="checkbox"/>Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit">Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form action="">
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required/>
                        <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Email" required/>
                        <FaEnvelope className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required/>
                        <FaLock className="icon"/>
                    </div>
                    <div className="remember">
                        <label>
                        <input type="checkbox"/>I agree to the terms and conditions</label>
                    </div>
                    <button type="submit">Register</button>
                    <div className="register-link">
                        <p>Already have an account? <a href="#" onClick={Link}>Login</a></p>
                    </div>
                </form>
            </div>
            
        </div>
    );
};
export default LoginForm
