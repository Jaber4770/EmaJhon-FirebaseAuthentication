import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { SignInUsingGoogle } = useAuth();
    return (
        <div className='text-center'>
            <div>
                <h1>Log in</h1>
                <form onSubmit="">
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
                        onClick={SignInUsingGoogle}
                    >Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;