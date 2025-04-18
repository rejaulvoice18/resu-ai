
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { UserButton, useUser } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
    const { user, isSignedIn } = useUser();
    const navOptions = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
        <li><NavLink to="/aboutUs">About Us</NavLink></li>
    </>
    return (
        <div className='bg-black'>
            <>
                <div className="navbar bg-black text-white w-10/12 mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm text-white dropdown-content bg-black rounded-box z-[10] mt-3 w-52 p-2 shadow">

                                {navOptions}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">
                            <img className='w-8 mr-2' src={logo} alt="" />
                            Resu-Ai</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {isSignedIn ? (
                            <div className="flex gap-2 items-center">
                                <Link to={"/dashboard"}>
                                    <Button>Dashboard</Button>
                                </Link>
                                <UserButton />
                            </div>
                        ) : (
                            <Link to={"/auth/sign-in"}>
                                <Button>Get Started</Button>
                            </Link>
                        )}
                    </div>
                </div>

            </>
        </div>
    );
};

export default NavBar;
