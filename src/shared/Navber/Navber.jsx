import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/Authprovider";

const Navber = () => {
    const {user,LogOut }= useContext(AuthContext)
    const navigate = useNavigate()
    
        const logouthandelar = ()=>{
           
            LogOut()
            .then(result =>{
                console.log(result.user)
                navigate('/')
            })
            .catch(error=>{
                console.log(error)
            })
        }

    const Navlink = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/About'}>About</NavLink></li>
        {/* <li><NavLink to={'/Register'}>Register</NavLink></li>
        <li><NavLink to={'/Login'}>Login</NavLink></li> */}
        <li><NavLink to={'/FAQ'}>FAQ</NavLink></li>
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
                <img src={user?.photoURL}/>
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