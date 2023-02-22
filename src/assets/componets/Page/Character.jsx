import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as trya from "../ApiData";

const Character = () => {
  let { name } = useParams();
  const [characters, setCharacters] = useState([]);
  const color = (colors) => {
    if (colors === "Alive") {
      return "bg-emerald-500 ";
    } else if (colors === "Dead") {
      return "bg-red-500";
    } else {
      return "bg-stone-500";
    }
  };
  const colors = (colorCircule) => {
    if (colorCircule === "Alive") {
      return "🟢";
    } else if (colorCircule === "Dead") {
      return "🔴";
    } else {
      return "⚫";
    }
  };
  const DataSearch = async (title) => {
    const listValue = await trya.FetchSearch(title);
    setCharacters(listValue.data.results);
  };
  useEffect(() => {
    DataSearch(name);
  }, [name]);

  return (
    <>
      <Link className="font-mono text-2xl" to={"/"}>
      Home
      </Link>
      {characters.map((el) => (
       <div className="flex flex-col items-center justify-center mt-10" key={el.id}>
       <div className="bg-white rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
         <div className="h-48 md:h-64  rounded-t-lg overflow-hidden">
           <img className="object-cover w-full h-full " src={el.image} alt={el.name} />
         </div>
         <div className="p-6">
           <div className="mb-4">
             <h1 className={`text-lg font-medium ${color(el.status)}`}>
               {colors(el.status)} {el.status}
             </h1>
           </div>
           <div className="mb-4">
             <h2 className="text-xl font-bold mb-2">{el.name}</h2>
             <p className=" mb-2">
               Gender: {el.gender}
             </p>
             <p className=" mb-2">
               Specie: {el.species}
             </p>
             <p className=" mb-2">
               Location: {el.location.name}
             </p>
             <p className=" mb-2">
               Origin: {el.origin.name}
             </p>
           </div>
         </div>
       </div>
     </div>
      ))}
    </>
  );
};

export default Character;
