import React, { Fragment } from "react";
import PropTypes from "prop-types";

const PokeStats = ({ stats }) => {
  return (
    <Fragment>
      {stats.map((statObj, index) => {
        const {
          base_stat,
          stat: { name }
        } = statObj;
        return (
          <div className="pokemon-stat" key={index}>
            <span className="pokemon-stat__title">{name}</span>
            <span className="pokemon-stat__base-point">{base_stat}</span>
          </div>
        );
      })}
    </Fragment>
  );
};

PokeStats.propTypes = {
  stats: PropTypes.array
};
PokeStats.defaultProps = {
  stats: []
};

export default PokeStats;
