import Select from "./Select";
import Button from "./Button";
import { GetAllBooks, GetAllCharacters } from "./queryComponents/Query";
import "./QueryView.css";
import { useState } from "react";

const renderSwitch = (params) => {
  switch (params) {
    case "QUERY_ALL_BOOKS":
      return <GetAllBooks />

    case "QUERY_ALL_CHARACTERS":
      return <GetAllCharacters />

    default:
      return <GetAllCharacters />
  }
}

export const QueryView = () => {
  const [method, setMethod] = useState("");
  const queryNames = ["QUERY_ALL_BOOKS", "QUERY_ALL_CHARACTERS"];
  const handleSearch = (event) => {
    event.preventDefault();

    const methodEl = document.getElementById("methodId")
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

      <div className="qv-result-body">
        {renderSwitch(method)}
      </div>

    </div>
  );
};
