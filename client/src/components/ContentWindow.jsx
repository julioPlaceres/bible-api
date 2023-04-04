import Button from "./Button";
import Select from "./Select";
import "./ContentWindow.css";

const ContentWindow = () => {
  const queryNames = ["QUERY_ALL_BOOKS", "QUERY_ALL_CHARACTERS"];

  const handleSearch = () => {};
  const handleModelChange = () => {};
  const handleReset = () => {};
  const handleSubmit = () => {};

  return (
    <div className="cw-main-cont cw-row">
      <Select
        id="modelId"
        label="Select a model"
        name="modelSelect"
        values={["Book", "Character", "Event", "Material", "Place", "River"]}
        onChange={handleModelChange}
      />

      <div className="cw-form-cont cw-col">
        <div className="cw-method-cont cw-row">
          <Select
            id="methodId"
            label="Select a Method"
            name="methodSelect"
            values={queryNames}
            onChange={handleSearch}
          />
          <Button label="Search" onClick={handleSearch} />
        </div>

        <div className="cw-form-body">
          <form name="myForm" action="/test" method="post">
            <h1>Form Body goes here</h1>
          </form>
        </div>

        <div className="cw-btns-cont cw-row">
          <Button label="Reset" onClick={handleReset} />
          <Button label="submit" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ContentWindow;
