import { useLoaderData, useParams } from "react-router-dom";
import { toast, Toaster} from "react-hot-toast";
const Carddetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    console.log(data);
    const dataIdNumber = parseInt(id);

    const useData = data && Array.isArray(data) ? data.find((info) => info.id === dataIdNumber) : null;

    // if(!useData){
    //     return <div className="justify-center">
    //         <h3 className="text-basicColor font-bold">DataLoading...</h3>
    //         <span className="loading loading-spinner loading-lg"></span>
    //         </div>
    // }
    const { proparty_title, proparty_name, proparty_description, price, status, porparty_location, porparty_area, img} = useData || {};

    const tostHandelar = () => {

        toast.success(' The item added in the card Successfully ')
    }

    return (
        <div className="">
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="mx-auto my-2 pb-20 lg:px-5 md:px-0 col-span-5">
                <div className="card space-y-3">
                    <figure className="w-full h-84 rounded-lg ">
                        <img
                            className="w-full h-84 rounded-lg "
                            src={img}
                            alt="porparty"
                        />
                    </figure>
                    <div className="flex gap-2 text-sm justify-end">
                        <h1 className="font-bold">{porparty_location}</h1>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="border p-2 rounded-lg bg-slate-50 my-2 space-y-1 ">
                    <div className="flex justify-between">

                         <h2 className=" text-xl font-bold text-basicColor"> Porparty Title:-{proparty_title}</h2>
                         
                         <h3 className=" text-base font-bold text-basicColor">Porpaty Name:-{proparty_name}</h3>
                        <h1 className="text-basicColor">
                            <span className=" font-bold"> Price : </span> {price}
                        </h1>
                        
                        <h1 className="text-basicColor">
                            <span className=" text-red-500 font-bold"> </span>{id} 
                        </h1>
                    </div>

                    <h1 className="text-basicColor">
                            <span className=" font-bold"> Status : </span> {status}
                        </h1>

                    <h2 className=" text-basicColor">
                        <span className="font-bold ">Area : </span>
                        {porparty_area}
                    </h2>
                    <h3 className=" text-basicColor">
                        <span className="font-bold "> Location :</span>
                        {porparty_location}
                    </h3>
                   
                   
                    
                    <p className=" text-base text-justify text-gray-500">Description{proparty_description}</p>
                
                </div>
                
                <div onClick={tostHandelar} className="card-actions flex  justify-end mt-4">
                    <button className="btn btn-sm btn-success btn-outline hover:bg-basicColor hover:outline-none hover:border-none border-basicColor text-basicColor text-base w-40 h-14 ">
                        Add to Cart
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Carddetails;
