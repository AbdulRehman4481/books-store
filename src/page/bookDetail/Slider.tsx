// Slider.tsx
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from "../../assets/images/arrow-right.png";
import { useAppDispatch, useAppSelector } from "../../store/storeHook";
import { fetchThrillerBooks } from "../../store/reducer/BookReducer";
import { Link } from "react-router-dom";

const SliderComponent: React.FC = () => {
  const sliderRef = React.createRef<Slider>();
  const dispatch = useAppDispatch();
  const thrillerBooks = useAppSelector((state) => state.book.thrillerBooks);

  useEffect(() => {
    dispatch(fetchThrillerBooks());
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="w-[250px]   sm:w-[500px] md:w-[800px] lg:w-[1200px] text-center sm:text-start">
      <h1 className="text-white text-3xl  font-bold font-['Hanken Grotesk'] mt-6 ">
        Related Books
      </h1>
      <div className="flex justify-end my-4">
        <button onClick={handleNext} className="focus:outline-none">
          <img
            src={arrow}
            alt="Next"
            className="border-2 border-white p-3 cursor-pointer rounded-full rotate-180 relative    md:top-0 md:right-0 top-96 right-[80px] mx-2 "
          />
        </button>
        <button onClick={handlePrev} className="focus:outline-none ">
          <img
            src={arrow}
            alt="Previous "
            className="border-2 border-white p-3 cursor-pointer rounded-full relative md:bottom-9 md:top-0 md:right-0 top-96 right-[80px]  "
          />
        </button>
      </div>
      <Slider ref={sliderRef} {...settings}  >
        {thrillerBooks.map((book, index) => (
          <div key={index}>
            <Link to={`/book/${book.id}`}>
            <img
            
              src={book.thumbnail}
              alt={`Slide ${index + 1}`}
              className="w-[226px] h-[326px] cursor-pointer rounded-lg"
            />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
