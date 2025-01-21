import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
  const settings = {
    dots: true,
    arrows: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <section className="relative overflow-hidden h-screen">
      <Slider {...settings}>
        <div className="relative h-screen">
          <div className="absolute pointer-events-none -z-10 w-full h-full">
            <img
              src="../../assets/images/slider-1.jpg"
              className="max-w-none object-cover w-full h-full"
              priority="true"
              alt="Hero"
            />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center">
            <div className="max-w-xl mx-auto md:max-w-[640px] md:mx-0 text-center md:text-left">
              <h1
                className="h1 font-uncut-sans mb-6 text-primary"
                data-aos="zoom-out"
                data-aos-delay="100">
                Welcome to <em className="font-italic">MedifyCare</em>
              </h1>
              <p
                className="text-xl text-grayDark mb-10"
                data-aos="zoom-out"
                data-aos-delay="200">
                Where your well-being is our top priority.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                data-aos="zoom-out"
                data-aos-delay="300">
                <div>
                  <a
                    className="btn text-white bg-secondaryDark hover:bg-secondary group" href="/consult">
                    Get Started{" "}
                    <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-screen">
          <div className="absolute pointer-events-none -z-10 w-full h-full">
            <img
              src="../../assets/images/slider-2.jpg"
              className="max-w-none object-cover w-full h-full"
              priority="true"
              alt="Hero"
            />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center">
            <div className="max-w-xl mx-auto md:max-w-[640px] md:mx-0 text-center md:text-left">
              <h1
                className="h1 font-uncut-sans mb-6 text-primary"
                data-aos="zoom-out"
                data-aos-delay="100">
                Your Health, Our Mission
              </h1>
              <p
                className="text-xl text-grayDark mb-10"
                data-aos="zoom-out"
                data-aos-delay="200">
                Dedicated to providing the best healthcare services.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                data-aos="zoom-out"
                data-aos-delay="300">
                <div>
                  <a
                    className="btn text-white bg-secondaryDark hover:bg-secondary group" href="/services">
                    Learn More{" "}
                    <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}