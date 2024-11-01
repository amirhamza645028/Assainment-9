import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/Authprovider";

const Navber = () => {
    const { user, LogOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const logouthandelar = () => {

        LogOut()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const Navlink = <>
        <li><NavLink to={'/'}>Home</NavLink></li>

        <li onClick={() => document.getElementById('my_modal_4').showModal()}  >
            <button >About</button>
            <dialog id="my_modal_4" className="modal">
                <div className=" text-center modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-5xl text-gray-950">Hello <br /> Dear User!</h3>
                    <p className=" font-bold py-4 text-gray-950 text-3xl">This feature <span className="underline text-red-400 "><Link to={'/About'}>About</Link></span> has not been added yet, it will be added very soon and you will see it then</p>
                    <div className="modal-action">
                        <form method="dialog">
                           
                            <button className="btn">Okay</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </li>
        <li><NavLink to={'/FAQ'}>FAQ</NavLink></li>
        {user ? (
          <>
            <li>
              <NavLink to={'/profile'}>Profile</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>
                Contact
              </NavLink>
            </li>
          </>
        ) : (
          ""
        )}
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                        {Navlink}
                    </ul>
                </div>
                <a className="btn font-bold text-gray-950 btn-ghost text-xl">Rx<span className="text-red-700 font-bold">_</span>Property</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Navlink}
                </ul>
            </div>

            <div className="navbar-end">

                <div>
                    {user ? (
                        <>

                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <a>{user?.displayName}</a>
                                    </li>
                                    <li>
                                        <a>
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a>My Order</a>
                                    </li>
                                    <li>
                                        <a >Log out</a>
                                    </li>
                                </ul>
                            </div>

                        </>
                    ) : ("")}
                </div>
                {/* </label> */}
                {user ? (
                    <button
                        onClick={logouthandelar}
                        className="btn btn-outline border-none btn-error lg:text-xl capitalize lg:ms-2 text-white hover:bg-basicColor"
                    >
                        Log out
                    </button>
                ) : (
                    <>
                        <Link
                            to={"/login"}
                            className="btn btn-outline btn-primary  border-none lg:text-lg capitalize lg:ms-1 text-white bg-basicColor"
                        >
                            Log in
                        </Link>
                        <Link
                            to={"/register"}
                            className="btn btn-outline btn-accent border-none lg:text-lg capitalize text-white hover:bg-basicColor"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navber;