import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to={"/"}>
      <div className="header-logo">
        <img src="../../../public/img/PokeMonLogo.svg" alt="" />
      </div>
    </Link>
  );
};

export default Header;
