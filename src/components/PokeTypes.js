import React from "react";
import PropTypes from "prop-types";
import { getTypeColor } from "../functions/getTypeColor.func";

const PokeTypes = ({ types }) => {
  return (
    <div className="pokemon-types">
      {types.map((typeData, index) => {
        const {
          type: { name: type }
        } = typeData;
        const typeStyle = {
          backgroundColor: getTypeColor(type)
        };
        return (
          <div style={typeStyle} key={index}>
            {type}
          </div>
        );
      })}
    </div>
  );
};

PokeTypes.propTypes = {
  types: PropTypes.array
};
PokeTypes.defaultProps = {
  types: []
};

export default PokeTypes;
