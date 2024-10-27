import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/Authprovider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/web-extension";
import auth from "../../Firebase/firebase.config";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { Helmet } from "react-helmet";

const Login = () => {
    const { login,
        signInWithGoogl,
        signInwithGithub
         } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
    const goProvider = new GoogleAuthProvider();
    const giprovider = new GithubAuthProvider();
    const fromHandelar = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        login(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.error(error)
            })

    }
    const GoogleLoginhandelar = (e) => {
        e.preventDefault();
        signInWithGoogl(auth, goProvider)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => { console.error(error) }
            )

    }
    // githubhandelar
    const GitLoginhandelar = (e) => {
        e.preventDefault();
        signInwithGithub(auth, giprovider)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => { console.error(error) }
            )
    }
    return (
        <div className="min-h-screen">
            <Helmet><title>Rx_Property | Login</title></Helmet>
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={fromHandelar} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="email"
                                name="email"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="password"
                                name="password"
                                className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {/* login with */}
                        <div className=" flex items-center gap-4 mb-2 px-10">
                            <hr className="w-6/12" />
                            <span className=" font-bold text-basicColor">Or</span>
                            <hr className="w-6/12" />
                        </div>
                        <div className="px-10  items-center mb-5">
                            <p className="font-bold text-stone-950 pb-4 text-center">Continue with</p>
                            <div className="pl-4 gap-6 justify-center">
                                <div className="mb-4">
                                    <button
                                        onClick={GoogleLoginhandelar}
                                        className="btn  btn-sm btn-outline btn-success   capitalize text-base cursor-pointer text-white bg-basicColor hover:bg-green-600"
                                    >

                                        <span>
                                            <BsGoogle />
                                        </span>
                                        Log in With Google
                                    </button>
                                </div>
                                <div>
                                    <button
                                        onClick={GitLoginhandelar}
                                        className="btn  btn-sm cursor-pointer capitalize text-base text-white bg-basicColor btn-outline btn-success hover:bg-green-600"
                                    >

                                        <span>
                                            <BsGithub />
                                        </span>
                                        Log in With GitHub
                                    </button>
                                </div>
                            </div>
                        </div>
                        {
                            <p>You have a account ? <Link className="font-medium text-red-500" to={'/Register'}>Register</Link></p>
                        }
                    </form>


                </div>
            </div>
        </div>
    );
};

export default Login;