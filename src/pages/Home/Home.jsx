

import Banner from "../../Shared/Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Footer></Footer>
            <h2 className="text-3xl">This is Home</h2>
        </div>
    );
};

export default Home;