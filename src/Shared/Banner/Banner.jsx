
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='w-[95%] mx-auto'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <img src="https://i.ibb.co/4R2kss4/pexels-vecislavas-popa-1643383.jpg" className="object-cover object-center rounded-3xl w-full mb-4 h-[300px]" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://i.ibb.co/C5Rm04F/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf.jpg" className="object-cover object-center rounded-3xl w-full mb-4 h-[300px]" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://i.ibb.co/D7Ztt2v/pexels-atbo-245208.jpg" className="object-cover object-center rounded-3xl w-full mb-4 h-[300px]" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;

