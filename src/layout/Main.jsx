import React from 'react';
import NavBar from '../shared/NavBar/NavBar';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { Toaster } from 'sonner';

const Main = () => {
    const {user, isLoaded, isSignedIn} = useUser()
    if(!isSignedIn && isLoaded){
        return <Navigate to={'/auth/sign-in'} />
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className='min-h-[calc(100vh-290px'>
                <Outlet></Outlet>
            </div>
            <Toaster />
        </div>
    );
};

export default Main;