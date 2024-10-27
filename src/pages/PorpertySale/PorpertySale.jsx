import PropTypes from 'prop-types';
import cover1 from '../../assets/home-cover-1.jpg'
import cover2 from '../../assets/home-cover-2.jpg'
import toast, { Toaster } from 'react-hot-toast';
// import { useState } from 'react';
// import cover3 from '../../assets/home-cover-3.jpg'
// import cover4 from '../../assets/home-cover-4.jpg'

const PorpertySale = ({ daata }) => {
    const { proparty_title,proparty_description } = daata
    // const [showcard, setShowcard] = useState(false)
    // const allcard = ["card 1", "card 2", "card 3", "card 4", "card 5", "card 6", "card 7", "card 8", "card 9", "card 10", "card 11", "card 12", "card 13", "card 14", "card 15", "card 16", "card 17", "card 18", "card 19",]
    // const visibblecards = showcard ? allcard : allcard.slice(0, 3)
    // const handelseemorebtn = () => {
    //     setShowcard(true)
    // }

const salehandel = () =>{
    toast.error('This porperty allready sale')
}


    return (
        <div>
             <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="w-11/12 my-10 mx-auto">

                <div className="rounded-xl hero  bg-stone-950">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src={cover1}
                            className=" rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl text-white font-bold">{proparty_title}</h1>
                            <p className="py-6 text-white">{proparty_description}
                            </p>
                            <button onClick={salehandel} className="btn btn-error btn-outline">See this</button>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl hero  bg-stone-950 mt-4">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            src={cover2}
                            className=" rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl text-yellow-50 font-bold">{proparty_title}</h1>
                            <p className="py-6 text-white">{proparty_description}
                            </p>
                            <button onClick={salehandel} className="btn btn-error btn-outline">see this</button>
                        </div>
                    </div>
                </div>

            </div>
            {/* {
                !showcard && <button onClick={handelseemorebtn}>see more</button>
            } */}
        </div>
    );
};

export default PorpertySale;
PorpertySale.propTypes = {
    daata: PropTypes.node
}