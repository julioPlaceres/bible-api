import { useState } from "react";
import Select from "./Select";
import { Book } from "../components/formComponents/forms/book";
import { Character } from "../components/formComponents/forms/character";
import { Event } from "../components/formComponents/forms/event";
// import { Material } from "../components/formComponents/forms/material";
// import { Place } from "../components/formComponents/forms/place";
// import { River } from "../components/formComponents/forms/river";
import "./ContentWindow.css";

const modelComponents = {
  BookModel: Book,
  CharacterModel: Character,
  EventModel: Event,
  //"Material",
  //"Place",
  //"River",
};

const ContentWindow = () => {
  const [modelName, setModelName] = useState("");

  const handleModelChange = (event) => {
    event.preventDefault();

    setModelName(event.target.value);
  };

  const ModelComponent = modelComponents[modelName];

  return (
    <div className="cw-main-cont cw-col">
      <div className="cw-method-cont cw-row">
        <Select
          id="modelId"
          label="Select a model"
          name="modelSelect"
          values={Object.keys(modelComponents)}
          onChange={handleModelChange}
        />
      </div>
      {ModelComponent ? (
        <ModelComponent />
      ) : (
        <div className="cw-form-body">
          <h5 className="cw-dft-model">
            Select an option from the Model dropdown
          </h5>
        </div>
      )}
    </div>
  );
};

export default ContentWindow;
