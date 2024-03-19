import './Details.css';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SearchbarDetail from '../../components/SearchbarDetail/SearchbarDetail';

const Details = () => {
  const [currentPokemonData, setCurrentPokemonData] = useState();
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((fetchedData) => {
        setCurrentPokemonData(fetchedData), console.log(currentPokemonData);
      })
      .catch((error) => console.error('Error auf der Details Page', error));
  }, [name]);

  return (
    <>
      <Header />
      <SearchbarDetail />
      {currentPokemonData ? (
        <>
          <h1>{currentPokemonData?.id}</h1>
          <img
            src={
              currentPokemonData.sprites.other['official-artwork'].front_default
            }
            alt='a picture of the Pokemon'
          />
        </>
      ) : (
        console.log('Ich brauche Feierabend')
      )}
    </>
  );
};

export default Details;

// `https://pokeapi.co/api/v2/pokemon/${name}`;
