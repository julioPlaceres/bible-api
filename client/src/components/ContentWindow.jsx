import { useState } from "react";
import Button from "./Button";
import Select from "./Select";
import {
  Character,
  Book,
  Event,
  Material,
  Place,
  River,
} from "../components/formComponents/forms/Forms";
import { useSelector } from "react-redux";
import "./ContentWindow.css";

const ContentWindow = () => {
  const { name, author } = useSelector((state) => state.book);
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

      case "Material":
        return <Material />;

      case "Place":
        return <Place />;

      case "River":
        return <River />;

      default:
        return (
          <h5 className="cw-dft-model">
            Select an option from the Model dropdown
          </h5>
        );
    }
  };

  const handleModelChange = (event) => {
    event.preventDefault();

    setModelName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name);
    console.log(author);
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

      <form onSubmit={handleSubmit}>
        <div className="cw-form-body">{renderSwitch(modelName)}</div>

        <div className="cw-btns-cont cw-row">
          <Button type="reset" label="Reset" />
          <Button type="submit" label="submit" />
        </div>
      </form>
    </div>
  );
};

export default ContentWindow;
