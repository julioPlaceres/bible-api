import { useState } from "react";
import Button from "./Button";
import Select from "./Select";
import { Character, Book } from "../components/formComponents/forms/Forms";
import "./ContentWindow.css";

const renderSwitch = (params) => {
  switch (params) {
    case "Book":
      return <Book />

    case "Character":
      return <Character />

    default:
      return <Character />
  }
}

const ContentWindow = () => {
  const [modelName, setModelName] = useState("");
  const modelNames = ["Book", "Character", "Event", "Material", "Place", "River"];

  const handleModelChange = (event) => {
    event.preventDefault();

    setModelName(event.target.value);
  };

  const handleReset = () => { };
  const handleSubmit = () => { };

  return (
    <div className="cw-main-cont cw-col">

      <div className="cw-method-cont cw-row">
        <Select
          id="modelId"
          label="Select a model"
          name="modelSelect"
          values={modelNames}
          onChange={handleModelChange}
        />
      </div>

      <div className="cw-form-body">
        {renderSwitch(modelName)}
      </div>

      <div className="cw-btns-cont cw-row">
        <Button label="Reset" onClick={handleReset} />
        <Button label="submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default ContentWindow;
