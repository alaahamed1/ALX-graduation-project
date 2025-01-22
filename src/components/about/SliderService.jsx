import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';

const SliderService = () => {
    const allServices = useSelector((state) => state.services.allSerices.services);

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings}>
            {allServices.map(service => (
                <div key={service.id} className="p-4">
                    <img src={`../../assets/images/${service.image}`} alt={service.name} className="w-full h-64 object-cover" />
                    <h3 className="text-2xl font-bold mt-4">{service.name}</h3>
                    <p className="text-gray-700 mt-2">{service.description}</p>
                </div>
            ))}
        </Slider>
    );
};

export default SliderService;