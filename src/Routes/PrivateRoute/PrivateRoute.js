import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    let location= useLocation()
    if (loading) {
        return <button className="btn bg-cyan-500 border-none loading">loading</button>
    }
   if (user && user.uid) {
    return children
   }
   return (
    <Navigate to='/login' state={ {from:location}} replace></Navigate>
);
};

export default PrivateRoute;