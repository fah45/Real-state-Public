

import Banner from "../../Shared/Banner/Banner";
import EstateCard from "../../components/EstateCard";
import { useLoaderData } from "react-router-dom";





const Home = () => {
    const cards = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    cards.map(card => <EstateCard key={card.id} card={card}></EstateCard>)
                }
            </div>



        </div>
    );
};

export default Home;