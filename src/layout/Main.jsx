import React from 'react';
import NavBar from '../shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='min-h-[calc(100vh-290px'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;