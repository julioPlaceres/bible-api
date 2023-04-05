import { Dropdown } from "../fieldTypes/Dropdown";
import { TextBox } from "../fieldTypes/TextBox";
import { GetAllCharacters } from "../dataArr/CharactersQuery";

export const NameField = () => {
    return (<TextBox labelText="Name"
        placeholder="ie: Jesus"
        name="nameTextBox"
        required={true}
        rows={1} />);
}

export const GenderField = () => {
    const gender = [{ value: "male", label: "Male" }, { value: "female", label: "Female" }];

    return (
        <>
            <Dropdown labelText="Gender"
                name="gender"
                options={gender} />
        </>
    );
}

export const YearsLivedField = () => {
    return (<TextBox labelText="Years Lived"
        placeholder="ie: 930"
        name="yearsLived"
        required={false}
        rows={1} />);
}

export const AuthorField = () => {
    const options = GetAllCharacters();

    return (
        <>
            <Dropdown labelText="Select an Author" name="author" options={options} />
        </>
    );
}