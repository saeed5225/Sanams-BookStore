import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
export default function Course() {
  return (
    <>
      <div className="md:mt-28 mt-20 mx-auto md:px-20 px-4 max-w-screen-2xl min-h-screen">
        <div className="font-semibold font-serif text-center">
          <h1 className="text-2xl md:text-4xl text-center">
            We are delighted to have you{" "}
            <span className="font-extrabold text-pink-500">:)</span>
          </h1>
          <p className="font-sans max-w-screen-xl mx-auto mt-5 text-justify ">
            Welcome to our Courses Section! Here, you'll find a carefully
            curated selection of courses designed to help you expand your
            knowledge, sharpen your skills, and achieve your goals. Whether
            you're looking to explore a new passion, enhance your career, or
            learn something completely new, we have something for everyone. Dive
            in and start your learning journey today!
          </p>
          <Link to="/">
            <button className="mt-5 btn md:px-7 hover:bg-pink-700 duration-200 btn-secondary">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}
