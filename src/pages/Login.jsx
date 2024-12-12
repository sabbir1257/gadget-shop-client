import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import { useForm } from 'react-hook-form';
import GoogleLogin from '../components/login-registration/GoogleLogin';

const Login = () => {
  const { Login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate()

  const onSubmit = (data) => {
    Login(data.email, data.password);
    navigate('/');
  }

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered"
                {...register('email',
                  {
                    required: true
                  })}
              />
              {errors.email && (
                <p className="text-sm font-light text-red-500 " >
                  Email is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">New Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register('password', {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password?.type === 'required' && (
                <p className="text-sm font-light text-red-500 " >
                  Password is required
                </p>
              )}
              {errors.password?.type === 'minLength' && (
                <p className="text-sm font-light text-red-500 " >
                  Password must at least 6 characters
                </p>
              )}
            </div>
            <div className="mt-6 form-control">
              <button type='submit' className="btn btn-primary">Login</button>
            </div>
            <GoogleLogin/>
            <p className='my-4 text-sm font-light'>New here? <Link className='text-[#4a00ff] font-semibold' to="/register">Register</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login