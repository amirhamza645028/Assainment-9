import { useContext } from "react";
import { Helmet } from "react-helmet";
import { FcBusinessman } from "react-icons/fc";
import { AuthContext } from "../../provider/Authprovider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Profile = () => {
    const {user,updateUserProfile} = useContext(AuthContext)
    const navigate=useNavigate()
  
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name=form.name.value;
    const imageURL=form.imagelink.value;
    console.log(name.imageURL)
    handleUpdateUser(name, imageURL);
    navigate(0)
  };

  const handleUpdateUser = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    updateUserProfile(profile)
      .then(() => {
        
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Account is Updated",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error

        )
      });
  };




    return (
        <div className="w-10/12 border rounded-lg mx-auto grid grid-cols-1 gap-20 lg:gap-2 lg:grid-cols-2 my-10 p-10">
          <Helmet>
            <title>Gpropety | Profile Page</title>
          </Helmet>
    
          <div className="w-full">
            {user?.photoURL ? (
              <img className=" w-96 lg:h-96 rounded-full" src={user.photoURL} alt="" />
            ) : (
              <FcBusinessman style={{ fontSize: "400px" }} />
            )}
          </div>
          <div>
            <form onSubmit={handleUpdate}>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  defaultValue={user?.email}
                  readOnly
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="address"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Address
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="url"
                  name="imagelink"
                  id="photo"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  defaultValue={user?.photoURL}
                  required
                />
                <label
                  htmlFor="photo"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Photo URL
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    defaultValue={user?.displayName}
                    required
                  />
                  <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                </div>
               
                
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="tel"
                    name="floating_phone"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_phone"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number (123-456-7890)
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_company"
                    id="floating_company"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_company"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Company (Ex. Google)
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-basicColor hover:bg-green-900 text-white py-2 rounded-lg"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      );
};

export default Profile;