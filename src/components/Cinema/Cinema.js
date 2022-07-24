import React, { useState } from "react";
import "../Cinema/cinema.css";

const Cinema = () => {

  const movieArrange = [
    {
      id: 1,
      name: "The Fellow ship of the Ring",
      url: "https://www.youtube.com/embed/OXG-NXMwrK0",
    },
    {
      id: 2,
      name: "The Two Towers",
      url: "https://www.youtube.com/embed/EApCLbgAE5E",
    },
    {
      id: 3,
      name: "The Return of the King",
      url: "https://www.youtube.com/embed/7lwJOxN_gXc",
    },
    {
      id: 4,
      name: "An Unexpected Journey",
      url: "https://www.youtube.com/embed/SDnYMbYB-nU",
    },
    {
      id: 5,
      name: "The Desolation of Smaug",
      url: "https://www.youtube.com/embed/OPVWy1tFXuc",
    },
    {
      id: 6,
      name: "The Battle of the Five Armies",
      url: "https://www.youtube.com/embed/iVAgTiBrrDA",
    },
  ];
  const [movie, setMovie] = useState()

  const optionHandler = (e) => {
    movieArrange.find(el => {
      if (el.name == e.target.value) {
        setMovie(el.url)
      }
    })
  }

  const optionsCreator = movieArrange.map(option => <option key={option.id} value={option.name}>{option.name}</option>)


  return (
    <div className="cinema">
      <div className="choose">
        <select name="movies" onChange={(e) => optionHandler(e)}>
          <option value="">Please Select a Movie!</option>
          {optionsCreator}
        </select>
      </div>
      <div className="movieYoutube">
        <iframe src={movie} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

    </div>
  );
};

export default Cinema;





