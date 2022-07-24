import { Routes, Route } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react';
import { ThemeSwitcher } from './components/Contexts/ThemeContext';

import DarkSide from './components/DarkSide/DarkSide'
import LightSide from './components/LightSide/LightSide'
import Header from './components/Header/Header'
import NavLinks from './components/NavLinks/NavLinks'
import Map from './components/Map/Map'
import Loading from './components/Loading/Loading'
import Favourites from './components/Favourites/Favourites'
import Cinema from './components/Cinema/Cinema'

import './App.css';

function App() {


  const themeData = useContext(ThemeSwitcher)
  const { theme } = themeData
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setLoading(true)
    }, 4000)
  })


  return (
    <div className="App">

      {loading ? (
        <>
          <Header />
          <NavLinks />

          <Routes>
            {theme && (<Route path='/' element={<LightSide />} />)}
            {!theme && (<Route path='/' element={<DarkSide />} />)}
            <Route path='/map' element={<Map />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/cinema' element={<Cinema />} />
          </Routes>

        </>
      ) : <Loading />}
    </div>
  );
}

export default App;
