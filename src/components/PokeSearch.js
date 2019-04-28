import React, { useRef, useState } from "react";
import axios from "axios";
import PokeLoader from "./PokeLoader";
import { BaseRequest } from "../constants/BaseRequest";

const PokeSearch = ({ getPokeData, clearPreviewPokeData }) => {
  const [requestState, setRequestState] = useState({ ...BaseRequest });
  const inputRef = useRef("");

  const updateRequestSearch = obj => {
    setRequestState({
      ...BaseRequest,
      ...obj
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateRequestSearch({ loading: true });
    const {
      current: { value }
    } = inputRef;

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then(res => {
        const { data } = res;
        updateRequestSearch({ success: true });
        getPokeData(data);
      })
      .catch(e => {
        clearPreviewPokeData();
        updateRequestSearch({
          failed: true,
          errorMessage: "Could not find pokemon record"
        });
      });
  };

  const { success, loading, failed, errorMessage } = requestState;

  return (
    <div className="pokesearch">
      <form onSubmit={handleSubmit}>
        <input placeholder="charizard, bayleef, meowth" ref={inputRef} />
        {success && (
          <div className="pokesearch__response-text">Found data in records</div>
        )}
        {loading && <PokeLoader />}
        {failed && <div className="pokesearch__response-text">{errorMessage}</div>}
      </form>
    </div>
  );
};
export default PokeSearch;
