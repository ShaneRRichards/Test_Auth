import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

  
export default function PrivateRoute ({ children }) {
    const currentUser = useAuth();
    let location = useLocation();
  
    if (!currentUser.user) {
      return <Navigate to="/login" state={{ from: location }} />;
    }
  
    return children;
  }
  
  