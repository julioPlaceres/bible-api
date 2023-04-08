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
  return (
    <div className="f-main-cont">
      <NameField placeholder="ie: Genesis" />
      <AuthorField />
    </div>
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
