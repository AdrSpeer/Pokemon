import "./BurgerMenu.css";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  return (
    <Link to={"./types"} className="burger-menu">
      <img src="../../../public/icons/Burger.svg" alt="" />
    </Link>
  );
};

export default BurgerMenu;
