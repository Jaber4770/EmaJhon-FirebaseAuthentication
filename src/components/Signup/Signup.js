import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='text-center'>
            <div>
                <h1>Create Account</h1>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder='your email' /><br />
                    <input type="password" name="" id="" placeholder='enter your password' /><br />
                    <input type="password" name="" id="" placeholder='re-enter your password' /><br />
                    <input type="submit" value="submit" />
                </form>
                <div>
                    <button className='btn-regular' onClick=''>Google Sign In</button>
                </div>
                <div>
                    <p>Already have an Ema-John account? <Link to='/login'>Log in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;