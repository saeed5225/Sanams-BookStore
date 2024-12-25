import React from "react";
import banner from "../../public/banner.jpg";
import { useSelector } from "react-redux";
export default function Banner() {
  const currentUser = useSelector((state) => state.user.currenUser);
  return (
    <>
      <div className="max-w-screen-2xl mx-auto md:px-20 px-4 flex md:flex-row flex-col gap-2">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-5 md:mt-32">
          <div className="space-y-12">
            <h1 className="font-bold text-3xl ">
              <span className="text-pink-500">Sanams, </span>
              <span className="">your haven for book lovers!</span>
              <p className="font-semibold text-xl font-serif mt-2">
                Discover world of inspirations - one page at a time.
              </p>
            </h1>

            <p className="text-justify font-sans md:font-semibold md:text-lg">
              Our website is your gateway to a diverse collection of books
              spanning genres like fiction, non-fiction, fantasy, mystery, and
              more. Whether you're a passionate reader, a curious learner, or
              someone searching for the perfect gift, you'll find carefully
              curated titles that inspire, educate, and entertain.
            </p>
          </div>
          {!currentUser && (
            <div className="mt-8 space-y-3">
              <input
                type="text"
                className=" border shadow-md text-black w-full px-3 py-2 outline-none rounded-md focus:ring-1 focus:ring-pink-500"
                placeholder="Enter your Email to login"
              />
              <button className="btn btn-secondary">Login</button>
            </div>
          )}
        </div>

        <div className="order-1 md:order-2 w-full md:w-1/2">
          <img src={banner} className="w-92 h-92"></img>
        </div>
      </div>
    </>
  );
}
