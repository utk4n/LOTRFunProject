import React, { useEffect,useContext } from 'react'
import useFirebase from '../hooks/FetchData'
import LightSideText from './LightSideText'
import { Fav } from '../Contexts/FavContext'


const LightSide = () => {
  const { favHandler, favList} = useContext(Fav)

const {data, fetcher} = useFirebase();

useEffect( () => {
fetcher("https://lotrprojectapi-default-rtdb.firebaseio.com/characters/good.json")
},[fetcher])


  return (
    <div className='lightside'>
      <div className="lightside_text_and_video">
      <div className="lightside_texts">
        <LightSideText />
      </div>
      <div className="light_side_video">
        <iframe src="https://www.youtube.com/embed/f2Cs-u4b6hI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      </div>
      <div className="lightside_characters">
        <h1>Characters</h1>
       {data.length > 0 && (
        <ul>
        {data?.map((char,index) => <li key={index}>
          <h4>{char.name}</h4>
          <img src={char.img} alt="" />
          <button disabled={favList.find(fav => fav.id == char.id)} onClick={() => favHandler(char)}>FAV❤️!</button>
        </li>)}
        </ul>
       )}
        

      </div>
    </div>
  )
}

export default LightSide