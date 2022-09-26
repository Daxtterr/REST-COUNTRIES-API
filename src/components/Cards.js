import arrow from "../images/expandarrow.png";
import Card from "./Card";
import { useEffect, useState } from "react";
const COUNTRIES = "https://restcountries.com/v2/all";

const Cards = () => {
  const [countriess, SetCountriess] = useState([]);
  const [Search, SetSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getCountries = async () => {
    try {
      const response = await fetch(COUNTRIES);
      if (!response.ok) throw new Error("Somethung went wrong !");
      const results = await response.json();
      SetCountriess(results);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    getCountries();
  });

  const handleSearch = (e) => {
    SetSearch(e.target.value);
  };

  const newFilter = countriess.filter((country) => {
    return country.name.toLowerCase().includes(Search.toLowerCase());
  });

  const Dropdownn = () => {
    const dropdownTab = document.getElementById("dropdown");
    dropdownTab.classList.toggle("hidden");
  };
  return (
    <div className="relative w-10/12 mx-auto my-8 pb-10">
      {/**Search bar */}
      <div className=" space-y-6 md:space-y-0 md:flex md:justify-between md:items-center ">
        <input
          type="text"
          placeholder="Search for a country"
          className=" w-full p-3 rounded-md text-sm outline-none dark:bg-slate-800 dark:text-white md:w-5/12 "
          onChange={handleSearch}
        />
        {/**Filter dropdown */}
        <div
          id="Fiilter"
          className="flex justify-between items-center cursor-pointer bg-white w-40 p-2 rounded-md dark:bg-slate-800"
          onClick={Dropdownn}
        >
          <span className="text-sm dark:text-white">Filter by region</span>
          <img src={arrow} />
        </div>
      </div>
      {isLoading && !error && (
        <div className="h-screen"><h4 className="font-bold mt-8 dark:text-white">Loading ...</h4></div>
      )}
      {error && !isLoading && { error }}
      <div
        id="dropdown"
        className="hidden absolute md:right-0 flex flex-col bg-white rounded-md p-3 w-40 shadow-2xl dark:bg-slate-800"
      >
        <span className="dark:text-white">Africa</span>
        <span className="dark:text-white">America</span>
        <span className="dark:text-white">Asia</span>
        <span className="dark:text-white">Europa</span>
        <span className="dark:text-white">Oceania</span>
      </div>
      <div className="place-items-center grid md:gap-y-8 gap-x-14 md:grid-cols-2 lg:grid-cols-4">
        {newFilter.map((country) => (
          <Card key={country.numericCode} {...country} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
