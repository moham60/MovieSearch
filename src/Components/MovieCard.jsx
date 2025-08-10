/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


export default function MovieCard({ cardInfo }) {
  

  return (
    <Link
      to={`/movie/${cardInfo.imdbID}`}
      className="bg-gray-950 text-white cursor-pointer  rounded shadow-2xl p-3  hover:bg-gray-800 hover:scale-[1.08] group transition-transform duration-500">
      <img
        src={cardInfo.Poster}
        className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[355px] object-cover object-center rounded"
        alt=""
      />
      <h2 className="my-4 text-gray-100 group-hover:text-amber-300 transition-colors">
        {cardInfo.Title.split(" ", 2)}
      </h2>
      <div className="flex  justify-end ">
        <p className="text-white">
          {" "}
          year : <span className="text-amber-300">{cardInfo.Year}</span>
        </p>
      </div>
      
    </Link>
  );
}
