  import axios from "axios";
  import { useEffect, useState } from "react";
  import { Link, useParams } from "react-router-dom"
  import { FaArrowLeft } from "react-icons/fa";
  import Loader from "../Components/Loader";

  export default function MovieDetails() {
    const { id} = useParams();
    const [movieDetails, setmovieDetails] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [error, seterror] = useState("");
    
    const getMovieById = (id) => {
      setisLoading(true);
      axios
        .get(`https://www.omdbapi.com/?i=${id}&apikey=287df63`)
        .then((res) => {
          console.log(res);
          setmovieDetails(res.data);
          setTimeout(() => {
            setisLoading(false)
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
          seterror(error.message || "Something went wrong");
          setTimeout(() => {
            setisLoading(false);
          }, 1000);
        });
    }
    useEffect(() => {
      getMovieById(id);
    },[])
    return (
      <div className="px-3 py-2  min-h-screen  details">
        <Link
          to="/"
          className="text-amber-300 shadow-lg shadow-black/40 p-2 hover:bg-gray-800 bg-gray-900 flex items-center justify-center rounded w-fit text-4xl ">
          <FaArrowLeft size={15} />
        </Link>

        <div className="title text-center ">
          <h1 className="text-white sm:text-2xl mb-2 font-bold  ">
            Details Movie Page
          </h1>
        </div>
        {movieDetails && !isLoading && (
          <div className=" flex flex-col my-4  sm:flex-row  items-center lg:items-start ">
            <div className="Poster w-full md:w-[40%] p-4">
              <img
                src={movieDetails.Poster}
                className="w-full h-auto sm:h-[300px] md:h-[480px] object-cover object-center rounded"
                alt={movieDetails.Title || "Movie Poster"}
                loading="lazy"
              />
            </div>
            <div className="info w-full  md:w-[85%]  mt-10 text-white">
              <h2 className="text-xl md:text-2xl font-semibold">
                Title :{" "}
                <span className="text-amber-300">{movieDetails.Title}.</span>
              </h2>
              <p className=" my-2">
                Description :{" "}
                <span className="text-amber-300">{movieDetails.Plot}</span>
              </p>
              <p className="my-2">
                Writer :{" "}
                <span className="text-amber-300">{movieDetails.Writer}.</span>
              </p>
              <p className="my-2">
                Actors :{" "}
                <span className="text-amber-300">{movieDetails.Actors}.</span>
              </p>
              <p className="my-2">
                Awards :{" "}
                <span className="text-amber-300">{movieDetails.Awards}.</span>
              </p>
              <p className="my-2">
                Genre :{" "}
                <span className="text-amber-300">{movieDetails.Genre}.</span>
              </p>
              <span className="block">
                imdbRating :{" "}
                <span className="text-amber-300 ">
                  {movieDetails.imdbRating}
                </span>
              </span>
              <a
                href={`https://www.imdb.com/title/${movieDetails.imdbID}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-amber-500 hover:bg-amber-600 text-black font-semibold px-4 py-2 rounded transition duration-200">
                🎬 View on IMDb
              </a>
            </div>
          </div>
        )}
        {isLoading && (
          <div className="h-[400px] flex items-center justify-center">
            <Loader />
          </div>
        )}
        {error && <p className="text-red-600 text-center text-2xl">{error}</p>}
      </div>
    );
  }
