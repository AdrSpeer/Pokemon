import "./Searchbar.css";
import { useContext } from "react";
import { SearchContext } from "../../context/Context";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import DarkLight from "../../assets/svg/DarkLight";

const Searchbar = () => {
  const { searchElement, setSearchElement } = useContext(SearchContext);

  return (
    <>
      <div className="searchbar">
        <BurgerMenu />
        <input type="text" className="search" onChange={(event) => setSearchElement(event.target.value)} value={searchElement} placeholder="Search Pokemon" />
        <DarkLight />
      </div>
    </>
  );
};

export default Searchbar;
