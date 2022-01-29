import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const location = useLocation();
    const { SignInUsingGoogle } = useAuth();
    const history = useHistory();
    const redirect_url = location.state?.from || '/shop'

    const handleGoogleLogin = () => {
        SignInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        <div className='text-center'>
            <div>
                <h1>Log in</h1>
                <form>
                    <input type="email" name="" placeholder='your email' id="" />
                    <br />
                    <input type="password" name="
                " placeholder='your password' id="" /> <br />
                    <input type="submit" value="submit" />
                </form> <br />
                <p>new to ema john? <Link to="/signup">Create Account</Link></p>
                <br />
                <div>
                    <button
                        className='btn-regular'
                        onClick={handleGoogleLogin}
                    >Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;