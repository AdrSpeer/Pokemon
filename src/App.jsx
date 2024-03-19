import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SearchContext } from "./context/Context";
import { ThemeContext } from "./context/Context";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Filter from "./pages/Filter/Filter";

function App() {
  const [searchElement, setSearchElement] = useState("");
  const [theme, setTheme] = useState("");
  return (
    <div className={theme ? "main-div main-div-dark" : "main-div"}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <SearchContext.Provider value={{ searchElement, setSearchElement }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details" element={<Details />} />
              <Route path="/types" element={<Filter />} />
            </Routes>
          </BrowserRouter>
        </SearchContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
