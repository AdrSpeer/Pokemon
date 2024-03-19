import '../Searchbar/Searchbar.css';
import './SearchbarDetail.css';
import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../context/Context';
import { ThemeContext } from '../../context/Context';
import BackArrow from '../BackArrow/BackArrow';
import { Link } from 'react-router-dom';

const Searchbar = () => {
  const { searchElement, setSearchElement } = useContext(SearchContext);
  const { setTheme } = useContext(ThemeContext);
  const [pokemons, setPokemons] = useState('');

  const themeToggle = () => {
    setTheme((dark) => !dark);
  };

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1025')
      .then((res) => res.json())
      .then((data) => setPokemons(data))
      .catch((error) => console.log('Fetch Pokemons', error));
  }, []);

  return (
    <>
      <div className='searchbar'>
        <BackArrow />
        <div>
          <input
            className={searchElement.length > 0 ? 'input-show' : 'input-hide'}
            type='text'
            onChange={(event) => setSearchElement(event.target.value)}
            value={searchElement}
            placeholder='Search Pokemon'
          />
          {pokemons ? (
            <div
              className={
                searchElement.length > 0 ? 'suggestions show' : 'suggestions'
              }
            >
              {searchElement.length > 0
                ? pokemons.results.map((pokemon, index) =>
                    pokemon.name
                      .toLocaleLowerCase()
                      .includes(searchElement.toLocaleLowerCase()) ? (
                      <Link to={`/details/${pokemon.name}`} key={index}>
                        {pokemon.name}
                      </Link>
                    ) : (
                      ''
                    )
                  )
                : 'nein'}
            </div>
          ) : (
            ''
          )}
        </div>
        <img
          src='../../../public/icons/DarkLight.svg'
          alt=''
          onClick={themeToggle}
        />
      </div>
    </>
  );
};

export default Searchbar;
