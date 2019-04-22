import React from "react";
import PokeballImg from "../images/pokeball.svg";

const PokeLoader = props => {
  return (
    <div className="pokeloader">
      <div className="pokeloader__content">
        <img src={PokeballImg} alt="pokeball" />
        <div className="pokeloader__content__text">Loading</div>
      </div>
    </div>
  );
};

export default PokeLoader;
