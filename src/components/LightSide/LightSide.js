import React from 'react'
import LightSideText from './LightSideText'
const LightSide = () => {
  return (
    <div className='lightside'>
      <div className="lightside_texts">
        <LightSideText />
      </div>
      <div className="light_side_video">
        <iframe src="https://www.youtube.com/embed/f2Cs-u4b6hI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default LightSide