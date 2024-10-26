import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider'
import { BsGoogle } from 'react-icons/bs'

const Login = () => {
  const { signIn, signInWithGoogle  , loading} = useContext(AuthContext)
  const [error, setError] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'

  const handleEmailLogin = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    try {
      await signIn(email, password)
      navigate(from, { replace: true })
    } catch (err) {
      setError('Invalid email or password')
      console.error(err)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle()
      navigate(from, { replace: true })
    } catch (err) {
      setError('Google sign-in failed')
      console.error(err)
    }
  }
  if(loading){
    return <div>loadin..</div>
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-6 space-y-4 bg-white shadow-md rounded">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4">
            Login
          </button>
        </form>

        <div className="divider my-6">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full flex items-center justify-center space-x-2"
        >
          <BsGoogle className="text-xl" />
          <span>Login with Google</span>
        </button>

        <p className="text-center mt-4">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
