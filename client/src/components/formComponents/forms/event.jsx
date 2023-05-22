import {
  NameField,
  DateTimeField,
  DescriptionField,
  ImageField,
  CharactersField,
  LocationField,
  BookNameField,
} from "../formFields/FormFields";
import Button from "../../Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setName,
  setDateTime,
  setDescription,
  setImage,
  setCharacters,
  setLocation,
  setBookName,
} from "../../../redux/forms/event";

export const Event = () => {
  const { name, dateTime, description, image, characters, location, bookName } =
    useSelector((state) => state.event);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    e.preventDefault();

    switch (e.target.name) {
      case "name":
        dispatch(setName(e.target.value));
        break;

      case "dateTime":
        dispatch(setDateTime(e.target.value));
        break;

      case "description":
        dispatch(setDescription(e.target.value));
        break;

      case "imageUpload":
        dispatch(setImage(e.target.files[0]?.name));
        break;

      case "character":
        dispatch(setCharacters(e.target.value));
        break;

      case "location":
        dispatch(setLocation(e.target.value));
        break;

      case "bookName":
        dispatch(setBookName(e.target.value));
        break;

      default:
        break;
    }

    console.log(e.target.name);
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(name);
    console.log(dateTime);
    console.log(description);
    console.log(image);
    console.log(characters);
    console.log(location);
    console.log(bookName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="cw-form-body">
        <div className="f-main-cont">
          <NameField
            placeholder="ie: The resurrection"
            onChange={handleOnChange}
          />
          <DateTimeField onChange={handleOnChange} />
          <DescriptionField onChange={handleOnChange} />
          <ImageField onChange={handleOnChange} />
          <CharactersField onChange={handleOnChange} />
          <LocationField onChange={handleOnChange} />
          <BookNameField onChange={handleOnChange} />
        </div>
      </div>
      <FormBtns />
    </form>
  );
};

const FormBtns = () => {
  return (
    <div className="cw-btns-cont cw-row">
      <Button type="reset" label="Reset" />
      <Button type="submit" label="submit" />
    </div>
  );
};
