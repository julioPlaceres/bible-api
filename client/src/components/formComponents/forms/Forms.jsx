import {
    NameField, GenderField, YearsLivedField, RoleField, AuthorField,
    NameMeaningField, MarriedField, ImageField, FatherField
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