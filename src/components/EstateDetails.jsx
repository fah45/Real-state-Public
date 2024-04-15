import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const EstateDetails = () => {
    const [estateCard, setEstateCard] = useState({})

    const { id } = useParams()
    console.log(id)

    const cards = useLoaderData()
    console.log(cards)

    useEffect(() => {
        if (id && cards) {
            const clickedCard = cards.find(card => card.id === +id)
            console.log(clickedCard)
            setEstateCard(clickedCard)
        }
    }, [id, cards])

    console.log(estateCard)
    const { estate_title, segment, description, price, status, area, location, facilities, image, view_property_button } = estateCard

    return (
        <div className="card-body items-center text-center">
            <h1 className="card-title">Hello This is Id {id}</h1>

            <img src={image} className="object-cover object-center rounded-3xl w-full mb-4 h-[300px]" />
            <p><span className='font-bold'>Estate_title: </span>{estate_title}</p>
            <p><span className='font-bold'>Description: </span>{description}</p>
            <p><span className='font-bold'>Segment: </span>{segment}</p>
            <p><span className='font-bold'>Price: </span>{price}</p>
            <p><span className='font-bold'>Status: </span>{status}</p>
            <p><span className='font-bold'>Area: </span>{area}</p>
            <p><span className='font-bold'>Location: </span>{location}</p>
            <p><span className='font-bold'>Facilities: </span>{facilities}</p>

            <div className="card-actions">
                <Link to="/" className="btn text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><button>Explore More</button></Link>
                <Link to={`/estate/${id}`} className="btn text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><button>Book Now</button></Link>
            </div>
        </div>

    );
};

export default EstateDetails;