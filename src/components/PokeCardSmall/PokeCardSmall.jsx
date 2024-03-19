import { useEffect, useState } from "react";
import "./PokeCardSmall.css";

const PokeCardSmall = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=1025`)
      .then((res) => res.json())
      .then((pokemonData) => setPokemon(pokemonData))
      .catch((error) => console.error("Fehler im Fetch All Pokemon", error));
  }, []);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur/`)
      .then((res) => res.json())
      .then((pokemonDetailsData) => setPokemonDetails(pokemonDetailsData))
      .catch((error) => console.error("Fehler im Fetch PokemonDetails", error));
  }, []);

  console.log(pokemon);

  return (
    <section className="render-pokemon">
      {pokemon ? (
        <div className="poke-card">
          <img
            src={
              pokemon.sprites.other.dream_world.front_default != null
                ? pokemon.sprites.other.dream_world.front_default
                : pokemon.sprites.other.home.front_default
            }
            alt=""
          />
          <div>
            <p>
              #
              {pokemon.id < 10
                ? "00" + pokemon.id
                : pokemon.id < 100 && pokemon.id > 9
                ? "0" + pokemon.id
                : pokemon.id}
            </p>
            <h3>{pokemon.name}</h3>
          </div>
        </div>
      ) : (
        <p>loading....</p>
      )}
    </section>
  );
};

export default PokeCardSmall;
