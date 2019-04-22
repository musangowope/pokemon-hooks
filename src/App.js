import React, { Fragment, useState } from "react";
import "./css/styles.scss";
import Pokedex from "./components/Pokedex";
import backgroundImg from "./images/background-img.jpg";
import PokemonPreview from "./components/PokemonPreview";
import { PokeDataStructure } from "./constants/PokeDataStructure";
import PokemonTeam from "./components/PokemonTeam";

const App = () => {
  const [pokeData, setPokeData] = useState({
    ...PokeDataStructure
  });

  const clearPreviewPokeData = () => {
    setPokeData({
      ...PokeDataStructure
    });
  };

  const getPokeData = data => {
    const {
      name,
      stats,
      abilities,
      types,
      sprites: { front_default: sprite }
    } = data;
    setPokeData({
      name,
      stats,
      abilities,
      types,
      sprite,
      isPokeDataPresent: true
    });
  };

  const [pokemonTeamState, setPokemonTeamState] = useState([]);

  const addToTeam = obj => {
    setPokemonTeamState([...pokemonTeamState, obj]);
  };

  const removeFromTeam = index => {
    const newTeam = [...pokemonTeamState];
    newTeam.splice(index, 1);
    setPokemonTeamState(newTeam);
  };

  const { name, stats, abilities, types, sprite, isPokeDataPresent } = pokeData;

  return (
    <Fragment>
      <div className="dashboard">
        <div
          className="dashboard__search"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="dashboard__search__content">
            <h5 className="dashboard__search__content__title">Pokemon Hooks</h5>
            <div className="dashboard__search__content__input-wrapper">
              <Pokedex
                getPokeData={getPokeData}
                clearPreviewPokeData={clearPreviewPokeData}
              />
            </div>

            {isPokeDataPresent && (
              <div className="dashboard__search__content__preview-wrapper">
                <PokemonPreview
                  name={name}
                  stats={stats}
                  abilities={abilities}
                  types={types}
                  sprite={sprite}
                  addToTeam={addToTeam}
                />
              </div>
            )}
          </div>

          <div className="dashboard__search__content__overlay" />
        </div>
        <div className="dashboard__team-wrapper">
          <PokemonTeam pokemonTeam={pokemonTeamState} removeFromTeam={removeFromTeam}/>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
