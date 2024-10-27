import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";

import PorpartyCard from "../PorpartyCard/PorpartyCard";
import { Helmet } from "react-helmet";
import PorpertySale from "../PorpertySale/PorpertySale";
// import Estate from "../Estate/Estate";


const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Helmet><title>Rx_Property | Home</title></Helmet>
            <Banner></Banner>

            {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5  */}
            {/* <Estate></Estate> */}
            <div className=" mx-auto">
                <h1
                    data-aos="fade-up-right"
                    className="my-8 text-2xl font-bold text-center text-basicColor"
                >
                    Confirm Your Order which is preferred
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5 p-2 lg:pl-12 ">
                    {
                        data.map((adata) => <PorpartyCard key={adata.id} data={adata} ></PorpartyCard>)
                    }
                </div>
                <h1
                    data-aos="fade-up-right"
                    className="my-8 text-2xl font-bold text-center text-basicColor"
                >
                    On OF The Most Porpertys
                </h1>
                {
                    data.map((aadata) => <PorpertySale key={aadata.id} daata={aadata}></PorpertySale>)
                }

            </div>
            {/* <PorpertySale></PorpertySale>         */}
        </div>
    );
};

export default Home;