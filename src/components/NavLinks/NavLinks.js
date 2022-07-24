import { movieSeries } from './LinkInfos'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const NavLinks = () => {

  const movieSeriesIterator = movieSeries.map(movie => (
    <li className='movie_series_li' key={movie.id}>
      <h4>{movie.name}</h4>
      <img className='list_img' src={movie.img} alt="" />
      <div className="year_imbd">
        <span>{movie.year}</span>
        <span>{movie.imdb}</span>
      </div>
    </li>
  ))

  const [show, setShow] = useState(false)

  return (
    <div className='nav_links'>
      <div className="wrapper">
        <button onClick={() => setShow(!show)}>Movie Series </button>
        {show && (<ul className='movie_series_ul'>{movieSeriesIterator}</ul>)}
      </div>

      <Link to="/map">The Realm of Middle-Earth</Link>
      <Link to="/favourites">Favourites</Link>
      <Link to="/cinema">Popcorn</Link>

    </div>
  )
}

export default NavLinks;