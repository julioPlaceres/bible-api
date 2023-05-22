import { useState } from "react";
import Select from "./Select";
import { Book } from "../components/formComponents/forms/book";
import { Character } from "../components/formComponents/forms/character";
import { Event } from "../components/formComponents/forms/event";
import "./ContentWindow.css";

const ContentWindow = () => {
  const [modelName, setModelName] = useState("");

  const modelNames = [
    "Book",
    "Character",
    "Event",
    "Material",
    "Place",
    "River",
  ];

  const renderSwitch = (modelName) => {
    switch (modelName) {
      case "Book":
        return <Book />;

      case "Character":
        return <Character />;

      case "Event":
        return <Event />;

      // case "Material":
      //   return <Material />;

      // case "Place":
      //   return <Place />;

      // case "River":
      //   return <River />;

      default:
        return (
          <div className="cw-form-body">
            <h5 className="cw-dft-model">
              Select an option from the Model dropdown
            </h5>
          </div>
        );
    }
  };

  const handleModelChange = (event) => {
    event.preventDefault();

    setModelName(event.target.value);
  };

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
      {renderSwitch(modelName)}
    </div>
  );
};

export default ContentWindow;
