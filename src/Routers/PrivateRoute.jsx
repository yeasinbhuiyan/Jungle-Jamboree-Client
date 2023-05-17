

import { AuthContext } from '../AuthProviders/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

import { useContext } from 'react';
import LoadingSpinner from '../Shared/LoadingSpinner';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }
     if(user){
        return children
     }

    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRoute;