import React from "react";
import propTypes from "prop-types";
import PokeTypes from "./PokeTypes";
import PokeStats from "./PokeStats";

const PokemonTeam = ({ pokemonTeam, removeFromTeam }) => {
  return (
    <div className="pokemon-team">
      <h2 className="pokemon-team__title">My Team</h2>

      {pokemonTeam.length > 0 ? (
        pokemonTeam.map((pokemon, index) => {
          const { name, sprite, stats, abilities, types } = pokemon;
          return (
            <div className="pokemon-team__member" key={index}>
              <div className="pokemon-team__member__body">
                <div className="sprite-wrapper">
                  <div className="sprite-wrapper__sprite">
                    <img src={sprite} />
                  </div>
                </div>

                <div className="info-wrapper">
                  <div className="info-wrapper__name">{name}</div>
                  <PokeTypes types={types} />
                  <div>Abilities:</div>
                  <div className="info-wrapper__abilities-info">
                    {abilities
                      .map(abilityObj => {
                        const {
                          ability: { name }
                        } = abilityObj;
                        return name;
                      })
                      .join(",")}
                  </div>
                </div>

                <div className="stats-block">
                  <PokeStats stats={stats} />
                </div>
              </div>
              <div className="footer">
                <button
                  className="footer__close-btn"
                  onClick={removeFromTeam.bind(null, index)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="pokemon-team__title">No pokemon on your team</div>
      )}
    </div>
  );
};

PokemonTeam.propTypes = {
  pokemonTeam: propTypes.array,
  removeFromTeam: propTypes.func
};
PokemonTeam.defaultProps = {
  pokemonTeam: []
};

export default PokemonTeam;
