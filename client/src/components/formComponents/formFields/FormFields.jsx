import { Dropdown } from "../fieldTypes/Dropdown";
import { TextBox } from "../fieldTypes/TextBox";
import { GetAllCharacters } from "../dataArr/CharactersQuery";

const yesNo = [{
    value: "yes",
    label: "Yes",
},
{
    value: "no",
    label: "No"
}
];

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

export const RoleField = () => {
    return (<TextBox
        labelText="Role"
        placeholder="ie: The Messiah"
        required={false}
        rows={1} />
    );
}

export const NameMeaningField = () => {
    return (<TextBox
        labelText="Name Meaning"
        placeholder="ie: The Savior"
        required={false}
        rows={1} />
    );
}

export const MarriedField = () => {
    return (<Dropdown
        name="married"
        labelText="Select an option"
        options={yesNo} />
    );
}

export const ImageField = () => {
    return (<>
        {/* Will be used to upload images */}
    </>
    );
}

export const FatherField = () => {
    const options = GetAllCharacters();

    return (
        <>
            <Dropdown
                name="Father"
                labelText="Select an Character"
                options={options} />
        </>
    );
}

export const AuthorField = () => {
    const options = GetAllCharacters();

    return (
        <>
            <Dropdown
                name="author"
                labelText="Select an Author"
                options={options} />
        </>
    );
}