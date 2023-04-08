import { Dropdown } from "../fieldTypes/Dropdown";
import { TextBox } from "../fieldTypes/TextBox";
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

export const NameField = ({ placeholder }) => {
  return (
    <TextBox
      labelText="Name"
      placeholder={placeholder}
      name="nameTextBox"
      required={true}
      rows={1}
    />
  );
};

export const GenderField = () => {
  const gender = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  return (
    <>
      <Dropdown labelText="Gender" name="gender" options={gender} />
    </>
  );
};

export const YearsLivedField = () => {
  return (
    <TextBox
      labelText="Years Lived"
      placeholder="ie: 930"
      name="yearsLived"
      required={false}
      rows={1}
    />
  );
};

export const RoleField = () => {
  return (
    <TextBox
      labelText="Role"
      placeholder="ie: The Messiah"
      required={false}
      rows={1}
    />
  );
};

export const NameMeaningField = () => {
  return (
    <TextBox
      labelText="Name Meaning"
      placeholder="ie: The Savior"
      required={false}
      rows={1}
    />
  );
};

export const MarriedField = () => {
  return <Dropdown name="married" labelText="Married" options={yesNo} />;
};

export const ImageField = () => {
  return <>{/* Will be used to upload images */}</>;
};

export const FatherField = () => {
  const options = GetAllCharacters();

  return (
    <>
      <Dropdown name="father" labelText="Father" options={options} />
    </>
  );
};

export const MotherField = () => {
  const options = GetAllCharacters();

  return (
    <>
      <Dropdown name="mother" labelText="Mother" options={options} />
    </>
  );
};

export const SpouseField = () => {
  const options = GetAllCharacters();

  return (
    <>
      <Dropdown
        name="spouse"
        labelText="Spouse(s)"
        options={options}
        multiple={true}
      />
    </>
  );
};

export const ChildrenField = () => {
  const options = GetAllCharacters();

  return (
    <>
      <Dropdown
        name="children"
        labelText="Children(s)"
        options={options}
        multiple={true}
      />
    </>
  );
};

export const BrotherField = () => {
  const options = GetAllCharacters();

  return (
    <>
      <Dropdown
        name="brother"
        labelText="Brother(s)"
        options={options}
        multiple={true}
      />
    </>
  );
};

export const SisterField = () => {
  const options = GetAllCharacters();

  return (
    <>
      <Dropdown
        name="sister"
        labelText="Sister(s)"
        options={options}
        multiple={true}
      />
    </>
  );
};

export const OtherNamesField = () => {
  return (
    <>
      <TextBox
        name="otherNames"
        labelText="Other Names"
        placeholder="Separate names by a ','
        ie: The Savior, The Messiah"
        rows={3}
      />
    </>
  );
};

export const AuthorField = () => {
  const options = GetAllCharacters();

  return (
    <>
      <Dropdown name="author" labelText="Author" options={options} />
    </>
  );
};

export const BookNameField = () => {
  const options = GetAllBooks();

  return (
    <>
      <Dropdown name="book" labelText="Book" options={options} />
    </>
  );
};

export const DateTimeField = () => {
  return (
    <>
      <TextBox
        name="dateTime"
        labelText="Date Time"
        placeholder="ie: 25 BC, or the begining"
      />
    </>
  );
};

export const DescriptionField = () => {
  return (
    <>
      <TextBox
        name="decription"
        labelText="Description"
        placeholder="Brief description of the event"
        required={true}
        rows={5}
      />
    </>
  );
};

export const CharactersField = () => {
  const options = GetAllCharacters();

  return (
    <>
      <Dropdown
        name="character"
        labelText="Characters"
        options={options}
        multiple={true}
      />
    </>
  );
};

export const LocationField = () => {
  const options = GetAllPlaces();

  return (
    <>
      <Dropdown
        name="location"
        labelText="Location"
        options={options}
        multiple={true}
      />
    </>
  );
};
