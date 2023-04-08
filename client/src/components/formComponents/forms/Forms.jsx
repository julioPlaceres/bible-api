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
} from "../formFields/FormFields";
import "./Forms.css";

export const Character = () => {
  return (
    <div className="f-main-cont">
      <NameField />
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
      <AuthorField />
    </div>
  );
};
