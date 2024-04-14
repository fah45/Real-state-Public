

import Banner from "../../Shared/Banner/Banner";
import PropertyCard from "../../components/PropertyCard";



const Home = () => {
    return (
        <div>
            {/* <Helmet>
                <title>Career hub | home</title>
            </Helmet> */}
            <Banner></Banner>
            <PropertyCard></PropertyCard>
            <h2 className="text-3xl">This is Home</h2>
        </div>
    );
};

export default Home;