import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(error => {
                console.error('error', error)
            })
    }
    return (
        <div className='text-center mt-20'>
            <p className='text-red-500'>Something went wrong!!!</p>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <p className='text-3xl'>Please <button className='btn btn-sm btn-primary' onClick={handleLogOut}>Sign Out</button></p>
        </div>
    );
};

export default DisplayError;