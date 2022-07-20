import DarkSide from './components/DarkSide/DarkSide'
import LightSide from './components/LightSide/LightSide'
import Header from './components/Header/Header'
import NavLinks from './components/NavLinks/NavLinks'
import Map from './components/Map/Map'
import Loading from './components/Loading/Loading'
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom'
// import Loading from './components/Loading/Loading'
import { useContext, useEffect, useState } from 'react';
import { ThemeSwitcher } from './components/Contexts/ThemeContext';
import './App.css';


function App() {






  const themeData = useContext(ThemeSwitcher)
  const { theme } = themeData
const [loading, setLoading] = useState(false)

// useEffect(() => {
//   setInterval(() => {
// setLoading(true)
//   },2000)
// })


  return (
    <div className="App">



{!loading ? (
  <>
  <Header />
  <NavLinks />

  <Routes>
    {theme && (<Route path='/' element={<LightSide />} />)}
    {!theme && (<Route path='/' element={<DarkSide />} />)}
    <Route path='/map' element={<Map />} />
  </Routes>
  </>
) : <Loading />}





      {/* <Header />
      <NavLinks />

      <Routes>
        {theme && (<Route path='/' element={<LightSide />} />)}
        {!theme && (<Route path='/' element={<DarkSide />} />)}
        <Route path='/map' element={<Map />} />
      </Routes> */}

    </div>
  );
}

export default App;
