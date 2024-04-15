import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const EstateDetails = () => {
    const [estateCard,setEstateCard] = useState({})

    const {id} = useParams()
    console.log(id)

    const cards = useLoaderData()
    console.log(cards)

    useEffect(()=>{
      if(id && cards){
        const clickedCard = cards.find(card=>card.id === +id)
        console.log(clickedCard)
        setEstateCard(clickedCard)
      }
    },[id,cards])

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
        </div>
    );
};

export default EstateDetails;