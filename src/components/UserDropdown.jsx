import React from 'react'
import useAuth from '../hooks/useAuth'
import { NavLink } from 'react-router-dom';

const UserDropdown = () => {
     const { user, Logout } = useAuth();
     const handleLogout = () => {
          Logout();
     }

     return (
          <div className="dropdown dropdown-bottom dropdown-end">
               <div tabIndex={0} role="button">
                    <div className="avatar">
                         <div className="w-10 rounded-full">
                              <img src={`${user?.photoURL || '/public/user.png'}`} />
                         </div>
                    </div>
               </div>
               <ul tabIndex={0} className="dropdown-content menu  rounded-box z-[1] w-32 p-2 shadow bg-slate-300 flex flex-col gap-3">
                    <li>
                         <NavLink to='/'>Dashboard</NavLink>
                    </li>
                    <li>
                         <button onClick={handleLogout} className='btn btn-primary btn-outline btn-sm'>Logout</button>
                    </li>
               </ul>
          </div>
     )
}

export default UserDropdown