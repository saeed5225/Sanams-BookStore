import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="card bg-base-100 dark:bg-slate-900 dark:border w-92 p-3 shadow-xl m-2 hover:scale-105 transition-all duration-200 cursor-pointer">
        <figure className="h-[400px]">
          <img
            src={item.image}
            alt="Book"
            className="h-full" // Ensures the image scales properly
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="px-2 py-1 w-12 text-center rounded-lg border-[2px]">
              {item.price}
            </div>
            <div className="px-2 py-1 rounded-lg border-[2px] hover:bg-pink-500 hover:text-white cursor-pointer">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
