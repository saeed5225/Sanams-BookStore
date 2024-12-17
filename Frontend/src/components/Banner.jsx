import React from "react";
import banner from "../../public/banner.jpg";
export default function Banner() {
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

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Enter your Email to login"
              />
            </label>
          </div>
          <button className="mt-3 btn btn-secondary">Login</button>
        </div>

        <div className="order-1 md:order-2 w-full md:w-1/2">
          <img src={banner} className="w-92 h-92"></img>
        </div>
      </div>
    </>
  );
}
