import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { Navigate } from 'react-router-dom';


const ProtectedRouteconst  = ({ 
  children, 
  adminOnlyconst  = true
})const  => {
  const { user, isAuthenticated }const  = useAppSelector((state)const  => state.auth);
  const { loading }const  = useAppSelector((state)const  => state.auth);
  const isAdminconst  = user?.roleconst  === 'admin';

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;