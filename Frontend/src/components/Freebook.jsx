import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

export default function Freebook() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await fetch("http://localhost:3001/book/", {
          credentials: "include",
        });
        const data = await res.json();

        setList(data.book);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);

  const freeBook = list.filter((data) => {
    return data.category === "free";
  });

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl mx-auto md:px-20 px-4 md:mt-4 mt-14">
        <div className="">
          <h1 className="font-bold text-lg">Free Courses</h1>
          <p>
            These books are available freely to the users. You are free to go
            through anytime.
          </p>
        </div>

        <div className="slider-container mt-4 mb-8">
          <Slider {...settings}>
            {freeBook.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
