import React, { useContext } from 'react'
import { Fav } from '../Contexts/FavContext'

const Favourites = () => {

  const { favList, favDeleteHandler } = useContext(Fav)

  return (
    <div className='fav_chars'>
      <h1> My Favourite Characters ( {favList.length} )</h1>
      <div className="fav_characters">

        <ul>
          {favList?.map((char, index) => <li key={index}>
            <h4>{char.name}</h4>
            <img src={char.img} alt="" />
            <button onClick={() => favDeleteHandler(char.id)}>DELETE💀!</button>
          </li>)}
        </ul>

      </div>
    </div>
  )
}

export default Favourites