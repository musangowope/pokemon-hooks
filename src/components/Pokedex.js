import React, { useRef, useState } from "react";
import axios from "axios";
import PokeLoader from "./PokeLoader";

const BaseRequest = {
  success: false,
  loading: false,
  failed: false
};

const Pokedex = ({ getPokeData, clearPreviewPokeData }) => {
  const [requestState, setRequestState] = useState({ ...BaseRequest });
  const inputRef = useRef();

  const updateState = obj => {
    setRequestState({
      ...BaseRequest,
      ...obj
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateState({ loading: true });
    const {
      current: { value }
    } = inputRef;

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then(res => {
        const { data } = res;
        updateState({ success: true });
        getPokeData(data);
      })
      .catch(e => {
        clearPreviewPokeData();
        updateState({ failed: true });
      });
  };

  const { success, loading, failed } = requestState;

  return (
    <div className="pokedex">
      <form onSubmit={handleSubmit}>
        <input placeholder="charizard, bayleef, meowth" ref={inputRef} />
        {success && (
          <div className="pokedex__response-text">Found data in records</div>
        )}
        {loading && <PokeLoader />}
        {failed && (
          <div className="pokedex__response-text">Could not find pokemon</div>
        )}
      </form>
    </div>
  );
};
export default Pokedex;
