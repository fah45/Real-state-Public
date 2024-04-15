import { Link } from "react-router-dom";


const EstateCard = ({card}) => {

    console.log(card)
    const { estate_title, id, segment_name, description, price, status, area, location, facilities, image, view_property_button } = card
    // console.log(card)
    return (
        <div>
            <div className="card card-compact  transition border-2  hover:scale-100 md:hover:scale-105 lg:hover:scale-105 border-opacity-30 border-green-500 hover:border-green-700  group hover:no-underline focus:no-underline bg-base-100 shadow-xl">
                <figure className=" pt-3">
                    <img src={image} alt="Shoes" className="rounded-xl w-[350px] h-[180px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{estate_title}</h2>

                    <p><span className='font-bold'>Area: </span>{area}</p>

                    <p><span className='font-bold'>Status: </span>{status}</p>
                    <p><span className='font-bold'>Price:</span>{price}</p>

                    <div className="card-actions">
                        <Link to={`/estate/${id}`} className="btn text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><button>View Property</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};


export default EstateCard;