import { useEffect, useState } from "react";
import "./PokeCardSmall.css";

const PokeCardSmall = ({ url }) => {
  const [pokemonData, setPokemondata] = useState();

  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => setPokemondata(data))
      .catch((error) => console.error("Fehler im Detail Pokemon Fetch", error));
  }, []);

  console.log(pokemonData);

  return (
    <section className="render-pokemon">
      {pokemonData ? (
        <div className="poke-card">
          <img
            src={pokemonData?.sprites.other["official-artwork"].front_default}
            alt=""
          />
          <div className="poke-name">
            <p>
              #
              {pokemonData.id < 10
                ? "00" + pokemonData.id
                : pokemonData.id < 100 && pokemonData.id
                ? "0" + pokemonData.id
                : pokemonData.id}
            </p>
            <p>{pokemonData?.name}</p>
          </div>
        </div>
      ) : (
        <p>loading....</p>
      )}
    </section>
  );
};

export default PokeCardSmall;
