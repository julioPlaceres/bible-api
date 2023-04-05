import { TextBox } from "../fieldTypes/TextBox";

function NameTextBox() {
    return (<TextBox labelText="Name:"
        placeholder="Enter the name of the character"
        name="nameTextBox"
        required={true}
        rows={1}
        cols={2} />);
}

export default NameTextBox;