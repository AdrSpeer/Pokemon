import Header from "../../components/Header/Header";
import Searchbar from "../../components/Searchbar/Searchbar";
import PokeCardSmall from "../../components/PokeCardSmall/PokeCardSmall";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Searchbar />
      <PokeCardSmall />
    </>
  );
};

export default Home;
