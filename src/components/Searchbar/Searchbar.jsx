import "./Searchbar.css";
import { useContext } from "react";
import { SearchContext } from "../../context/Context";
import { ThemeContext } from "../../context/Context";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Searchbar = () => {
  const { searchElement, setSearchElement } = useContext(SearchContext);
  const { setTheme } = useContext(ThemeContext);

  const themeToggle = () => {
    setTheme((dark) => !dark);
  };
  return (
    <>
      <div className="searchbar">
        <BurgerMenu />
        <input type="text" className="search" onChange={(event) => setSearchElement(event.target.value)} value={searchElement} placeholder="Search Pokemon" />
        <img src="../../../public/icons/DarkLight.svg" alt="" onClick={themeToggle} />
      </div>
    </>
  );
};

export default Searchbar;
