import { Dropdown } from "../fieldTypes/Dropdown";
import { TextBox } from "../fieldTypes/TextBox";
import { ImageUpload } from "../fieldTypes/Upload";
import { GetAllCharacters, GetAllBooks, GetAllPlaces } from "../dataArr/Query";

const yesNo = [
  {
    value: "yes",
    label: "Yes",
  },
  {
    value: "no",
    label: "No",
  },
];

export const NameField = ({ value, placeholder, onChange }) => {
  return (
    <TextBox
      labelText="Name"
      value={value}
      placeholder={placeholder}
      name="name"
      required={true}
      rows={1}
      onChange={onChange}
    />
  );
};

export const GenderField = ({ value, onChange }) => {
  const gender = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  return (
    <>
      <Dropdown
        labelText="Gender"
        value={value}
        name="gender"
        options={gender}
        onChange={onChange}
      />
    </>
  );
};

export const YearsLivedField = ({ value, onChange }) => {
  return (
    <TextBox
      labelText="Years Lived"
      value={value}
      placeholder="ie: 930"
      name="yearsLived"
      required={false}
      rows={1}
      onChange={onChange}
    />
  );
};

export const RoleField = ({ value, onChange }) => {
  return (
    <TextBox
      value={value}
      labelText="Role"
      name="role"
      placeholder="ie: The Messiah"
      required={false}
      onChange={onChange}
      rows={1}
    />
  );
};

export const NameMeaningField = ({ value, onChange }) => {
  return (
    <TextBox
      name="nameMeaning"
      value={value}
      labelText="Name Meaning"
      placeholder="ie: The Savior"
      required={false}
      onChange={onChange}
      rows={1}
    />
  );
};

export const MarriedField = ({ value, onChange }) => {
  return (
    <Dropdown
      name="married"
      labelText="Married"
      options={yesNo}
      value={value}
      onChange={onChange}
    />
  );
};

export const ImageField = ({ value, onChange }) => {
  return (
    <>
      <ImageUpload value={value} onChange={onChange} />
    </>
  );
};

export const FatherField = ({ value, onChange }) => {
  const options = GetAllCharacters();

  return (
    <>
      <Dropdown
        name="father"
        labelText="Father"
        options={options}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export const MotherField = ({ value, onChange }) => {
  const options = GetAllCharacters();

  return (
    <>
      <Dropdown
        name="mother"
        labelText="Mother"
        options={options}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export const SpouseField = ({ value, onChange }) => {
  const options = GetAllCharacters();

  return (
    <>
      <Dropdown
        name="spouse"
        labelText="Spouse(s)"
        options={options}
        multiple={true}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export const ChildrenField = ({ value, onChange }) => {
  const options = GetAllCharacters();

  return (
    <>
      <Dropdown
        name="children"
        labelText="Children(s)"
        options={options}
        multiple={true}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export const SiblinsField = ({ value, onChange }) => {
  const options = GetAllCharacters();

  return (
    <>
      <Dropdown
        name="siblins"
        labelText="Siblin(s)"
        options={options}
        multiple={true}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export const OtherNamesField = ({ value, onChange }) => {
  return (
    <>
      <TextBox
        name="otherNames"
        labelText="Other Names"
        placeholder="Separate names by a ','
        ie: The Savior, The Messiah"
        rows={3}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export const AuthorField = ({ onChange }) => {
  const options = GetAllCharacters();

  return (
    <>
      <Dropdown
        name="author"
        labelText="Author"
        options={options}
        onChange={onChange}
      />
    </>
  );
};

export const BookNameField = ({ value, onChange }) => {
  const options = GetAllBooks();

  return (
    <>
      <Dropdown
        name="book"
        labelText="Book"
        options={options}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export const DateTimeField = ({ value, onChange }) => {
  return (
    <>
      <TextBox
        name="dateTime"
        value={value}
        labelText="Date Time"
        placeholder="ie: 25 BC, or the begining"
        onChange={onChange}
      />
    </>
  );
};

export const DescriptionField = ({ value, onChange }) => {
  return (
    <>
      <TextBox
        name="description"
        value={value}
        labelText="Description"
        placeholder="Brief description of the event"
        required={true}
        rows={5}
        onChange={onChange}
      />
    </>
  );
};

export const CharactersField = ({ value, onChange }) => {
  const options = GetAllCharacters();

  return (
    <>
      <Dropdown
        name="character"
        labelText="Characters"
        options={options}
        value={value}
        multiple={true}
        onChange={onChange}
      />
    </>
  );
};

export const LocationField = ({ value, onChange }) => {
  const options = GetAllPlaces();

  return (
    <>
      <Dropdown
        name="location"
        labelText="Location"
        options={options}
        multiple={true}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
