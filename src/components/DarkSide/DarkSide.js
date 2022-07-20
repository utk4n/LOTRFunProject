import React from 'react'
import DarkSideText from './DarkSideText';
const DarkSide = () => {
  return (
    <div className="darkside">
      <div className="darkside_texts">
        <DarkSideText />
      </div>
      <div className="dark_side_video">
        <iframe src="https://www.youtube.com/embed/c6yq7SuaTr0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>)
}

export default DarkSide;


