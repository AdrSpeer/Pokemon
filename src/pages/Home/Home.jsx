import Header from "../../components/Header/Header";
import Searchbar from "../../components/Searchbar/Searchbar";
import PokeCardSmall from "../../components/PokeCardSmall/PokeCardSmall";
import "./Home.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [pokemonList, setPokemonList] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=1025`)
      .then((res) => res.json())
      .then((data) => setPokemonList(data))
      .catch((error) => console.error("Fehler im Fetch All Pokemon", error));
  }, []);

  return (
    <>
      <Header />
      <Searchbar />
      {pokemonList?.results.map((item, index) => (
        <div key={index}>
          <PokeCardSmall url={item.url} />
        </div>
      ))}
    </>
  );
};

export default Home;
