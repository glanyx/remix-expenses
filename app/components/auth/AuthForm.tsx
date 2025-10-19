import { FaLock, FaUserPlus } from 'react-icons/fa';
import { Link, useSearchParams } from 'react-router';

const AuthForm = () => {

  const [searchParams] = useSearchParams()
  const method = searchParams.get('mode') || 'login'

  return (
    <form method="post" className="form h-max max-w-[24rem] w-[24rem] my-8 mx-auto rounded-md bg-primary-200! text-gray-10! shadow-[0_1px_4px_rgba(0_0_0_/_0.2)] animate-fade-slide-up duration-1500 ease-out text-center" id="auth-form">
      <div className="border-2 border-solid border-primary-10 rounded-full text-2xl w-[4rem] h-[4rem] inline-flex justify-center items-center mb-4">
        {method === 'login'
          ?
            <FaLock className='animate-fade-slide-up duration-1500 ease-out' />
          :
            <FaUserPlus className='animate-fade-slide-up duration-1500 ease-out' />
        }
      </div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input className='text-center' type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input className='text-center' type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
        <button>{method === 'login' ? 'Login' : 'Create User'}</button>
        <Link className='text-xs text-primary-10 hover:text-primary-50' to={`?mode=${method === 'login' ? 'signup' : 'login'}`}>{`${method === 'login' ? 'Create a new user' : 'Log in with existing user'}`}</Link>
      </div>
    </form>
  );
}

export default AuthForm;
