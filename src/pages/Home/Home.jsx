import Header from "../../components/Header/Header";
import Searchbar from "../../components/Searchbar/Searchbar";
import PokeCardSmall from "../../components/PokeCardSmall/PokeCardSmall";
import "./Home.css";
import { SearchContext } from "../../context/Context";
import { useContext, useEffect, useState } from "react";

const Home = () => {
  const [pokemonList, setPokemonList] = useState();
  const { searchElement, setSearchElement } = useContext(SearchContext);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=1025`)
      .then((res) => res.json())
      .then((data) => setPokemonList(data))
      .catch((error) => console.error("Fehler im Fetch All Pokemon", error));
  }, [searchElement]);

  return (
    <>
      <Header />
      <Searchbar />
      <section className="pokemon-list">
        {searchElement.length > 0
          ? pokemonList?.results.map((pokemon, index) =>
              pokemon.name.toLocaleLowerCase().includes(searchElement.toLocaleLowerCase()) ? (
                <div key={index}>
                  <PokeCardSmall url={pokemon.url} />
                </div>
              ) : (
                ""
              )
            )
          : pokemonList?.results.map((item, index) => (
              <div key={index}>
                <PokeCardSmall url={item.url} />
              </div>
            ))}
      </section>
    </>
  );
};

export default Home;
