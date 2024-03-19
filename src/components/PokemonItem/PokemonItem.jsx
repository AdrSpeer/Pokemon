import { useEffect, useState } from "react";

const PokemonItem = ({ pokemon }) => {
  console.log(pokemon);
  const [renderData, setRenderData] = useState("");
  useEffect(() => {
    fetch(`${pokemon.pokemon.url}`)
      .then((res) => res.json())
      .then((data) => setRenderData(data));
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
    <section>
      <div>
        <p>{renderData?.species?.name}</p>
        <p>#{formatNumber(renderData.id)}</p>
      </div>
    </section>
  );
};

export default PokemonItem;
