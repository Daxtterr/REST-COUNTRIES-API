import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import back from "../images/back.png";

const InformationPage = () => {
  const [country, SetCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { name } = useParams();

  async function getCountry() {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      if (!response.ok) throw new Error("Something went wrong !");
      const results = await response.json();
      SetCountry(results);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  }
  useEffect(() => {
    getCountry();
  });

  return (
    <div className="w-10/12 mx-auto mt-10 h-screen">
      <Link to="/">
        <div className="text-center cursor-pointer bg-white shadow-md w-28 py-2 px-3 rounded-md dark:bg-slate-800 md:w-2/12 lg:w-1/12 ">
          <span className="dark:text-white ">Back</span>
        </div>
      </Link>
      {isLoading && !error && (
        <h4 className="font-bold mt-8 dark:text-white">Loading ...</h4>
      )}
      {error && !isLoading && { error }}

      {country?.map((country) => (
        <>
          <img
            className="h-20 mx-auto mt-8 md:mt-0"
            src={country.coatOfArms.png}
          />
          <div className="flex flex-col md:flex-row md:space-x-32 items-center mt-10">
            <img
              className="h-60 w-11/12 md:w-5/12 lg:w-4/12"
              src={country.flags.png}
            />

            <div className="flex flex-col space-y-2 w-11/12 md:w-auto">
              <span className="font-bold text-3xl pb-6 pt-8 md:pt-0 dark:text-white">
                {country.name.official}
              </span>
              <span className=" dark:text-white">
                <b>Region</b>:{country.region}
              </span>
              <span className=" dark:text-white">
                <b>Population</b>:
                {new Intl.NumberFormat().format(country.population)}
              </span>
              <span className=" dark:text-white">
                <b>Sub-region</b>:{country.subregion}
              </span>
              <span className=" dark:text-white">
                <b>Capital</b>:{country.capital}
              </span>
              <span className=" dark:text-white">
                <b>Time Zone</b>:{country.timezones}
              </span>
            </div>
          </div>

          {/*<div className="mt-8">
            <span className=" dark:text-white">
              <b>Border Countries:</b>
              {country.borders.map((border) => {
                return (
                  <ul className="inline-flex mx-1 my-1">
                    <li className="bg-gray-300 rounded-md px-2 dark:text-white dark:bg-slate-800">
                      {border}
                    </li>
                  </ul>
                );
              })}
            </span>
            </div>*/}
        </>
      ))}
    </div>
  );
};

export default InformationPage;
