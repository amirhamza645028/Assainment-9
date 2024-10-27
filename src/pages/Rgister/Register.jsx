import { useContext, useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/Authprovider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Helmet } from "react-helmet";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import auth from "../../Firebase/firebse.config";
// import auth from "../../Firebase/firebse.config";



const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [registersuccess, setregistersuccess] = useState('')
    const [showPassword, setshowPassword] = useState(false);

    // const [regError, setRegError] = useState()

    const fromHandelar = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        console.log(email, password, name, photoURL)

        if (password.length < 6) {
            setError('Please Password must be six characters long ')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setError('Please provide Capital character')
            return
        }


        createUser(email, password)
            .then((userCdtRsltHiddn) => {
                // console.log(result.user)
                setregistersuccess('user create successfully')
                const user = userCdtRsltHiddn.user;
                if (user) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Account is Created",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    handleUpdateUser(name, photoURL);
                    navigate("/");
                    form.reset();
                }

            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                // ..
            });
        const handleUpdateUser = (name, photo) => {
            const profile = {
                displayName: name,
                photoURL: photo,
            };
            updateUserProfile(profile)
                .then(() => {

                })
                .catch((error) => {
                    console.error(error)
                });
        };


    }
    return (
        <div className="  min-h-screen">
            <Helmet><title>Rx_Property | Register</title></Helmet>
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
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="password"
                                name="password"
                                className="input input-bordered"
                                required
                            />
                            <span
                                onClick={() => setshowPassword(!showPassword)}
                                className=" cursor-pointer absolute right-12 top-2/3 mb-61 text-2xl"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>


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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>

                        </div>
                        {
                            registersuccess &&
                            <p className="text-green-800 font-bold text-2xl">{registersuccess} </p>
                        }
                        {error ? (
                            <>
                                <p className=" text-red-600 text-sm text-center">{error}</p>
                            </>
                        ) : (
                            ""
                        )}
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