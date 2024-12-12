import React from 'react'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";


const GoogleLogin = () => {
     const { GoogleLogin } = useAuth();
     const navigate = useNavigate();

     const handleGoogleLogin = () => {
          GoogleLogin().then(() => {
               navigate('/');
          })
     }

     return (
          <div>
               <div className="divider">OR</div>
               <div className='text-center'>
                    <button onClick={handleGoogleLogin} className="w-2/4 text-center btn btn-primary btn-outline">
                         <FcGoogle className='text-3xl' /> Google
                    </button>
               </div>
          </div>
     )
}

export default GoogleLogin