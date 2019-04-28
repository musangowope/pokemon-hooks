import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { BaseRequest } from "../constants/BaseRequest";
import RingLoader from "./RingLoader";

const AbilityInfoFinder = ({ closeAbilityFinder, abilityUrl: url }) => {
  const [abilityInfo, setAbilityinfo] = useState({
    name: "",
    description: ""
  });

  const [requestState, setRequestState] = useState({ ...BaseRequest });

  const updateRequestSearch = obj => {
    setRequestState({
      ...BaseRequest,
      ...obj
    });
  };

  useEffect(() => {
    updateRequestSearch({ loading: true });

    axios
      .get(url)
      .then(res => {
        updateRequestSearch({ success: true });
        const {
          data: { name, effect_entries }
        } = res;

        const effect = effect_entries.find((_, index) => index === 0).effect;
        setAbilityinfo({
          name,
          description: effect
        });
      })
      .catch(e => {
        updateRequestSearch({
          failed: true,
          errorMessage: "Failed to load ability"
        });
      });
  }, [url]);

  const { name, description } = abilityInfo;
  const { success, loading, failed, errorMessage } = requestState;

  return (
    <Fragment>
      <div className="finder-overlay" />
      <div className="ability-information">
        <div className="ability-information__close-btn-wrapper">
          <button onClick={closeAbilityFinder}>Close</button>
        </div>

        {loading && (
          <div className="ability-information__loader-wrapper">
            <RingLoader />
          </div>
        )}

        {success && (
          <div className="ability-information__content">
            <h4>
              Ability Name: <span className="ability-name">{name}</span>
            </h4>
            <div>{description}</div>
          </div>
        )}

        {failed && (
          <div className="pokedex__response-text">{errorMessage}</div>
        )}
      </div>
    </Fragment>
  );
};

AbilityInfoFinder.propTypes = {
  closeAbilityFinder: PropTypes.func,
  abilityUrl: PropTypes.string
};
AbilityInfoFinder.defaultProps = {
  abilityUrl: ""
};

export default AbilityInfoFinder;
