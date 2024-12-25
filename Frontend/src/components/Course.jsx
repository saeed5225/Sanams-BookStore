import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
export default function Course() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:3001/book/auth/", {
          credentials: "include",
        });
        const data = await res.json();
        if (!data.ok) {
          throw new Error(data.Error);
        }
        setList(data.book);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white ">
        <div className="md:pt-28 pt-20 mx-auto md:px-20 px-4 max-w-screen-2xl min-h-screen">
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
              learn something completely new, we have something for everyone.
              Dive in and start your learning journey today!
            </p>
            <Link to="/">
              <button className="mt-5 btn md:px-7 hover:bg-pink-700 duration-200 btn-secondary">
                Back
              </button>
            </Link>
          </div>
          {loading ? (
            <h1 className="mt-20 text-center text-3xl font-serif font-extrabold">
              Loading...
            </h1>
          ) : (
            <div className="mt-10 grid grid-cols-1 md:grid-cols-4">
              {list.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
