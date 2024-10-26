import { useContext, } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/Authprovider";
// import auth from "../../Firebase/firebse.config";



const Register = () => {
    const {createUser} = useContext(AuthContext)
    // const [regError, setRegError] = useState()

    const fromHandelar = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        console.log(email, password, name, photoURL)

        if (password.length < 6) {
            console.log('Please Password must be six characters long ')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            console.log('Please provide Capital character')
            return
        }


        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>
            {console.error(error)}
        )
        // createUserWithEmailAndPassword(auth, email, password)

        //     .then(result => {
        //         console.log(result.user)
        //         console.log('user create successfully')
                

        //     })
        //     .catch(error => {
        //         console.log(error)
        //         // setregistererror(error.message)
        //     }
        //     )


    }
    return (
        <div className="  min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={fromHandelar} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                placeholder="Enter your name"
                                name="name"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input placeholder="Photo Url"
                                type="url"
                                name="photoURL"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Enter your email"
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
                        <label className="label">
                            <p className="text-green-500">
                                <input type="checkbox" name="remember me" id="" />
                                <span className="ms-3 font-bold">
                                    I agree with{" "}
                                    <span className="underline underline-offset-2">
                                        Terms & Conditions
                                    </span>
                                </span>
                            </p>
                        </label>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {
                            <p>You have a already account ? <Link className="font-medium text-green-700" to={'/Login'}>Login</Link></p>
                        }
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;