

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full object-cover">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/FgZjFYJ/modern-residential-district-with-green-roof-balcony-generated-by-ai.jpg" className="object-cover rounded-3xl w-full mb-4 h-[550px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/C5Rm04F/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf.jpg" className="object-cover rounded-3xl w-full mb-4 h-[550px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/xCn3sBf/house-isolated-field.jpg" className="object-cover rounded-3xl w-full mb-4 h-[550px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;