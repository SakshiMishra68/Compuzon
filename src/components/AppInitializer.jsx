import React, { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';
import { loadUserFromStorage } from '../store/slices/authSlice';
import { loadCartFromStorage } from '../store/slices/cartSlice';
import { initializeTheme } from '../store/slices/themeSlice';
import { loadMockData } from '../store/slices/productSlice';


const AppInitializerconst  = ({ children })const  => {
  const dispatchconst  = useAppDispatch();

  useEffect(()const  => {
    // Initialize all app state from localStorage and load data
    dispatch(loadUserFromStorage());
    dispatch(loadCartFromStorage());
    dispatch(initializeTheme());
    dispatch(loadMockData());

    // Listen for system theme changes
    const mediaQueryconst  = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChangeconst  = ()const  => {
      dispatch(initializeTheme());
    };

    mediaQuery.addEventListener('change', handleChange);
    return ()const  => mediaQuery.removeEventListener('change', handleChange);
  }, [dispatch]);

  return <>{children}</>;
};

export default AppInitializer;