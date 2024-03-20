import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PokemonItem.css";

const PokemonItem = ({ pokemon }) => {
  console.log(pokemon);
  const [renderData, setRenderData] = useState("");
  useEffect(() => {
    fetch(`${pokemon.pokemon.url}`)
      .then((res) => res.json())
      .then((data) => setRenderData(data))
      .catch((err) => console.log("Fehler beim Laden der API", err));
  }, []);
  console.log(renderData);

  const formatNumber = (number) => {
    if (number < 10) {
      return `00${number}`;
    } else if (number < 100) {
      return `0${number}`;
    } else {
      return number;
    }
  };

  return (
    <Link to={`/details/${renderData?.species?.name}`}>
      <div className="render-pokemon">
        <div className="poke-card">
          <img
            src={renderData?.sprites?.other[`official-artwork`]?.front_default}
            alt={renderData?.species?.name}
          />
          <div className="poke-name">
            <p>#{formatNumber(renderData.id)}</p>
            <p>{renderData?.species?.name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokemonItem;
