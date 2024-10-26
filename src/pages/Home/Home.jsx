import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cart from "../Cart/Cart";
import PorpartyCard from "../PorpartyCard/PorpartyCard";
// import Estate from "../Estate/Estate";


const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Cart></Cart>
            {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5  */}
            {/* <Estate></Estate> */}
            <h3>thiw is heaede {data.lenght}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5 pl-12 ">
                {
                    data.map((adata) => <PorpartyCard key={adata.id} data={adata} ></PorpartyCard>)
                }
            </div>


        </div>
    );
};

export default Home;