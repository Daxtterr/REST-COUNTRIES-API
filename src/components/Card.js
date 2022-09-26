import { Link } from "react-router-dom";
const Card = ({ name, population, region, capital, flags }) => {
  return (
    <div className="w-5/6 md:w-full bg-white mt-10 rounded-md dark:bg-slate-800 ">
      <div className="">
        <img className="rounded-t-md h-40 w-full object-cover" src={flags.png} />
      </div>
      <div className="flex flex-col p-4 space-y-1">
        <span className="font-bold text-lg py-2 tracking-wide dark:text-white">
          {name}
        </span>
        <span className="text-sm  dark:text-white">
          <span className="font-semibold ">Population</span>:{new Intl.NumberFormat().format(population)}
        </span>
        <span className="text-sm dark:text-white">
          <span className="font-semibold">Region</span>:{region}
        </span>
        <span className="text-sm dark:text-white">
          <span className="font-semibold">Capital</span>:{capital}
        </span>
        <Link
          className="text-xs underline text-blue-700 font-semibold"
          to={`/countries/${name}`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Card;
