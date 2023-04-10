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

const renderSwitch = (params) => {
  switch (params) {
    case "QUERY_ALL_BOOKS":
      return <GetAllBooks />;

    case "QUERY_ALL_CHARACTERS":
      return <GetAllCharacters />;

    case "QUERY_ALL_EVENTS":
      return <GetAllEvents />;

    case "QUERY_ALL_MATERIALS":
      return <GetAllMaterials />;

    case "QUERY_ALL_PLACES":
      return <GetAllPlaces />;

    case "QUERY_ALL_RIVERS":
      return <GetAllRivers />;

    default:
      return <h5 className="cw-dft-method">Select an option from the Method dropdown</h5>;
  }
};

export const QueryView = () => {
  const [method, setMethod] = useState("");
  const queryNames = [
    "QUERY_ALL_BOOKS",
    "QUERY_ALL_CHARACTERS",
    "QUERY_ALL_EVENTS",
    "QUERY_ALL_MATERIALS",
    "QUERY_ALL_PLACES",
    "QUERY_ALL_RIVERS",
  ];
  const handleSearch = (event) => {
    event.preventDefault();

    const methodEl = document.getElementById("methodId");
    setMethod(methodEl.value);
  };

  return (
    <div className="qv-col">
      <div className="qv-row qv-select-cont">
        <Select
          id="methodId"
          label="Select a Method"
          name="methodSelect"
          values={queryNames}
          onChange={handleSearch}
        />
        <Button label="Search" onClick={handleSearch} />
      </div>

      <div className="qv-result-body">{renderSwitch(method)}</div>
    </div>
  );
};
