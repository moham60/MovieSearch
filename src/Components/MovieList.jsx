/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";
import cimaImge from "../assets/Images/movie.png"
import Loader from "./Loader";
export default function MovieList({movieList,isLoading,isError}) {
  return (
    <div className="py-15">
      <div className="grid items-center  md:grid-cols-3 lg:grid-cols-5 gap-4">
        {movieList && !isLoading&&!isError&&
          movieList.map((movie) => (
            <MovieCard key={movie.imdbID} cardInfo={movie} />
          ))}
      </div>
      {movieList == null &&!isLoading&& !isError&& (
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-white text-3xl sm:text-6xl">No Movie Found</h3>
          <img src={cimaImge} className="w-35 mx-auto block" alt="cimaImge" />
        </div>
      )}
      {isError && <p className="text-red-600 text-center text-2xl">{isError}</p>}
      {isLoading&&<Loader/>}
    </div>
  );
}
