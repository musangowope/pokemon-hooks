import React, { Fragment } from "react";
import PropTypes from "prop-types";
import PokeTypes from "./PokeTypes";

const PokemonPreview = ({
  name,
  stats,
  abilities,
  types,
  sprite,
  addToTeam,
  searchAbility
}) => {
  return (
    <Fragment>
      <div className="pokemon-preview">
        <div className="pokemon-preview__name">{name}</div>
        <div className="pokemon-preview__thumbnail">
          <img src={sprite} alt="pokemon-image" />
        </div>

        <PokeTypes types={types} />

        <div>Abilities</div>
        <div>
          {abilities.map(abilityObj => {
            const {
              ability: { name, url }
            } = abilityObj;
            return (
              <button onClick={searchAbility.bind(null, url)}>{name}</button>
            );
          })}
        </div>

        <button
          className="pokemon-preview__button--add"
          onClick={addToTeam.bind(null, {
            name,
            stats,
            abilities,
            types,
            sprite
          })}
        >
          Add to team
        </button>
      </div>
    </Fragment>
  );
};

PokemonPreview.propTypes = {
  name: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
  abilities: PropTypes.array.isRequired,
  types: PropTypes.array.isRequired,
  sprite: PropTypes.string.isRequired,
  addToTeam: PropTypes.func,
  searchAbility: PropTypes.func
};

export default PokemonPreview;
