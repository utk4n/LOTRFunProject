import React, { useContext } from 'react'
import { Fav } from '../Contexts/FavContext'
import { useEffect } from 'react';

import DarkSideText from './DarkSideText';
import useFirebase from '../hooks/FetchData'

const DarkSide = () => {

  const { data, fetcher } = useFirebase();
  const { favHandler, favList } = useContext(Fav)

  useEffect(() => {
    fetcher("https://lotrprojectapi-default-rtdb.firebaseio.com/characters/evil.json")
  }, [fetcher])

  return (
    <div className="darkside">
      <div className="darkside_text_and_video">
        <div className="darkside_texts">
          <DarkSideText />
        </div>
        <div className="dark_side_video">
          <iframe src="https://www.youtube.com/embed/c6yq7SuaTr0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <div className="darkside_characters">
        <h1>Characters</h1>
        {data.length > 0 && (
          <ul>
            {data?.map((char, index) => <li key={index}>
              <h4>{char.name}</h4>
              <img src={char.img} alt="" />
              <button disabled={favList.find(fav => fav.id === char.id)} onClick={() => favHandler(char)}>FAV❤️!</button>
            </li>)}
          </ul>
        )}
      </div>
    </div>)
}

export default DarkSide;


