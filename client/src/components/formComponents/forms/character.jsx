import {
  NameField,
  GenderField,
  YearsLivedField,
  RoleField,
  NameMeaningField,
  MarriedField,
  ImageField,
  FatherField,
  MotherField,
  SpouseField,
  ChildrenField,
  SiblinsField,
  OtherNamesField,
  BookNameField,
} from "../formFields/FormFields";
import Button from "../../Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setName,
  setGender,
  setYearsLived,
  setRole,
  setNameMeaning,
  setMarried,
  setImage,
  setFather,
  setMother,
  setSpouse,
  setChildren,
  setSiblins,
  setOtherNames,
  setBookName,
} from "../../../redux/forms/characters";
import "./character.css";

export const Character = () => {
  const {
    name,
    gender,
    yearsLived,
    role,
    nameMeaning,
    married,
    image,
    father,
    mother,
    spouse,
    children,
    siblings,
    otherNames,
    bookName,
  } = useSelector((state) => state.character);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    e.preventDefault();

    switch (e.target.name) {
      case "name":
        dispatch(setName(e.target.value));
        break;

      case "gender":
        dispatch(setGender(e.target.value));
        break;

      case "yearsLived":
        dispatch(setYearsLived(e.target.value));
        break;

      case "role":
        dispatch(setRole(e.target.value));
        break;

      case "nameMeaning":
        dispatch(setNameMeaning(e.target.value));
        break;

      case "married":
        dispatch(setMarried(e.target.value));
        break;

      case "imageUpload":
        dispatch(setImage(e.target.files[0]?.name));
        console.log(e.target.files[0]?.name);
        break;

      case "father":
        dispatch(setFather(e.target.value));
        break;

      case "mother":
        dispatch(setMother(e.target.value));
        break;

      case "spouse":
        dispatch(setSpouse(e.target.value));
        break;

      case "children":
        dispatch(setChildren(e.target.value));
        break;

      case "siblings":
        dispatch(setSiblins(e.target.value));
        break;

      case "otherNames":
        dispatch(setOtherNames(e.target.value));
        break;

      case "book":
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
    console.log(gender);
    console.log(yearsLived);
    console.log(role);
    console.log(nameMeaning);
    console.log(married);
    console.log(image);
    console.log(father);
    console.log(mother);
    console.log(spouse);
    console.log(children);
    console.log(siblings);
    console.log(otherNames);
    console.log(bookName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="cw-form-body">
        <NameField placeholder="ie: Jesus" onChange={handleOnChange} />
        <GenderField onChange={handleOnChange} />
        <YearsLivedField onChange={handleOnChange} />
        <RoleField onChange={handleOnChange} />
        <NameMeaningField onChange={handleOnChange} />
        <MarriedField onChange={handleOnChange} />
        <ImageField onChange={handleOnChange} />
        <FatherField onChange={handleOnChange} />
        <MotherField onChange={handleOnChange} />
        <SpouseField onChange={handleOnChange} />
        <ChildrenField onChange={handleOnChange} />
        <SiblinsField onChange={handleOnChange} />
        <OtherNamesField onChange={handleOnChange} />
        <BookNameField onChange={handleOnChange} />
        <div className="last-control" />
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
