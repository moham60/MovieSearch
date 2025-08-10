import { FaSearch } from "react-icons/fa";

export default function SearchBar({setTitle,Title}) {
  const handleSearch = (e) => {
    setTitle(e.target.value);
  }
  return (
    <div className="relative   md:w-[70%] lg:w-[65%]  my-4 mx-auto">
      <input
        type="text"
        onChange={handleSearch}
        className="Search border  
  mx-auto block w-full rounded-xl border-gray-800 outline-0 bg-gray-200 text-2xl p-3  focus:border-amber-400 focus:ring-1 focus:ring-amber-300

    "
        placeholder="Search for a movie..."
        value={Title}
      />
      <FaSearch
        className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500"
        size={20}
      />
    </div>
  );
}
