import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import { useForm } from 'react-hook-form';
import GoogleLogin from '../components/login-registration/GoogleLogin';

const Register = () => {
  const { CreateUser } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate()

  const onSubmit = (data) => {
    CreateUser(data.email, data.password)
    navigate('/');
  }

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
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


            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register('confirmPassword', {
                  require: true,
                  validate: (value) => {
                    if (watch('password') != value) {
                      return 'Your password do not match'
                    }
                  }
                }
                )}
              />
              {errors.confirmPassword && (
                <p className="text-sm font-light text-red-500 " >
                  Both Password must match
                </p>
              )}
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select className="w-full max-w-xs select select-bordered"
                {...register('role', { required: true })}
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller </option>
              </select>
              {
                errors.role && (
                  <p className="text-sm font-light text-red-500 " >
                    You must select a role
                  </p>
                )}
            </div>
            <div className="mt-6 form-control">
              <button className='btn btn-primary' type='submit'>
                Register
              </button>
            </div>
            <GoogleLogin />
            <p className='my-4 text-sm font-light'>Already Have an account? <Link className='text-[#4a00ff] font-semibold' to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;