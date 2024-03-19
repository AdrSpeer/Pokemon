import { useEffect, useState } from "react";
import "./Filter.css";
import PokemonItem from "../../components/PokemonItem/PokemonItem";

const Filter = () => {
  const [filterData, setFilterData] = useState([]);
  const [selectedTypeData, setSelectedTypeData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/`)
      .then((res) => res.json())
      .then((data) => setFilterData(data.results))
      .catch((err) => console.log("Fehler beim Laden der API", err));
  }, []);

  const filterIt = (name) => {
    fetch(`https://pokeapi.co/api/v2/type/${name}/`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedTypeData(data);
      })
      .catch((err) => console.log("Fehler beim Laden der API", err));
    setSelectedTypeData(null);
  };

  return (
    <>
      <section className="filter">
        <div className="filter-box">
          {filterData ? (
            filterData?.map((item, index) => (
              <button
                onClick={() => filterIt(item.name)}
                className={item.name}
                key={index}
              >
                {item.name}
              </button>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className="filter-pokemon">
          {selectedTypeData?.pokemon ? (
            selectedTypeData?.pokemon?.map((pokemon, index) => (
              <PokemonItem pokemon={pokemon} key={index} />
            ))
          ) : (
            <p></p>
          )}
        </div>
      </section>
    </>
  );
};

export default Filter;
