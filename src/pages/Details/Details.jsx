import './Details.css';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SearchbarDetail from '../../components/SearchbarDetail/SearchbarDetail';

const Details = () => {
  const [allData, setAllData] = useState();
  const [wholePokedex, setWholePokedex] = useState();
  const [filteredPokemon, setFilteredPokemon] = useState();
  const [currentPokemonData, setCurrentPokemonData] = useState();
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1025`)
      .then((response) => response.json())
      .then((fetchedData) => setAllData(fetchedData))
      .catch((error) => console.error('Error auf der Details Page', error));
  }, []);

  allData
    ? setWholePokedex(allData.results)
    : console.log(`allData ist ${allData}`);
  console.log(wholePokedex);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur`)
      .then((response) => response.json())
      .then((fetchedData) => setCurrentPokemonData(fetchedData))
      .catch((error) => console.error('Error auf der Details Page', error));
  }, []);

  // useEffect(() => {
  //   const find = wholePokedex.find(
  //     (item) => String(item.name).toLowerCase() === String(name).toLowerCase()
  //   );
  //   setFilteredPokemon(find);
  // }, [wholePokedex]);

  return (
    <>
    <Header />
    <SearchbarDetail/>
      {currentPokemonData ? (<h1>{currentPokemonData?.id}</h1>) : (
      console.log('Ich brauche Feierabend') );}
    </>
  );
};

export default Details;

// `https://pokeapi.co/api/v2/pokemon/${name}`;
