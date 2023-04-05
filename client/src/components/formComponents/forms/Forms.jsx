import { NameField, GenderField, YearsLivedField, AuthorField } from "../formFields/FormFields";
import "./Forms.css";

export const Character = () => {
    return (
        <div className="f-main-cont">
            <NameField />
            <GenderField />
            <YearsLivedField />
        </div>
    );
}

export const Book = () => {
    return (
        <div className="f-main-cont">
            <AuthorField />
        </div>
    );
}