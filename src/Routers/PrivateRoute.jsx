

import { AuthContext } from '../AuthProviders/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

import { useContext } from 'react';
import LoadingSpinner from '../Shared/LoadingSpinner';
import Swal from 'sweetalert2';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (user) {
        return children
    }

    Swal.fire('You have to login first')
    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default PrivateRoute;