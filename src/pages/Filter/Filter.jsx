import { useEffect, useState } from "react";
import "./Filter.css";
import PokemonItem from "../../components/PokemonItem/PokemonItem";
import Header from "../../components/Header/Header";

const Filter = () => {
  const [filterData, setFilterData] = useState([]);
  const [selectedTypeData, setSelectedTypeData] = useState(null);
  const [hidden, setHidden] = useState(true);

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
    setHidden(false);
  };

  return (
    <>
      <section className="filter">
        <div className="filter-header">
          <Header />
          <img onClick={() => setHidden((hidden) => !hidden)} src="../../../public/icons/Burger.svg" alt="Burger Icon" />
        </div>
        <div className={hidden ? "filter-box" : "filter-hidden"}>
          {filterData ? (
            filterData?.map((item, index) => (
              <button onClick={() => filterIt(item.name)} className={item.name} key={index}>
                {item.name}
              </button>
            ))
          ) : (
            <p className="loading"></p>
          )}
        </div>

        <div className="pokemon-list">{selectedTypeData?.pokemon ? selectedTypeData?.pokemon?.map((pokemon) => <PokemonItem pokemon={pokemon} key={pokemon.id} />) : <p className="loading"></p>}</div>
      </section>
    </>
  );
};

export default Filter;
