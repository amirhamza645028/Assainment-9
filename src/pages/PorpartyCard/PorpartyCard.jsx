import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const PorpartyCard = ({ data }) => {
    const { proparty_title, img, price, id, proparty_name } = data

    return (
        <div className="">
            <div className="  card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{proparty_title}</h2>
                    <h2 className="text-gray-500 text-base flex-grow">{proparty_name}</h2>

                    <h2 className=" font-bold text-white bg-basicColor px-2 rounded-lg" >Price:${price}</h2>
                    <div className="card-actions  justify-end flex   mt-1">
                        <h2 className=" font-bold pr-12  px-2 rounded-lg" >Price:$<span className="text-red-700 font-semibold">{price}</span></h2>
                        <Link to={`/cartDtls/${id}`}>
                            <button className="btn btn-sm btn-outline btn-info capitalize  hover:bg-basicColor hover:outline-none hover:border-none border-basicColor text-basicColor text-base ">
                                {" "}
                                Details Property
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PorpartyCard;
PorpartyCard.propTypes = {
    data: PropTypes.node
}
