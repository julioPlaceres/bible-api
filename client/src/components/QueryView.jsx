import Select from "./Select";
import Button from "./Button";
import {
  GetAllBooks,
  GetAllCharacters,
  GetAllEvents,
  GetAllMaterials,
  GetAllPlaces,
  GetAllRivers,
} from "./queryComponents/Query";
import "./QueryView.css";
import { useState } from "react";

const queryComponents = {
  QUERY_ALL_BOOKS: GetAllBooks,
  QUERY_ALL_CHARACTERS: GetAllCharacters,
  QUERY_ALL_EVENTS: GetAllEvents,
  QUERY_ALL_MATERIALS: GetAllMaterials,
  QUERY_ALL_PLACES: GetAllPlaces,
  QUERY_ALL_RIVERS: GetAllRivers,
};

export const QueryView = () => {
  const [method, setMethod] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    setMethod(event.target.value);
  };

  const QueryComponent = queryComponents[method];

  return (
    <div className="qv-col">
      <div className="qv-row qv-select-cont">
        <Select
          id="methodId"
          label="Select a Method"
          name="methodSelect"
          values={Object.keys(queryComponents)}
          onChange={handleSearch}
        />
        <Button label="Search" onClick={handleSearch} />
      </div>

      <div className="qv-result-body">
        {QueryComponent ? (
          <QueryComponent />
        ) : (
          <h5 className="cw-dft-method">
            Select an option from the Method dropdown
          </h5>
        )}
      </div>
    </div>
  );
};
