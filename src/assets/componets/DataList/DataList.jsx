import { Link } from "react-router-dom";


const DataList = ({ captureValue }) => {
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
  return (
    <>
    <hr/>
    <div className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-10 max-lg:gap-1  ">
      {captureValue.map((el) => (
        <div
          className="flex mt-5  py-4  max-lg:px-5 px-4 border-solid border-4   rounded-2xl "
          key={el.id}
        >
          
          <div>
            <p
              className={`text-center border-solid border-2 rounded-2xl border-black mb-2 ${color(el.status)}`}
            >
              {colors(el.status)}
              {el.status}
            </p>
            <Link to={`/Character/${el.name}`}>
              <img className="w-52 mt-3 max-sm:w-70" src={el.image} alt={el.name} />
            </Link>
          </div>
          <div className="mt-8 ml-8  text-l font-sans font-medium">
            <h1>Name: </h1>
            <h2> {el.name}</h2>
            <p> Specie: </p>
            <p> {el.species}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};
export default DataList;
