import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className='text-center'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='shadow' placeholder="Name" defaultValue={user.displayName} {...register("Name")} />
                <br />
                <input className='shadow' placeholder="YourEmail@gmail.com" defaultValue={user.email} {...register("Email", { required: true })} />
                {errors.email && <span className='error'>Your email is required</span>}
                <br />
                <input className='shadow' placeholder="Address" {...register("Address")} />
                <br />
                <input className='shadow' placeholder="City" {...register("City")} />
                <br />
                <input className='shadow' placeholder="Phone number" {...register("Phone")} />
                <br />
                <input className='shadow' type="submit" />
            </form>
        </div>
    );
};

export default Shipping;