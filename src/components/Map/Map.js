import Rohan from "./Rohan/Rohan";
import Gondor from './Gondor/Gondor'
import Isengard from './Isengard/Isengard'
import Minastirith from './Minastirith/Minastirith'
import Rivendell from './Rivendell/Rivendell'
import Mordor from './Mordor/Mordor'
import Mirkwood from './Mirkwood/Mirkwood'
import Shire from './Shire/Shire'
import Lorien from './Lorien/Lorien'
import Ironhills from './Ironhills/Ironhills'
import "../Map/map.css";
import React from "react";
import { useState } from "react";
const Map = () => {
  const [rohan, setRohan] = useState(false);
  const [gondor, setGondor] = useState(false);
  const [mordor, setMordor] = useState(false);
  const [shire, setShire] = useState(false);
  const [lorien, setLorien] = useState(false);
  const [mirkwood, setMirkwood] = useState(false);
  const [ironhills, setIronhills] = useState(false);
  const [isengard, setIsengard] = useState(false);
  const [minastirith, setMinastirith] = useState(false);
  const [rivendell, setRivendell] = useState(false);

  const rohanMouseOver = () => {
    setRohan(true);
  };
  const rohanMouseOut = () => {
    setRohan(false);
  };

  const gondorMouseOver = () => {
    setGondor(true);
  };
  const gondorMouseOut = () => {
    setGondor(false);
  };
  const mordorMouseOver = () => {
    setMordor(true);
  };
  const mordorMouseOut = () => {
    setMordor(false);
  };
  const shireMouseOver = () => {
    setShire(true);
  };
  const shireMouseOut = () => {
    setShire(false);
  };
  const lorienMouseOver = () => {
    setLorien(true);
  };
  const lorienMouseOut = () => {
    setLorien(false);
  };
  const mirkwoodMouseOver = () => {
    setMirkwood(true);
  };
  const mirkwoodMouseOut = () => {
    setMirkwood(false);
  };
  const ironhillsMouseOver = () => {
    setIronhills(true);
  };
  const ironhillsMouseOut = () => {
    setIronhills(false);
  };
  const isengardMouseOver = () => {
    setIsengard(true);
  };
  const isengardMouseOut = () => {
    setIsengard(false);
  };
  const minastirithMouseOver = () => {
    setMinastirith(true);
  };
  const minastirithMouseOut = () => {
    setMinastirith(false);
  };
  const rivendellMouseOver = () => {
    setRivendell(true);
  };
  const rivendellMouseOut = () => {
    setRivendell(false);
  };
  return (
    <div className="map_container">
      <div className="locations">
        <div
          className="rohan"
          onMouseOver={rohanMouseOver}
          onMouseOut={rohanMouseOut}
        >
          {rohan && <Rohan />}
        </div>
  
          <div
            className="gondor"
            onMouseOver={gondorMouseOver}
            onMouseOut={gondorMouseOut}
          >
            {gondor && <Gondor />}
          </div>
        
       
          <div
            className="mordor"
            onMouseOver={mordorMouseOver}
            onMouseOut={mordorMouseOut}
          >
            {mordor && <Mordor />}
          </div>
  
          <div
            className="shire"
            onMouseOver={shireMouseOver}
            onMouseOut={shireMouseOut}
          >
            {shire && <Shire />}
          </div>
       
          <div
            className="lorien"
            onMouseOver={lorienMouseOver}
            onMouseOut={lorienMouseOut}
          >
            {lorien && <Lorien />}
          </div>
        
          <div
            className="mirkwood"
            onMouseOver={mirkwoodMouseOver}
            onMouseOut={mirkwoodMouseOut}
          >
            {mirkwood && <Mirkwood />}
          </div>
        
        
          <div
            className="ironhills"
            onMouseOver={ironhillsMouseOver}
            onMouseOut={ironhillsMouseOut}
          >
            {ironhills && <Ironhills />}
          </div>
        
        
          <div
            className="isengard"
            onMouseOver={isengardMouseOver}
            onMouseOut={isengardMouseOut}
          >
            {isengard && <Isengard />}
          </div>
        
        
          <div
            className="minastirith"
            onMouseOver={minastirithMouseOver}
            onMouseOut={minastirithMouseOut}
          >
            {minastirith && <Minastirith />}
          </div>
        
        
          <div
            className="rivendell"
            onMouseOver={rivendellMouseOver}
            onMouseOut={rivendellMouseOut}
          >
            {rivendell && <Rivendell />}
          </div>
        
      </div>
    </div>
  );
};

export default Map;
