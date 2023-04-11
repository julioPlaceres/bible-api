import {
  NameField,
  GenderField,
  YearsLivedField,
  RoleField,
  AuthorField,
  NameMeaningField,
  MarriedField,
  ImageField,
  FatherField,
  MotherField,
  SpouseField,
  ChildrenField,
  BrotherField,
  SisterField,
  OtherNamesField,
  BookNameField,
  DateTimeField,
  DescriptionField,
  CharactersField,
  LocationField,
} from "../formFields/FormFields";
import Button from "../../Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import { setAuthor, setName } from "../../../redux/forms/book";
import { ADD_BOOK } from "../../../utils/mutation";
import "./Forms.css";

export const Character = () => {
  return (
    <div className="f-main-cont">
      <NameField placeholder="ie: Jesus" />
      <GenderField />
      <YearsLivedField />
      <RoleField />
      <NameMeaningField />
      <MarriedField />
      <ImageField />
      <FatherField />
      <MotherField />
      <SpouseField />
      <ChildrenField />
      <BrotherField />
      <SisterField />
      <OtherNamesField />
      <BookNameField />
    </div>
  );
};

export const Book = () => {
  const { name, author } = useSelector((state) => state.book);
  const [addBook, { data, loading, error }] = useMutation(ADD_BOOK);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    e.preventDefault();

    switch (e.target.name) {
      case "name":
        dispatch(setName(e.target.value));
        break;

      case "author":
        dispatch(setAuthor(e.target.value));
        break;

      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(name);
    console.log(author);

    try {
      const { data } = await addBook({
        variables: { name: name, author: author },
      });
      console.log(data);
    } catch (ex) {
      console.error(ex);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="cw-form-body">
        <div className="f-main-cont">
          <NameField placeholder="ie: Genesis" onChange={handleOnChange} />
          <AuthorField onChange={handleOnChange} />
        </div>
      </div>
      <FormBtns />
    </form>
  );
};

export const Event = () => {
  return (
    <div className="f-main-cont">
      <NameField placeholder="ie: The creation" />
      <DateTimeField />
      <DescriptionField />
      <ImageField />
      <CharactersField />
      <LocationField />
      <BookNameField />
    </div>
  );
};

export const Material = () => {
  return (
    <div className="f-main-cont">
      <NameField placeholder="ie: Gold" />
      <DescriptionField />
      <LocationField />
      <ImageField />
      <BookNameField />
    </div>
  );
};

export const Place = () => {
  return (
    <div className="f-main-cont">
      <NameField placeholder="ie: Jerusalem" />
      <DescriptionField />
      <LocationField />
      <ImageField />
      <BookNameField />
    </div>
  );
};

export const River = () => {
  return (
    <div className="f-main-cont">
      <NameField placeholder="ie: Pishon" />
      <DescriptionField />
      <LocationField />
      <ImageField />
      <BookNameField />
    </div>
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
