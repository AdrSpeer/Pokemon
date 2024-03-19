import "../Searchbar/Searchbar.css";
import "./SearchbarDetail.css";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/Context";
import BackArrow from "../BackArrow/BackArrow";
import DarkLight from "../../assets/svg/DarkLight";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const { searchElement, setSearchElement } = useContext(SearchContext);
  const [pokemons, setPokemons] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1025")
      .then((res) => res.json())
      .then((data) => setPokemons(data))
      .catch((error) => console.log("Fetch Pokemons", error));
  }, []);

  return (
    <>
      <div className="searchbar">
        <BackArrow />
        <div>
          <input className={searchElement.length > 0 ? "input-show" : "input-hide"} type="text" onChange={(event) => setSearchElement(event.target.value)} value={searchElement} placeholder="Search Pokemon" />
          {pokemons ? (
            <div className={searchElement.length > 0 ? "suggestions show" : "suggestions"}>
              {searchElement.length > 0
                ? pokemons.results.map((pokemon, index) =>
                    pokemon.name.toLocaleLowerCase().includes(searchElement.toLocaleLowerCase()) ? (
                      <Link to={`/details/${pokemon.name}`} key={index}>
                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                      </Link>
                    ) : (
                      ""
                    )
                  )
                : "nein"}
            </div>
          ) : (
            ""
          )}
        </div>
        <DarkLight />
      </div>
    </>
  );
};

export default Searchbar;
