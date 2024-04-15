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
    const { estate_title, segment_name, description, price, status, area, location, facilities, image, view_property_button } = estateCard

    return (
        <div>
            <h1>Hello Mammah! Ami Details {id}</h1>
            
            <img src={image} className="object-cover object-center rounded-3xl w-full mb-4 h-[300px]" />
            <p>{estate_title}</p>
            <p>{description}</p>
        </div>
    );
};

export default EstateDetails;