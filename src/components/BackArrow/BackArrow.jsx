import { Link } from "react-router-dom";

const BackArrow = () => {
  return (
    <Link to={"/"} className="burger-menu">
      <img src="../../../public/icons/ArrowLeft.svg" alt="" />
    </Link>
  );
};

export default BackArrow;
