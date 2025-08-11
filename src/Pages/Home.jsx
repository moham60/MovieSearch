import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import MovieList from "../Components/MovieList";

export default function Home() {
  const [Title, setTitle] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [movieList, setmovieList] = useState(null);
  const [error, seterror] = useState("");
  const fetchData = (title) => {
    setisLoading(true);
      axios
        .get(`https://www.omdbapi.com/?s=${title}&apikey=287df63`)
        .then((res) => {
          console.log(res);
          setmovieList(res.data.Search);
          localStorage.setItem("title", title);
          setTimeout(() => {
            setisLoading(false)
          }, 2500);
        })
        .catch((error) => {
          console.log(error);
           seterror(error.message || "Something went wrong");
           setTimeout(() => {
             setisLoading(false);
           }, 2500);
        });
    };
  useEffect(() => {
  
    if (Title!== "") {
        fetchData(Title);
    }
    
  }, [Title]);
  useEffect(() => {
    const title = localStorage.getItem("title");
    if (title) {
      fetchData(title);
      setTitle(title)
    }
  },[])
  return (
    <section className="Home px-2 py-10  min-h-screen">
      <h1 className="text-white text-center sm:text-2xl mb-2">Movie Search App</h1>
      <div className="search ">
        <SearchBar setTitle={setTitle} Title={Title} />
      </div>
      <div className="movieList p-4 mt-4">
        <MovieList movieList={movieList} isLoading={isLoading} isError={error} />
      </div>
    </section>
  );
}
