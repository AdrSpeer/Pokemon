import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { SearchContext } from './context/Context';
import { useState } from 'react';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import Filter from './pages/Filter/Filter';

function App() {
  const [searchElement, setSearchElement] = useState('');
  return (
    <SearchContext.Provider value={{ searchElement, setSearchElement }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<Details />} />
          <Route path='/types' element={<Filter />} />
        </Routes>
      </BrowserRouter>
    </SearchContext.Provider>
  );
}

export default App;
