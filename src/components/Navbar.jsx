import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import UserDropdown from './userDropdown';

const Navbar = () => {
     const { user } = useAuth();
     console.log(user)
     return (
          <div className="navbar bg-base-200">
               <div className="navbar-start">
                    <div className="dropdown">
                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   className="w-5 h-5"
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
                              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                              <li><a>Item 1</a></li>
                              <li>
                                   <a>Parent</a>
                                   <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                   </ul>
                              </li>
                              <li><a>Item 3</a></li>
                         </ul>
                    </div>
                    <h2 className="text-xl btn btn-ghost">Gadget Shoh</h2>
               </div>
               <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                         <li>
                              <NavLink to="/">Home</NavLink>
                         </li>
                         <li>
                              <NavLink to="/products">Products</NavLink>
                         </li>
                         <li>
                              <NavLink to="/about">About</NavLink>
                         </li>
                         <li>
                              <NavLink to="/contact-us">Contact Us</NavLink>
                         </li>
                    </ul>
               </div>
               {
                    user ? (
                         <div className='navbar-end'>
                              <UserDropdown />
                         </div>
                    ) : (
                         <div className="navbar-end">
                              <div className="flex items-center gap-2">
                                   <Link to="/login">
                                        <button className='btn btn-outline btn-primary'>Login</button>
                                   </Link>
                                   <Link to="/register">
                                        <button className='btn btn-primary'>Register</button>
                                   </Link>
                              </div>
                         </div>
                    )}
          </div>
     )
}

export default Navbar